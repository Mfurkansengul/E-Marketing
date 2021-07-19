import React from 'react';
import Header from '../Components/Header'
import Categories from '../Components/Categories';
import SubCategories from '../Components/SubCategories';
import Clearence from '../Components/Clearence';
import Footer from '../Components/Footer';

function Home() {
    return (
        <div className="Home">
            <Header />
            <Categories />
            <SubCategories />
            <Clearence />                
            <Footer />
        </div>

    );
    
}

export default Home;