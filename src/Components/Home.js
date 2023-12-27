import React from 'react';
import AsideBar from './AsideBar';
import MainContent from './MainContent';
import '../styles/Home.css';

function Home() {
    return (
        <div className="app-container">
            <div className='asideBar'>
                <AsideBar />
            </div>
            <div className='mainContent'>
                <MainContent />
            </div>
        </div>
    )
}

export default Home;