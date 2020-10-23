const constant = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const generateRandomId = () => Math.floor(Math.random() * 1000);
  const defaultState = {
    books: [
      {
        id: generateRandomId(),
        title: 'Somoye and his projects',
        category: 'Action',
      },
      {
        id: generateRandomId(),
        title: 'Tennyson and his projects',
        category: 'History',
      },
    ],
    filter: 'All',
  };
  return {
    categories,
    defaultState,
  };
};

export default constant();
