import React from "react";

export const About = () => {
  const aboutStyle = {
    backgroundColor: "grey",
    borderRadius: "5px",
    padding: "16px",
    // margin: "40px 0 40px 0",
  };
  return (
    <div className='container my-3' style={aboutStyle}>
      This is an about component
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorem
        totam accusamus qui et at ea accusantium, adipisci dolore quam
        reiciendis. Aliquam quis cumque quas nulla eos unde laboriosam
        blanditiis.
      </p>
    </div>
  );
};
