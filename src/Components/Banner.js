import React from 'react';
import banner from '..//Images//undraw_Finance_re_gnv2.png'
import banner2 from '..///Images///undraw_Success_factors_re_ce93.png'
const Banner = () => {
    return (
        <div className=" px-12 grid lg:grid-cols-2 grid-cols-1 justify-between">
        
        
           <img className="lg:h-[500px] mt-28 " src={banner} alt="" />
           <img className="lg:h-[400px] mt-28  " src={banner2} alt="" />

            
        </div>
    );
};

export default Banner;