import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Header from '../templates/header/Header';
import Footer from '../templates/footer/Footer';
import MenuSidebar from '../templates/menuSidebar/MenuSidebar';
import Routes from './Routes';
import './app.css';

export default props => {
    return (
        <div className="container">
            <MenuSidebar></MenuSidebar>
            <Header></Header>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    )
}