import React from "react";
import { AiOutlineMail, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='md:px-[30px] mt-[0px] footer py-[50px] px-[20px] bg-primary text-white w-full mx-[0px]  md:mx-[0px]'>
      {/* column 1 */}
      <div className='md:max-w-[300px]'>
        {/* <span className='footer-title'>Contact Us</span> */}
        <img src='/footer_logo.png' alt='' className='h-[100px] w-fit' />
        <div className='flex space-x-[10px] mb-[10px]'>
          <a
            href='mailto:removalsandselfstorage@gmail.com?subject=Enquiry'
            className=' text-white'
          >
            Gopaddi is a travel network that connects and strengthens people’s
            relationships with a world of beautiful, happy people who are able
            to reach out for their dreams and be who they want to be.{" "}
          </a>
        </div>
        <div className='flex space-x-[10px] mb-[10px]'>
          <a
            href='mailto:removalsandselfstorage@gmail.com?subject=Enquiry'
            className=' text-white'
          >
            This network is a community of individuals, families, and
            organisations who have chosen to take control of their travel
            desires and freely explore a world of limitless possibilities.
          </a>
        </div>
      </div>

      {/* column 2 */}
      <div>
        <span className='font-bold mb-[10px]'>Quick Links</span>
        <a className='link link-hover'>Home</a>
        <a className='link link-hover my-[5px]'>About Us</a>
        <a className='link link-hover'>Contact Us</a>
        <a className='link link-hover my-[5px]'>Terms and Conditions</a>
        <a className='link link-hover my-[5px]'>Become an Affiliate</a>
      </div>

      {/* column 3 */}
      <div>
        <span className='font-bold mb-[10px]'>Business Links</span>
        <a className='link link-hover'>GoPal</a>
        <a className='link link-hover my-[5px]'>GoBusiness</a>
        <a className='link link-hover '>GoFamily</a>
        {/* <a className="link link-hover my-[5px]">Blog</a> */}
        <a className='link link-hover'>GoAgent</a>
        <a className='link link-hover my-[5px]'>GoSchool</a>
      </div>

      {/* column 3b */}
      <div>
        <span className='font-bold mb-[10px]'>Business Links</span>
        <a className='link link-hover'>Facebook</a>
        <a className='link link-hover my-[5px]'>Twitter</a>
        <a className='link link-hover '>Instagram</a>
        {/* <a className="link link-hover my-[5px]">Blog</a> */}
        <a className='link link-hover'>Linkedin</a>
      </div>

      {/* column 4 */}
      <div>
        <span className='font-bold mb-[10px]'>Subscribe to our newsletter</span>
        <input
          type='text'
          placeholder='Email'
          className='input input-bordered text-black  w-full max-w-xs'
        />{" "}
        <div className='flex mt-[10px] mb-[10px] md:mb-[20px] w-full'>
          <div className='form-control '>
            <label className='label cursor-pointer flex justify-center items-start space-x-[20px] w-full'>
              <input
                type='checkbox'
                //   checked="checked"
                className='checkbox checkbox-white'
                // onChange={(e) => setInventConfirm(e.target.checked)}
              />
              <span className='leading-[20px] text-[14px] md:text-[15px] max-w-[300px]'>
                By subscribing you are accepting to receive marketing
                information from Aero and agree to the terms of Aero’s Privacy
                Policy.
              </span>
            </label>
          </div>
        </div>
        <img src='/footer_map.png' alt='' className='h-[150px] w-fit' />
      </div>
    </footer>
  );
};

export default Footer;
