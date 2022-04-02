import React from "react";

export const Footer = () => {
  const footerStyle = {
    position: "relative",
  };
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>Copyright &copy; MyTodoList.com</p>
    </footer>
  );
};
