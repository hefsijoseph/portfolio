// useful library 
import { useRef , useState } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
// useful icons
import  menu from '../asset/menu-2.svg';
import close from '../asset/x.svg';

// Navbar 
const Navbar = () => {
  
  const navbar = useRef();
  const toggle = useRef();
  const closeLink = useRef();

  const [isAdded, setIsAdded] = useState(false);

  const toggleNavbarClass = () => { setIsAdded(!isAdded); 
    console.log(isAdded);

  };

//   closeLink.forEach((link) =>{
//     link.addEventListener("click", () =>{
    
//     })
// });
 
  return (
    <header>
      <nav ref={navbar}  className={classNames('navbar  flex justify-between ', { add: isAdded })}>
        <h1 className="text-2xl  md:text-3xl font-extrabold ">Hefsi's Portfolio</h1>
        <ul className="nav-menu flex justify-between">
          <li className="nav-item mr-5" ref={closeLink}>
            <Link to="/" className="nav-link px-0 py-3 md:px-3">
              Home
            </Link>
          </li>
          <li className="nav-item mr-5" ref={closeLink}>
            <Link to="/about" className="nav-link px-0 py-3  md:px-3">
              About me
            </Link>
          </li>
          <li className="nav-item mr-5" ref={closeLink}>
            <Link to="/workpage" className="nav-link px-0 py-3  md:px-3">
              Work page
            </Link>
          </li>
          <li className="nav-item mr-5" ref={closeLink}>
            <Link to="/contact" className="nav-link px-0 py-3  md:px-3">
              Contact
            </Link>
          </li>
        </ul>
        <button className="hambaga  toggler" ref={toggle} onClick={toggleNavbarClass} >
          <img src={menu} alt="menu" className="menu" />
          <img src={close} alt="close" className="x" />

        </button>
      </nav>
    </header>
  );
};

export default Navbar;
// end Navbar 
