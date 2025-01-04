import React, { useState } from 'react'

function Result({name, location, score}) {
    return (
        <div className="result">
            <div className="left">
                <div className="schoolNameAndLink">
                    <h2>{name}</h2>
                    <button>More info</button>
                </div>
                <p>{location}</p>
            </div>
            <div className="right">
                <div className="score-circle">
                    <span>{score}</span>
                </div>
            </div>
        </div>
    );
};

export default Result;