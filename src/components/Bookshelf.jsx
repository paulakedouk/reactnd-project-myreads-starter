import React, { Component } from 'react';
import IndividualBook from './IndividualBook';

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Book title</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <IndividualBook />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
