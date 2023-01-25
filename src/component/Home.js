import React, { useEffect } from 'react'
import { Link, useLocation, useNavigationType } from 'react-router-dom'
import "./Home.css"

function Home() {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
  return (
    <div className='home'>
<div className='div1'>
  <h1>I'm a Fullstack Js Web Developer </h1>
  {/* <p>Escape the fad and discover our creative services that will give authority to your brand.</p> */}
<p>Motivated junior web developer looking for a role as full-stack web developer . Passionate about building first-class web applications.</p>
<div className='btn1'>
  <Link to="/about">
<button>Read more</button>
</Link>
</div>
</div>
<div className='div2'>
  <img src="ah.png"/>
</div>
    </div>
  )
}

export default Home