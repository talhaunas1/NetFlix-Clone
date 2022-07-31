import React  from "react";
import './NavBar.css'
import {useEffect,useState} from "react"

function NavBar() {

  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 100){ 
        // 100 is a pixel here
        setShow (true)     
      }else setShow(false)
    })
  
    return ()=>{
      window.removeEventListener("scroll",null)
       //remove event listener take two aurguments 
      // type and listener. type
      // So try to put a null in the place of listener like this
    } 
  }, [])

 
  
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt=""
      />

      <img
        className="avatra"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt=""
      />
    </div>
  );
}

export default NavBar;
