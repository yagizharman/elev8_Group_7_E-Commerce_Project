import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {ToastContainer, toast} from "react-toastify"
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

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

    const payment = async (token)=> {
        await axios.post ("http://localhost:8000/pay", {
        amount: totalAmt * 100,
        token : token,
        });
    }

    return (
        <div>
            <img
            className="w-full h-60 object-cover"
            src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cartImg"
            />
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
                            {
                                payNow && (
                                <div className="w-full mt-6 flex items-center justify-center">
                                <StripeCheckout
                                stripeKey="pk_test_51NwqA0KsbxZ7OTvS8ZwLKi9c9DyxRsLADsuyYBlyMk1HmP6ghnU210mbLPnkUB0QjjujMFI2iHLSDVm834bX4aVN000GcqulKi"
                                name= "Store Online Shopping"
                                amount={totalAmt * 100}
                                Label="Pay to store"
                                description={'Your Payment amount is $${totalAmt}'}
                                token={payment}
                                email={userInfo.email}
                                />
                                </div>   
                            )}
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