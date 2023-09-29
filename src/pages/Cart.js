import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {ToastContainer, toast} from "react-toastify"

const Cart = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const [totalAmt, setTotalAmt] = useState("");
    useEffect(() => {
        let price = 0;
        productData.map((item)=> {
            price += item.price * item.quantity;
            return price;
        })
        setTotalAmt(price);
    },[productData])
    return (
        <div>
            <img className="w-full h-60 object-cover"
            src=""
            alt="cartImg"/>
            <div className="max-w-screen-x1 mx-auto py-20 flex">
                <CartItem />
                <div className="w-1/3 bg-[#fafafa] py-6 px-4">
                    <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                        <h2 className="text-2xl font-medium">Cart Totals</h2>
                        <p className="flex items-center gap-4 text-base">
                            Subtotal{" "}
                            <span className="font-titleFont font-bold text-lg">
                                $ {totalAmt}
                            </span>
                        </p>
                        <p className="flex items-start gap-4 text-base">
                            Shipping{" "}
                            <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet nibh.
                            </span>
                        </p>
                        <p>
                            {" "}
                            Total <span className="text-xl font-bold">$ {totalAmt}</span>
                        </p>
                        <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-left"
            autoclose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </div>
        
    )
}

export default Cart;