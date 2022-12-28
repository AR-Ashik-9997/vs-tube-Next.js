import React from 'react';
import Header from '../Header/Header';

const Root = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
                        
        </div>
    );
};

export default Root;