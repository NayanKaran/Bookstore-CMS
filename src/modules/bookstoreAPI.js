const appID = 'bLJEI9hc2Jvcwq97Sbhs';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

async function postBook(details) {
  const response = await fetch(`${baseURL}/apps/${appID}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  });
  await response.text();
  const updatedDetails = { ...details, itemId: details.item_id };
  delete updatedDetails.item_id;
  return updatedDetails;
}

async function getBooks() {
  const response = await fetch(`${baseURL}/apps/${appID}/books`, {
    method: 'GET',
  });
  const books = await response.json();

  const formattedBooks = [];

  Object.keys(books).forEach((book) => {
    books[book][0].itemId = book;
    formattedBooks.push(books[book][0]);
  });

  return formattedBooks;
}

async function removeBook({ itemId }) {
  const response = await fetch(`${baseURL}/apps/${appID}/books/${itemId}`, {
    method: 'DELETE',
  });
  await response.text();
  return itemId;
}

const bookstoreAPI = {
  postBook,
  getBooks,
  removeBook,
};

export default bookstoreAPI;
