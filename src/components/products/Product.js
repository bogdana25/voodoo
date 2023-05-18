
const Product = (props) => {
   return (

      <div className="mb-12">
         <div>
            <div className="border border-solid border-black rounded relative overflow-hidden">
               <div className="absolute p-2 bg-black rounded text-xs font-normal text-palewhite left-3 top-3">USED</div>
               <img src={props.image} className="w-full" alt="" />
            </div>
            <div className="flex-container flex items-center justify-between py-3">
               <div className="flexbox">
                  <div className="product-cart__title  font-bold text-sm/[18px] text-black">{props.title}</div>
                  <div className="product-cart__cost font-bold text-sm/[18px] text-black">cost pruduct</div>
               </div>
               <div className="flexbox">
                  <div className="font-medium text-sm/[18px] text-black text-right">Condition</div>
                  <div className="font-normal text-sm/[18px] text-black">Slightly used</div>
               </div>
            </div>
            <button className="bg-black text-white w-full rounded py-4 font-bold text-sm/[18px] hover:bg-orange-600 duration-700">PICK-UP IN <span className=" underline">2200</span></button>
         </div>

      </div>
   );
}

export default Product;