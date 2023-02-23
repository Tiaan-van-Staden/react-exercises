import React, { useState } from 'react';
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line
  const [fruit, setFruit] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Durian',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
    'Mango',
    'Nectarine',
    'Orange',
    'Pineapple',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Ugli fruit',
    'Watermelon'
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFruit = fruit.filter((item) => {
    return item.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="container">
      <h1 className="title">Fruit Finder</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="search"
        placeholder="Search for fruit"
      />
      <ul className="list">
        {filteredFruit.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
