import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    
    return (
        <div className="player">
            <h1>Player</h1>
            <div className="time-control">
                <p>Start time</p>
                <input type="range"/>
                <p>End time</p>
            </div>
            <div className="play-control">
            </div>
        </div>
    )
}