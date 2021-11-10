import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReturnExchange from '../ReturnExchange/ReturnExchange';
import Reviews from '../Reviews/Reviews';
// import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <ReturnExchange></ReturnExchange>
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;