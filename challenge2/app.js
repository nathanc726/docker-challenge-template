const express = require('express');
const app = express();
const port = 3000;


const books = [
  { id: 1, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { id: 2, title: 'You Don’t Know JS: Scope & Closures', author: 'Kyle Simpson' },
  { id: 3, title: 'Learning Python', author: 'Mark Lutz' },
  { id: 4, title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin' },
  { id: 5, title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides' }

];


app.get('/api/books', (req, res) => {
  res.json(books);
});

// Route for getting a book by id
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10); // Convert the id from string to integer
  const book = books.find(book => book.id === bookId);
  
  if (!book) {
    return res.status(404).send('Book not found');
  }

  res.json(book);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});