import React from 'react';
import '../../styles/main.css';


const Header = props => {
    return (
        <div>
            <div className="lg:container lg:mx-auto px-100">
                <div className="text-white object-top box-content m-6 bg-blue-400 p-32">
                    <div className="transition-opacity duration-500 ease-in-out hover:opacity-0">
                        <h2 className="font-bold text-lg text-center">ACM Clemson</h2> 
                        <p className="text-center">The Association of Computing Machinery at Clemson</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;