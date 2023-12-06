import React from "react";

const Section2 = () => {
  return (
    <div
      className='min-h-[80vh] md:min-h-[80vh] lg:min-h-[80vh] 2xl:min-h-[80vh]  w-full'
      // style={{ backgroundImage: "url(/hero_bg.jpg)" }}
    >
      {/* <div className="hero-overlay bg-black/70 "></div> */}
      <div className='flex-col lg:flex-row flex justify-between mx-[30px] lg:mx-[100px] items-center'>
        {/* left */}
        <div className='flex-[1] flex justify-start'>
          <img src='/hero_img2.png' alt='' className='h-[500px] w-fit ' />
        </div>
        {/* right */}
        <div className='flex-[1] flex flex-col lg:pl-[50px]'>
          {/* <p className='text-[30px] font-bold text-primary'>GoFamily</p> */}
          <p className='text-[20px] font-bold text-black mt-[7px] max-w-[300px]'>
            Unlocking The Magic of Family Travel
          </p>
          <p className='text-[14px]  text-black mt-[7px] max-w-[400px]'>
            Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
            eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
            molestiae nostrum{" "}
          </p>
          {/* <img src='/hero_img1.png' alt='' className='h-[500px] w-fit ' /> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
