import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Solutions</a>
              <ul className='p-2'>
                <li>
                  <a>Solution 1</a>
                </li>
                <li>
                  <a>Solution 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul className='p-2'>
                <li>
                  <a>product 1</a>
                </li>
                <li>
                  <a>product 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul className='p-2'>
                <li>
                  <a>Company 1</a>
                </li>
                <li>
                  <a>Company 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Log-out</a>
            </li>
          </ul>
        </div>
        {/* <a className='btn btn-ghost text-xl'>daisyUI</a> */}
        <div className=''>
          <img src='/go_logo.png' alt='' className='w-fit h-[50px]' />
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a className='text-primary'>Home</a>
          </li>
          <li>
            <details>
              <summary>Solutions</summary>
              <ul className='p-2'>
                <li>
                  <a>Solution 1</a>
                </li>
                <li>
                  <a>Solution 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Products</summary>
              <ul className='p-2'>
                <li>
                  <a>Product 1</a>
                </li>
                <li>
                  <a>Product 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Company</summary>
              <ul className='p-2'>
                <li>
                  <a>Company 1</a>
                </li>
                <li>
                  <a>Company 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        {/* <div className=""><a className='btn'>Emmanuel</a></div> */}
        <div className='flex items-center border rounded-[20px] py-[10px] px-[10px] cursor-pointer'>
          <div className='avatar mr-[10px]'>
            <div className='w-[20px] h-[20px] rounded-full'>
              <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
            </div>
          </div>
          <p className='mr-[15px]'>Emmanuel</p>

          <FaAngleDown className='text-[16px]' />
        </div>
        {/* <li>
          <details>
            <summary>Emmanuel</summary>
            <ul className='p-2'>
              <li>
                <a>Company 1</a>
              </li>
              <li>
                <a>Company 2</a>
              </li>
            </ul>
          </details>
        </li> */}
      </div>
    </div>
  );
};

export default Navbar;
