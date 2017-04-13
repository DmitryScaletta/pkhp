import React from 'react';

const Products = ({ products }) => (
  <div>
    { products.map((product, index) => (
      <div className="product-item" key={index}>
        <div className="product-item__image markdown-body">
          <img src={product.image} alt="" />
        </div>
        <div className="product-item__content">
          <div className="product-item__name">
            {product.name}
          </div>
          <div className="product-item__desc">{product.desc}</div>
          <div className="product-item__tnpa">ТНПА: <em>{product.tnpa}</em></div>
        </div>
      </div>
    )) }
  </div>
);

Products.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
};

export default Products;
