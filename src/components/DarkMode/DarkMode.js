import React, { useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const [theme, setTheme] = useState(false)

    console.log("theme", theme);
    // setTheme();

    // function myFunction() {
    //     var element = document.body;
    //     element.classList.toggle("dark-mode");
    //  }
   


// const setDarkMode = () =>{
//     document.querySelector("body").setAttribute("data-theme", "dark");
// }

// const setLightMode = () =>{
//     document.querySelector("body").setAttribute("data-theme", "light");
// }


// const toggleTheme = (e) =>{
//     if (e.target.checked) setDarkMode();
//     else setLightMode ();
// };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={(e)=> setTheme(e.target.checked)} 
                // onClick={myFunction}
                // onChange={toggleTheme}
            /> 
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
            <button className="bg-red-300" onClick={() => setTheme(!theme)}> Toogle</button>

        </div>
            
    );
};

export default DarkMode;
