// src/components/BookGallery.js

import React from 'react';
import '../styles/BookGallery.css'
import imageNotAvailable from '../images/imageNotAvailable.jpg'

function BookGallery({ books, onBookClick }) {
  return (
    <div className="book-gallery">
      {books.map((book) => {
        let {title, imageLinks} = book.volumeInfo;
        return (
          <div key={book.id} className="book" onClick={() => onBookClick(book)}>
            <img
              src={imageLinks?.thumbnail || imageNotAvailable}
              alt={title}
              className="book-img"
            />
            <p className="book-title" title={title}>{title}</p>
          </div>
        )
      }
      )}
    </div>
  );
}

export default BookGallery;
