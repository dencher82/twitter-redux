import React from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

const Main = () => {
    return (
        <div className='body'>
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Main;