import React from 'react';
import banner from '../../../images/what-are-return-refund-policies-1-638.jpg';

const ReturnExchange = () => {
    return (
        <div className='mb-5' >
           <h2 className="m-5"><b>Return and Exchange Policy</b></h2>
           <div className='container '>
           <div className="card mb-3 " >
            <div className="row g-2">
                <div className="col-md-5">
                <img src={banner} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-7">
                <div className="card-body text-start">
                    <h5 className="card-title">RETURNING OR EXCHANGING A PRODUCT</h5>
                    <br />
                    <p className="card-text">Baby Toyworld understands that the perfect gift in your eyes is not always the perfect gift in theirs! To ensure the speedy resolution of your return or exchange, please refer to the below guide to returning or exchanging items at Toyworld.</p>
                    <p className="card-text">- you return the item within 14 days of purchase</p>
                    <p className="card-text">- you provide the corresponding Toyworld invoice from the time of purchase</p>
                    <p className="card-text">- the item is in its original packaging, including all accessories and instruction manuals</p>
                    <p className="card-text">- the item is in saleable condition ie unworn, unopened, unused and in original condition</p>
                    
                </div>
                </div>
            </div>
            </div>
        </div > 
           



           {/* <div className="card bg-dark text-white">
            <img src={banner} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div>
</div> */}

        </div>
    );
};

export default ReturnExchange;