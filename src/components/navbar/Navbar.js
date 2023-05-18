import minilogo from '../../img/icons/mini_logo.svg';
import logo from '../../img/logo.png';
const Navbar = () => {

   return (
      <nav className=" md:py-12  py-6 font-grotesk bg-palewhite px-3 xl:px-1.5 2xl:px-0" >
         <div className="container mx-auto" >
            <div className="nav-row flex md:items-start items-center justify-between px-1 " >
               <div className=" xl:relative">
                  <a href='#' className="logo flex items-start ">
                     <div className='mini-logo mr-3 xl:absolute -left-16 w-6  sm:w-14'><img src={minilogo} alt="logo" className=" m-0" /></div>
                     <div className='logo w-14 sm:w-32 md:w-full'><img src={logo} alt="VooDoo" /></div>
                  </a>
               </div>

               <div className=" flex items-center">
                  <ul className="" >
                     <li className="sm:mr-12 mr-5 text-black font-semibold md:text-xl[26px] sm:text-lg text-sm[18px] hover:text-orange-600 duration-700" >
                        <a href='#' className='about '>
                           About Us
                        </a>
                     </li >
                  </ul >
                  <button className=" p-2 bg-black text-white rounded font-bold md:text-xl[25px] sm:text-lg text-sm[18px] hover:bg-orange-600 duration-700">Sign-up</button>
               </div>
            </div >
         </div >
      </nav >
   );
}

export default Navbar;