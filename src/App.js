// src/App.js

import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookGallery from './components/BookGallery';
import BookDetail from './components/BookDetail'; 

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      console.log(response);
      const data = await response.json();
      console.log("data.items  --> ",data.items);
      setBooks(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book); // Set the selected book when it's clicked
  };

  const handleCloseDetail = () => {
    setSelectedBook(null); // Close the detail view
  };

  return (
    <div className="App">
      <h1>Book Explorer !!!</h1>
      <SearchBar onSearch={searchBooks} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        // <BookGallery books={books} onBookClick={(link) => window.open(link)} />
        <BookGallery books={books} onBookClick={handleBookClick} />
      )}
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default App;
