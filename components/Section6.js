import React from "react";

const Section6 = () => {
  return (
    <div
      className='w-full py-[100px]'
      style={{
        backgroundImage: "url(/bgg9.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="hero-overlay bg-black/70 "></div> */}
      <div className='flex-col  flex items-center  mx-[30px] lg:mx-[100px]'>
        <p className='text-[25px] font-bold text-center text-primary mt-[7px] max-w-[450px]'>
          Register Now and Enjoy these Benefits
        </p>
        <div className='btn btn-outline btn-primary mt-[20px] w-[200px]'>
          Get Started
        </div>
        {/* <img src='/hero_img1.png' alt='' className='h-[500px] w-fit ' /> */}
      </div>
    </div>
  );
};

export default Section6;
