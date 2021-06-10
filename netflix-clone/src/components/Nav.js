import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

	return (
		<div className={`nav ${show && "nav--black"}`}>
			<img
			className="nav--logo" 
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
			alt="Netflix Logo"
			></img>
			<div className="nav--usercontent">
			<p 
			className="nav--username"
			>Nikhil</p>
			<img
			className="nav--avatar" 
			src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
			alt="Netflix Avatar"
			></img>
			
			</div>
		</div>
	)
}

export default Nav