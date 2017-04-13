const initialState = {
  common: {
    fetching: false,
    error: '',
  },
  catalog: {
    categories: [],
    currentCategoryId: -1,
    products: [],
  },
  news: {
    items: [],
    current: {},
  },
  page: {
    main: '',
    history: '',
    quality: '',
    vacancies: '',
    catalog: '',
    contacts: '',
    feedback: '',
    sites: '',
  },
  gallery: {
    images: [],
  },
  awards: {
    diplomas: [],
    certificates: [],
  },
};

export default initialState;
