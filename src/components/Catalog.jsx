import React from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom';
import 'mdn-polyfills/Array.prototype.find';
import translitMap from 'translit-russian';
import * as actions from '../actions/Catalog';
import Products from './Products';
import Page from './Page';

const transliterate = string => string
  .toLowerCase()
  .replace(/[ьъ.]/g, '')
  .replace(/ /g, '-')
  .split('')
  .map(char => ((translitMap[char] === undefined) ? char : translitMap[char]))
  .join('');

class Catalog extends React.Component {
  componentWillMount() {
    const { products, fetchCatalog } = this.props;
    if (products.length === 0) fetchCatalog();
    this.props.changeCategory(-1);
  }

  render() {
    const { categories, products, currentCategoryId, fetching, error, changeCategory, match } = this.props;

    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const findCategory = (compareFunction, cats = categories) => {
      const resultCat = cats.find(compareFunction);

      if (resultCat !== undefined) return resultCat;

      if (Array.isArray(cats)) {
        let result;
        for (const cat of cats) { /* eslint no-restricted-syntax: "off" */
          if (cat.children !== undefined) {
            result = findCategory(compareFunction, cat.children);
          }
          if (result !== undefined) break;
        }
        return result;
      }

      return null;
    };

    const getCurrentCategory = (categoryId) => {
      const compareFunc = cat => cat.id === categoryId;
      return findCategory(compareFunc, categories);
    };

    const getCategoryByAlias = (alias) => {
      const compareFunc = cat => transliterate(cat.name) === alias;
      return findCategory(compareFunc);
    };

    const getCategoriesAndChilds = (categoryId) => {
      const result = [];
      const current = getCurrentCategory(categoryId);

      const addChildCategories = (currentCat = current) => {
        result.push(currentCat.id);
        if (Array.isArray(currentCat.children)) {
          currentCat.children.forEach((cat) => {
            addChildCategories(cat);
          });
        }
      };

      if (current) addChildCategories();

      return result;
    };

    const renderCategory = (category, url) => (
      (category.id === currentCategoryId)
        ? <strong>{category.name}</strong>
        : <Link to={`${url}/${transliterate(category.name)}`} onClick={() => changeCategory(category.id)}>{category.name}</Link>
    );

    const renderCategories = (categoriesList = categories, url = '/catalog') => (
      <ul>
        { categoriesList.map((category, index) => (
          <li key={index}>
            { renderCategory(category, url) }
            { category.children === undefined
              ? null
              : renderCategories(category.children, `${url}/${transliterate(category.name)}`) }
          </li>
        )) }
      </ul>
    );

    const renderBreadcrumbs = () => {
      let bread = [
        { id: 0, name: 'Каталог', alias: 'catalog' },
      ];

      Object.keys(match.params).forEach((key) => {
        if (match.params[key] === undefined) return;

        const category = getCategoryByAlias(match.params[key]);
        if (!category) return;

        bread.push({
          id: category.id,
          name: category.name,
          alias: match.params[key],
        });
      });


      const urls = [''];

      bread = bread.map((item) => {
        urls.push(item.alias);
        return { ...item, url: urls.join('/') };
      });

      return (
        <ul>
          { bread.map((item, index) => (
            <li key={index}>
              { (index === bread.length - 1)
                ? item.name
                : <Link
                  to={item.url}
                  onClick={() => changeCategory(item.id)}
                >
                  {item.name}
                </Link> }
            </li>)) }
        </ul>
      );
    };

    if (currentCategoryId === -1 && categories.length !== 0) {
      const lastAliasKey = Object.keys(match.params).reverse().find(key => match.params[key] !== undefined);
      const lastAlias = match.params[lastAliasKey];
      if (lastAlias !== undefined) {
        const currentCategory = getCategoryByAlias(lastAlias);
        changeCategory(currentCategory.id);
      }
    }

    const currentCategory = getCurrentCategory(currentCategoryId);
    const selectedCategories = getCategoriesAndChilds(currentCategoryId);

    return (
      <Router>
        <div className="catalog">
          <div className="catalog__sidebar">
            <h4>Категории</h4>
            {renderCategories()}
          </div>
          <div className="catalog__content">
            <Switch>
              <Route exact path="/catalog" render={() => <Page page="catalog" />} />
              <Route
                path="/catalog/:level1?/:level2?/:level3?"
                render={() => (
                  <div>
                    <div className="catalog__breadcrumbs">{renderBreadcrumbs()}</div>
                    <h2>{currentCategory && currentCategory.name}</h2>
                    <Products products={products.filter(product => selectedCategories.indexOf(product.category) !== -1)} />
                  </div>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

Catalog.propTypes = {
  match: React.PropTypes.object.isRequired,
  products: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
  categories: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
  currentCategoryId: React.PropTypes.number.isRequired,
  fetching: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  fetchCatalog: React.PropTypes.func.isRequired,
  changeCategory: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.catalog.products,
  categories: state.catalog.categories,
  currentCategoryId: state.catalog.currentCategoryId,
  fetching: state.common.fetching,
  error: state.common.error,
});

export default withRouter(connect(mapStateToProps, actions)(Catalog));
