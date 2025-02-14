import '../styles/search-result.css';
import React from 'react';

function Result({ title, summary }) {
    return (
        <div className="result-container">
            <h2>{title}</h2>
            <p>{summary}</p>
        </div>
    );
}

export default Result;