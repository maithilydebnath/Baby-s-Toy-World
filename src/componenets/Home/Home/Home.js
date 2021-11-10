import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
// import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;