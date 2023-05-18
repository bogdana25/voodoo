const Mail = () => {
   return (
      <>
         <div className="container mx-auto pb-10">
            <form action="" className="text-center">
               <h4 className=" font-normal sm:text-xl text-sm[18px] text-black leading-7 mb-6">Be the first one to know when we launch our beta!</h4>
               <input type="text" placeholder="E-mail" className="mail__input w-2/3 sm:w-1/2 md:w-1/3 py-2 px-4 placeholder:text-black placeholder:font-semibold placeholder:text-base[20] mr-4 outline-none  focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 duration-500 font-semibold text-lg rounded" />
               <button className=" py-3 px-4 bg-orange-600 font-semibold text-base[20px] text-black hover:bg-black hover:text-white duration-700 rounded">Sign-up</button>
            </form>
         </div>
      </>
   );
}

export default Mail;