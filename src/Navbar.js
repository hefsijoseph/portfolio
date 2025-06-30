import { useRef , useState } from 'react';
import  menu from './asset/menu-2.svg';
import close from './asset/x.svg';
import { Link } from "react-router-dom";
import classNames from 'classnames';

const Navbar = () => {
  
  const navbar = useRef();
  const toggle = useRef();

  const [isAdded, setIsAdded] = useState(false);

  const toggleNavbarClass = () => { setIsAdded(!isAdded); 
    console.log(isAdded);

  };


   
       
      
  return (
    <header>
      <nav ref={navbar}  className={classNames('navbar  flex justify-between ', { add: isAdded })}>
        <h1 className="text-2xl md:text-3xl font-extrabold">Hefsi's Portfolio</h1>
        <ul className="nav-menu flex justify-between">
          <li className="nav-item mr-5">
            <Link to="/" className="nav-link ">
              Home
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to="/about" className="nav-link ">
              About me
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to="/workpage" className="nav-link ">
              Work page
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to="/contact" className="nav-link ">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hambaga  toggler" ref={toggle} onClick={toggleNavbarClass} >
          <img src={menu} alt="menu" className="menu" />
          <img src={close} alt="close" className="x" />

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
