import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assest/GPT-3.svg'
import "./navbar.css"


const Menu = ()=>{
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wgpt3'>What is GPT3?</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Case Study</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
}
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar__links'>
        <div className='gpt3__navbar__links__logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar__links_container'>
          <Menu />
        </div>
        <div className="gpt3__navbar_sign">
          <p>Sign in</p>
          <button type='button'>Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
        {toggle ?
        <RiCloseLine color="#fff" size={27} onClick={()=>{setToggle(false)}} />
        : <RiMenu3Line color="#fff" size={27} onClick={()=>{setToggle(true)}} />
        }
        {
          toggle &&
          (<div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container_links">
            <Menu />
            <div className="gpt3__navbar-menu_container_links_sign">
            <p>Sign in</p>
          <button type='button'>Sign Up</button>
            </div>
            </div>
          </div>)
        }
        </div>
      </div>
    </div>
  )
}

export default Navbar; 
