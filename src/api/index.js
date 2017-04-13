import 'mdn-polyfills/Array.prototype.find';
import catalog from './catalog';
import news from './news';
import galleryImages from './galleryImages';
import awards from './awards';
import pageMain from './pages/main';
import pageHistory from './pages/history';
import pageQuality from './pages/quality';
import pageVacancies from './pages/vacancies';
import pageCatalog from './pages/catalog';
import pageContacts from './pages/contacts';
import pageFeedback from './pages/feedback';
import pageSites from './pages/sites';


const TIMEOUT = 0;

const promisify = func => (...args) => new Promise(resolve => setTimeout(() => resolve(func(...args)), TIMEOUT));


export const getNews = promisify(() => news.map(item => ({ id: item.id, title: item.title, date: item.date })));

export const getNewsById = promisify(id => news.find(item => item.id === id));

export const getCatalog = promisify(() => catalog);

export const getGalleryImages = promisify(() => galleryImages);

export const getAwards = promisify(() => awards);

export const getPage = promisify((page) => {
  switch (page) {
    case 'main': return pageMain;
    case 'history': return pageHistory;
    case 'quality': return pageQuality;
    case 'vacancies': return pageVacancies;
    case 'catalog': return pageCatalog;
    case 'contacts': return pageContacts;
    case 'feedback': return pageFeedback;
    case 'sites': return pageSites;
    default: return null;
  }
});
