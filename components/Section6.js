import React from "react";

const Section6 = () => {
  return (
    <div
      className='w-full py-[0px] h-[500px] pb-[30px] flex justify-center items-center relative'
      // style={{
      //   backgroundImage: "url(/fam2.png)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "fit",
      // }}
    >
      {/* <div className="hero-overlay bg-black/70 "></div> */}
      <img
        src='/fam2.png'
        alt=''
        className='w-fit h-[500px] z-[1px] absolute top-0 hidden md:flex bg-primary/10 md:bg-white'
      />
      <div className='flex-col z-[10px] flex items-center  mx-[30px] lg:mx-[100px] absolute top-[40%] '>
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
