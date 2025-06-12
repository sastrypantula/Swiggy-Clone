// import { useSelector } from "react-redux"
// import { Link } from "react-router";


// export default function RestHeader(){

//     const counter = useSelector(state=> state.cartslice.count);
    
//     return (
//         <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-5xl flex  items-center">
//             <div>
//                 <p className="text-orange-600 font-bold text-4xl">Swiggy</p>
//             </div>
//             <div className=" container w-[80%] mx-auto flex justify-between items-center">
//                 <div className="mr-5">
//                     <a href="https://www.swiggy.com/corporate/">
//                        <button className="border-none text-2xl" >Swiggy incorporate</button> 
//                     </a>
//                 </div>
//                 <Link to="/Checkout">
//                 <p className="text-2xl">Cart {`(${counter})`}</p>
//                 </Link>
//             </div>
//         </div>
//     )
// }
import { useSelector } from "react-redux";
import { Link } from "react-router"; // use `react-router-dom` not just "react-router"

export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);

  return (
    <div className="bg-gray-200 px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-orange-600 font-bold text-3xl">Swiggy</div>

        {/* Navigation Links */}
        <div className="flex space-x-8 items-center text-xl text-gray-800 font-medium">
          <a href="https://www.swiggy.com/corporate/" className="hover:text-orange-500">
            Swiggy Corporate
          </a>
          <a href="#" className="hover:text-orange-500">
            About Us
          </a>
          <a href="#" className="hover:text-orange-500">
            Help
          </a>
          <Link to="/Checkout" className="hover:text-orange-500">
            Cart ({counter})
          </Link>
        </div>
      </div>
    </div>
  );
}
