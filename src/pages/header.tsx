import React from 'react';

const Header = () => {
  const [toggle_menu, setToggleMenu] = React.useState(false)
  
  const toggleMenu = () => {
    setToggleMenu(!toggle_menu);
  };

  return (
    <>
      <header>
        <h2 className="logo">Your Logo</h2>
        <div
          className={
            toggle_menu ? "toggle active" : "toggle"
          }
          onClick={toggleMenu}
        ></div>
      </header>
    </>
  );
}

export default Header