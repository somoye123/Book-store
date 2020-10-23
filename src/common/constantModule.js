const constant = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const authors = ['Somoye Ayotunde', 'William Shakespeare', 'Tzvaita Tennyson', 'John Grisham', 'Stephen King', 'James Patterson', 'Dan Brown', 'Charles Dickens', 'Anne Rice', 'Jessica Brody'];

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
    filter: 'ALL',
  };
  return {
    categories,
    defaultState,
    authors,
  };
};

export default constant();
