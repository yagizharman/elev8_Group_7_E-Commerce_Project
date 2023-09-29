import React from 'react'
import { MdOutlineClose } from "react-icons/md"
import { HiOutlineArrowLeft } from "react-icons/hi"
import {ToastContainer, toast} from "react-toastify"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'


const CartItem = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const dispatch = useDispatch();
  return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-2xl'>Shopping Cart</h2>
        </div>
        <div>
            {
                productData.map((item)=>(
                    <div key={item._id} className='flex items-center justfy-between gap-6 mt-6'>
                        <div>
                            <MdOutlineClose onClick={()=>dispatch(deleteItem(item._id))&toast.error} className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
                            <img src={item.image} className='w-32 h-32 object-cover' alt='productImage'></img>
                        </div>
                        <h2 className='w-52'>{item.title}</h2>
                        <p className='w-10'>${item.price}</p>
                        <div className='w-52 flex items-center justify-between text-gray-400 gap-4 border p-3'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <span className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                            onClick={() => {
                                dispatch(
                                    decrementQuantity({
                                        _id:item._id,
                                        title:item.title,
                                        image:item.image,
                                        price:item.price,
                                        quantity: 1,
                                        description:item.description,
                                    })
                                )
                            }}
                            >-</span>
                            {item.quantity}
                            <span className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                            onClick={() => {
                                dispatch(
                                    increamentQuantity({
                                        _id:item._id,
                                        title:item.title,
                                        image:item.image,
                                        price:item.price,
                                        quantity: 1,
                                        description:item.description,
                                    })
                                )
                            }}
                            >+</span>
                        </div>
                    </div>
                    <p className='w-14'>${item.quantity*item.price}</p>
                    </div>
                ))
            }
        </div>
        <button className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'  onClick={()=>dispatch(resetCart())& toast.error("Your Card is Empty!") }>Reset Cart</button>
        <Link to='/'>
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                <span>
                    <HiOutlineArrowLeft />
                    go shopping
                </span>
            </button>
        </Link>
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

export default CartItem