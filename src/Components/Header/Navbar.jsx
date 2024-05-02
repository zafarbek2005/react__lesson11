import React, { useEffect, useState } from 'react';
import '../Header/Navbar.scss';
import { NavLink } from 'react-router-dom';
import axios from '../../API/Index';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const [value,setValue] = useState('')
  const [data,setData] =useState([])
  console.log(value);

   useEffect(() =>{
      axios
      .get(`products/search?q=${value}`)
      .then(res =>setData(res.data) )
      .catch((error) => console.log(error))
},[])


let javob = data?.products?.map((el,inx) =>(
  <div key={inx}>
   <img style={{width:"40px"}} src={el.images[0]} alt="" />
   <span>{el.title}</span>
  </div>
))
console.log(data);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header>
        <nav className="navbar container">
          <NavLink to={'/'}> 
            <h2 className="navbar__logo"><img src="data:image/png;base64,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" alt="Logo.svg" /></h2>
          </NavLink>
          <div className={`navbar__menu ${showNavbar ? 'open' : ''}`} onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`navbar__collection ${showNavbar ? 'show' : ''}`}>
            <li className="navbar__item">
              <a href="#" className="navbar__link">Home</a>
            </li>
            <li className="navbar__item">
              <a href="" className="navbar__link">About</a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">Login</a>
            </li>
            <div className='search'>
              <input value={value}
               onChange={e => setValue(e.target.value)} 
               type="text" placeholder=' Search ...' />
              {
                value?.trim() ? 
                <div className="search-content">
              {javob}
                </div>
                :
                <></>
              }
             
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
