import React from "react";

const Section3 = () => {
  return (
    <div className='w-full relative'>
     
      <img src='/curve_bkg.png' alt='' className='w-full h-[200px] z-[1px]' />
      <div className='flex-col z-[10px] mt-[-200px] lg:flex-row flex justify-between mx-[30px] lg:mx-[100px] items-center'>
        {/* left */}

        <div className='flex-[1] text-center lg:text-start flex flex-col py-[50px]'>
          {/* <p className='text-[30px] font-bold text-primary'>GoFamily</p> */}
          <p className='text-[25px] font-bold text-primary mt-[7px] max-w-[400px]'>
            Enjoy Special Family Deals
          </p>
          <p className='text-[16px]  text-black mt-[7px] max-w-[400px]'>
            Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
            eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
            molestiae nostrum{" "}
          </p>
          {/* <img src='/hero_img1.png' alt='' className='h-[500px] w-fit ' /> */}
        </div>
        {/* right */}
        <div className='flex-[1] flex flex-col bg-white max-w-[500px] border border-gray-400/10 justify-start py-[50px] px-[50px] shadow-xl rounded-[50px]'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-[20px] '>
              <p className='font-semibold'>Super-Discounts</p>
              <p className='bg-primary/10 py-[5px] text-[13px] px-[10px] rounded-[20px] text-primary'>
                Subscriber
              </p>
            </div>

            <div className=''>
              <div className='rounded-full bg-primary/10'>
                <img src='/go_white.png' alt='' className='w-[50px] h-[50px]' />
              </div>
            </div>
          </div>
          <div className='bg-white rounded-[10px] shadow-lg py-[30px] px-[30px] border border-gray-400/10 mt-[10px]'>
            {/* row1 */}
            <div className='flex items-center space-x-[20px]'>
              <div className='rounded-full flex items-center justify-center bg-primary/10 py-[5px] px-[5px] w-[50px] h-[50px]'>
                <img src='/plane.png' alt='' className='w-[50px] h-[50px]' />
              </div>
              <div className='flex flex-col space-y-[5px] '>
                <p className='text-gray-500 text-[13px]'>Flight</p>
                <p className='font-semibold text-[14px]'>
                  5% Off your Flight ticket!
                </p>
              </div>
            </div>
            {/* row2 */}
            <div className='flex items-center space-x-[20px] mt-[10px]'>
              <div className='rounded-full flex items-center justify-center bg-primary/10 py-[5px] px-[5px] w-[50px] h-[50px]'>
                <img src='/grad_cap.png' alt='' className='w-[30px] h-[30px]' />
              </div>
              <div className='flex flex-col space-y-[5px] '>
                <p className='text-gray-500 text-[13px]'>Study</p>
                <p className='font-semibold text-[14px]'>
                  15% Off your Agency Fees!{" "}
                </p>
              </div>
            </div>
            {/* row3 */}
            <div className='flex items-center space-x-[20px] mt-[10px]'>
              <div className='rounded-full flex items-center justify-center bg-primary/10 py-[5px] px-[5px] w-[50px] h-[50px]'>
                <img src='/grad_cap.png' alt='' className='w-[30px] h-[30px]' />
              </div>
              <div className='flex flex-col space-y-[5px] '>
                <p className='text-gray-500 text-[13px]'>Hotels</p>
                <p className='font-semibold text-[14px]'>
                  5% Off your Hotel Booking!{" "}
                </p>
              </div>
            </div>
          </div>

          {/* <div className=''>
            <img src='/go_white.png' alt='' className='w-[50px] h-[50px]' />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section3;
