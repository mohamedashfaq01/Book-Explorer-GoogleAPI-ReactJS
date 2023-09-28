// src/components/BookDetail.js

import React from 'react';

function BookDetail({ book, onClose }) {
  let {publisher, publishedDate, authors, description, title} = book.volumeInfo;
  return (
    <div className="book-detail">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="book-info">
        <h2>{title}</h2>
        <p>Author: {authors.join(', ')}</p>
        <p>Publisher: {publisher}</p>
        <p>Published Date: {publishedDate}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
}

export default BookDetail;
