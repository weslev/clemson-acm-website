import React from 'react';
import '../../styles/main.css';


const Header = props => {
    return (
        <div>
            <div className="font-sans text-lg text-blue-300 text-center">
                <h2>ACM Clemson</h2>
                <p>The Association of Computing Machinery at Clemson</p>
            </div>
        </div>
    );
}

export default Header;