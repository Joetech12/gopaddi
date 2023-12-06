import React from "react";

const Hero = () => {
  return (
    <div className='min-h-[80vh] md:min-h-[80vh] pt-[50px] text-center lg:text-start lg:pt-0 lg:min-h-[80vh] 2xl:min-h-[80vh]  w-full'>
      {/* <div className="hero-overlay bg-black/70 "></div> */}
      <div className='flex-col lg:flex-row flex justify-between mx-[30px] lg:mx-[100px]  items-center'>
        {/* left */}
        <div className='flex-[1] flex flex-col'>
          <p className='text-[50px] font-bold text-primary'>GoFamily</p>
          <p className='text-[25px] font-bold text-black mt-[7px] max-w-[400px]'>
            Go Global with GoFamily
          </p>
          <p className='text-[14px]  text-black mt-[7px] max-w-[400px]'>
            Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
            eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
            molestiae nostrum{" "}
          </p>
          <div className="w-full ">
            <div className='btn btn-primary mt-[15px] w-[200px]'>Sign Up</div>
          </div>
          {/* <img src='/hero_img1.png' alt='' className='h-[500px] w-fit ' /> */}
        </div>
        {/* right */}
        <div className='flex-[1] flex justify-end'>
          <img
            src='/hero_img1.png'
            alt=''
            className='h-[300px] md:h-[500px] w-fit '
          />

          {/* <img src='/hero_img1.png' alt='' className='h-[500px] w-fit ' /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
