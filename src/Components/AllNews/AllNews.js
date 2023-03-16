import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import News from '../../Components/News/News';
import Sponser from '../../Components/Sponser/Sponser';

const AllNews = () => {
    return (
        <>
            <Navbar />
            <News />
            <Sponser />
            <Footer />
        </>
    );
};

export default AllNews;