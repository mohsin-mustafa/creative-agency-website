import React from "react";






const CTA = (props) => {
  console.log("props", props);
  return (
    <div> 
        <button className="rounded-full bg-red-500 ">{props.title}</button>
        
        

        

        
    </div>
  )
}

export default CTA;