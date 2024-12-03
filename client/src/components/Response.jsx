import React from "react";
import './Response.css'; //dedicated css 
import ReactMarkdown from 'react-markdown';



const Response = ({ query,data }) => {
    //console.log(data);
    if(!data) return null;
    // Replace \n with <br /> for newlines
   

    return (
        <div className="response-card">
            <h2 >{query} :</h2>
            <ReactMarkdown>{data.info}</ReactMarkdown>
        </div>
    );

}

export default Response;