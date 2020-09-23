import React from 'react';

const Person = props => {
    return (
        <div className="flex justify-center justify-self-center flex-col bg-blue-500 px-4 py-4 m-2">
            <div className="flex-1">
                <div className="h-half w-half bg-blue-400 px-4 py-4 m-2">
                    <p className="text-center">Put Image Here</p>
                    <div className="h-half w-half bg-blue-400 px-4 py-4 m-2">
                        <h1 className="text-center font-bold text-xl">{props.name}</h1>
                        <h3 className="text-center">{props.interests}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Person;