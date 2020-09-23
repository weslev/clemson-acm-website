import React from 'react';

const Person = props => {
    return (
        <div class="flex justify-center justify-self-center flex-col bg-blue-500 px-4 py-4 m-2">
            <div class="flex-1">
                <div class="h-full w-full bg-blue-400 px-4 py-4 m-2">
                    <p class="text-center">Put Image Here</p>
                </div>
                <div class="h-full w-full bg-blue-400 px-4 py-4 m-2">
                    <h1 class="text-center font-bold text-xl">{props.name}</h1>
                    <h3 class="text-center">{props.interests}</h3>
                </div>
            </div>
        </div>
    );
}

export default Person;