import infologo from '../../img/icons/alert-circle.svg';
import imginfo from '../../img/info-arrow.png';
import arrowdown from '../../img/icons/arrow-down.svg';
import { useState, useRef } from 'react';
import './style.scss';
const Info = () => {
   const [hide, setHide] = useState('hide');
   const textRef = useRef();
   const arrow = useRef();
   const textHandler = () => {
      if (hide === 'hide') {
         textRef.current.classList.add('active');
         textRef.current.classList.remove('hide');
         arrow.current.classList.add('rotate');
         setHide('active');

      }
      else {
         textRef.current.classList.remove('active');
         textRef.current.classList.add('hide');
         setHide('hide');
         arrow.current.classList.remove('rotate');
      }
   }
   return (
      <>
         <div className="mt-12">
            <div className="container relative mx-auto bg-black text-white p-6 flex md:items-center items-start justify-between rounded">
               <div className="pr-12 left-3 absolute md:relative">
                  <div className='flex items-center '>
                     <img src={infologo} alt="Exclamation mark" className='mr-1.5' />
                     <h4 className='font-bold text-bace/[20px] text-palewhite'>ALPHA</h4>
                  </div>
               </div>

               <div className='max-w-[1018px] w-full'>
                  <div className='text-sm/[18px] font-medium text-palewhite sm:p-0 pt-1 md:text-left pl-12 text-center'>Important info <span className='hidden md:inline-block'>regarding our service</span></div>
                  <div className='hide' ref={textRef}>
                     <div className=" text-sm[18] font-medium text-white border-y py-6 mt-6">
                        We’re working on a new service to offer you returned online goods at a discount near you.
                     </div>
                     <div className=" md:flex text-white my-6 items-center">
                        <div className=" mb-6 md:m-0">
                           <h5 className='font-bold text-sm/[18px] mb-5 text-left'>CURRENTLY</h5>
                           <ol className='font-normal text-xs/[15px] list-decimal ml-4'>
                              <li className="pb-3.5"> Very limited assortment of items that we resell</li>
                              <li className="pb-3.5">All sorts of product categories</li>
                              <li className="pb-3.5">Focus on testing the ordering and pick-up experience</li>
                           </ol>
                        </div>
                        <div className="img mx-12 hidden md:block"><img src={imginfo} alt="arrows right" /></div>
                        <div className="">
                           <h5 className='font-bold text-sm/[18px] mb-5'>FUTURE</h5>
                           <ol className='font-normal text-xs/[15px] list-decimal ml-4'>
                              <li className="mb-3.5">Returned items from other shoppers</li>
                              <li className="mb-3.5">Select product categories</li>
                              <li className="mb-3.5">Focus on end-to-end service experience</li>
                           </ol>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='md:pl-10 p-0'><img src={arrowdown} alt="arrow" onClick={textHandler} ref={arrow} className=' md:top-0 top-[25px] right-4 md:right-0 absolute md:relative duration-700 cursor-pointer' /></div>
            </div>
         </div>
      </>
   );
}

export default Info;