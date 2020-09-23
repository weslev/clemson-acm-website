import React from 'react';

const Person = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.interests}</h3>
            <p>Put Image Here</p>
        </div>
    );
}

export default Person;