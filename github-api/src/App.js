import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.items);
  };

  return (
    <div className="container">
      <div className="input-group">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      

      <ul className="results">
        {searchResults.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <a href={user.html_url}>{user.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;