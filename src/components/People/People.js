import React from 'react';

const People = props => {
    return (
        <div className="container mx-auto flex flex-row">
            <div className="justify-self-center justify-items-center">
                {props.children}
            </div>
        </div>
    );
}

export default People;