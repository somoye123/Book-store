export const addBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const categoryFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});
