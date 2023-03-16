import React from 'react';
import News from '../../Components/News/News';
import Sponser from '../../Components/Sponser/Sponser';
import Layout from '../../Components/Layout/Layout';

const AllNews = () => {
    return (
        <Layout>
            <News />
            <Sponser />
        </Layout>
    );
};

export default AllNews;