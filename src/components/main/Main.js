import Info from "../info/Info";
import Mail from "../mail-form/Mail";
import Products from "../products/Products";

const Main = () => {
   return (
      <main className="pb-16 sm:pt-12 pt-0 sm:pb-20 border-y border-solid border-black font-grotesk bg-palewhite px-3 xl:px-1.5 2xl:px-0">
         <Info />
         <Products />
         <Mail />
      </main>
   );
}

export default Main;