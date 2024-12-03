import React, { useState } from 'react';
import './SearchBox.css';


const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (query.trim()) {
            onSearch(query); // Correctly call the onSearch prop
            setQuery(""); // Clear the input box
        }
    };

    return (
        <form  className="search-box" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your word/s here..."
                
            />
            <button  type="submit">Search</button>
        </form>
    );
};

export default SearchBox;
