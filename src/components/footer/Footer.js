import logo from '../../img/Logomark.png';

const Footer = () => {
   return (
      <footer className="py-12 sm:py-20 bg-white font-mono">
         <div className="container mx-auto">
            <div className=" px-12 lg:px-0 grid lg:grid-cols-4 grid-cols-1  gap-x-5 items-top font-bold text-sm[21px] ">
               <div className=" flex justify-center items-center lg:order-first order-last">
                  <a href="#"> <img src={logo} alt="logo" className=" " /></a>
               </div>
               <div className="pb-6 lg:pb-0 items-start">
                  <ul>
                     <li className=" mb-5 hover:text-orange-600 duration-700 "><a href="#">FAQ</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">RETURNS</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">CONTACT</a></li>
                  </ul>
               </div>
               <div className="pb-6 lg:pb-0 items-start">
                  <ul>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">TERMS & CONDITIONS</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">PRIVACY POLICY</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">COOKIE POLICY</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">COOKIE SETTINGS</a></li>
                  </ul>
               </div>
               <div className="pb-6 lg:pb-0 items-start">
                  <ul>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">ABOUT SECOND CHANCE</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">CAREER</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">FACEBOOK</a></li>
                     <li className=" mb-5 hover:text-orange-600 duration-700"><a href="#">INSTAGRAM</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;