import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import Response from './components/Response';
import './App.css'; //basic css

const App = () => {
    const [responseData, setResponseData] = useState(null);
    const [loading,setLoading] = useState(false);//loading screen

    const handleSearch = async (query) => {
        try {
            setLoading(true); // Start loading
            const res = await fetch(`http://127.0.0.1:5000/api/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });

            const data = await res.json();
            setResponseData({query,data});
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        finally {
            setLoading(false); // stops loading
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Words Info</h1>
                <SearchBox onSearch={handleSearch} />
            </header>
            <main>
                { loading?(
                <div className="loading-spinner">Loading...</div> // Display loading indicator
                )                
                :
                (
                    responseData && <Response  query ={responseData.query} data={responseData.data} />
                )}
            </main>
            
        </div>
    );
};

export default App;
