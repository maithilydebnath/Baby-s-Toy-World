import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs></ContactUs>
            <Footer></Footer>
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;