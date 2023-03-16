import React from 'react';
import Layout from '../../Components/Layout/Layout';
import WhyUs from '../../Components/WhyUs/WhyUs';
import Discount from '../../Components/Discount/Discount';
import Team from '../../Components/Team/Team';
import Sponser from '../../Components/Sponser/Sponser';


const About = () => {
    
    return (
        <Layout>
            <WhyUs />
            <Discount />
            <Team />
            <Sponser />
        </Layout>
    );
};

export default About;