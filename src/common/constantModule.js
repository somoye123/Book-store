const constant = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const defaultState = [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Somoye and his projects',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Tennyson and his projects',
      category: 'History',
    },
  ];
  return {
    categories,
    defaultState,
  };
};

export default constant();
