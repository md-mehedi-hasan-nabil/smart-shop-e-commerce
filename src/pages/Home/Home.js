import React from 'react';
import Extra from '../../Components/ExtraFacilities/Extra';
import News from '../../Components/News/News';
import Products from '../../Components/Products/Products';
import Slider from '../../Components/Slider/Slider';
import Sponser from '../../Components/Sponser/Sponser';
import Layout from '../../Components/Layout/Layout';
import Discount from '../../Components/Discount/Discount';

const Home = () => {
    return (
        <Layout>
            <Slider />
            <Extra />
            <Products />
            <Discount />
            <News />
            <Sponser />
        </Layout>
    );
};

export default Home;