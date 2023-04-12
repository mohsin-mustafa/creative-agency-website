import React from "react";
import GetStartedButton from "../../modules/landingPage/heroSection/getStartedButton";

const NavMenu = (props) => {




    return (
        <div
            className="fixed top-24  mx-[6%] h-[310px] w-[88%] bg-blue-700 shadow-2xl transition-all duration-300 md:hidden"
            style={props.isOpen ? { left: "0" } : { left: "100%" }}
        >
            <ul className="flex  h-full flex-col justify-evenly text-center text-xl font-bold text-white">
                {["Home", "Works", "About Us"].map(
                    (item, i) => {
                        return (
                            <li
                                className="cursor-pointer hover:text-darkGrayishBlue"
                                key={i}
                            >
                                {item}
                            </li>
                        );
                     
                      
                    }
                )}
                <GetStartedButton />
            </ul>
            
        </div>
    );
};

export default NavMenu;
