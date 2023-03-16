import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../images/company-logos/1.png';
import img2 from '../../images/company-logos/2.png';
import img3 from '../../images/company-logos/3.png';
import img4 from '../../images/company-logos/4.png';
import img5 from '../../images/company-logos/5.png';

const Sponser = () => {
    return (
        <>
           <div className='container-fluid bg-light p-5'>      
                <OwlCarousel items={5}  
                    className="owl-theme"  
                    loop  
                    nav  
                    margin={8} > 
                    <div><img className="img-fluid w-75 mx-auto" src= {img1} alt=""/></div>  
                    <div><img className="img-fluid w-75 mx-auto" src= {img2} alt=""/></div>  
                    <div><img className="img-fluid w-75 mx-auto" src= {img3} alt=""/></div>  
                    <div><img className="img-fluid w-75 mx-auto" src= {img4} alt=""/></div>  
                    <div><img className="img-fluid w-75 mx-auto" src= {img5} alt=""/></div>  
                </OwlCarousel> 
            </div>   
        </>
    );
};

export default Sponser;