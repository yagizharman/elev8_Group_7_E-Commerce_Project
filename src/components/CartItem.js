import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className="sm:w-2/3 w-3/3 sm:pr-10 mx-20">
      <div className="sm:w-full ">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
        <div>
          <div>
            {productData.map((item) => (
              <div
                key={item._id}
                className="sm:flex items-center justify-between gap-6 mt-6 "
              >
                <div className="items-center gap-2 flex">
                  <MdOutlineClose
                    onClick={() =>
                      dispatch(deleteItem(item._id)) &
                      toast.error(`${item.title} is removed`)
                    }
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                  />
                  <img
                    className="sm:w-32 w-52 sm:h-32 h-52 object-contain"
                    src={item.image}
                    alt="productImg"
                  />
                </div>

                <h2 className="w-52 font-bold ">{item.title}</h2>
                <div className="flex sm:block">
                  <p className="w-30">Unit ${item.price}</p>
                  <div className="w-30 flex items-center sm:justify-between text-gray-500 gap-4 border p-3 mx-5 sm:mx-0">
                    <p className="hidden sm:block text-sm">Quantity</p>
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <span
                        onClick={() =>
                          dispatch(
                            decrementQuantity({
                              _id: item._id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        -
                      </span>
                      {item.quantity}
                      <span
                        onClick={() =>
                          dispatch(
                            increamentQuantity({
                              _id: item._id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <p className="w-30">Total ${item.quantity * item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              dispatch(resetCart()) & toast.error("Your Cart is Empty!")
            }
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          >
            Reset Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
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
  );
};

export default CartItem;
