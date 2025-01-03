import React, { useState } from 'react'

function Result({props}) {
    return (
        <div className="result">
            <div className="left">
                <div className="schoolNameAndLink">
                    <h2>School Name</h2>
                    <button>More info</button>
                </div>
                <p>School Location</p>
            </div>
            <div className="right">
                <div className="score-circle">
                    <span>9.6</span>
                </div>
            </div>
        </div>
    );
};

export default Result;