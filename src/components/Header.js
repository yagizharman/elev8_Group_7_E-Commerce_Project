import React from "react";
import { cartImg, logoDark } from "../assets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logoDark} alt="logoDark" className="w-28" />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li
                className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2
                        decoration-[1px] cursor-pointer duration-300
                        "
              >
                
              <img
                src={"https://cdn.discordapp.com/attachments/1155895318894882856/1159822298094768148/home.png?ex=65326bb0&is=651ff6b0&hm=fd401c1112de65ae86919ae58e655ce766f938a447e5dc3a9177a5be4aab4181&"}
                alt="homeLogo"
                className="w-8 h-8"
            />

              </li>
            </Link>
          </ul>

          <Link to="/cart">
            <div className="relative">
              <img className="w-8" src={cartImg} alt="cartImg" />
              <span className="absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              src={
                userInfo
                  ? userInfo.image
                  : "https://cdn.discordapp.com/attachments/704423371932303566/1159820096206798848/avatar.png?ex=653269a3&is=651ff4a3&hm=523fcc76b6d316c8ef627ab630d7ac7140bd3da8375398955da1f28056f6fa32&"
              }
              alt="userLogo"
              className="w-8 h-8 rounded-full mr-10"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
