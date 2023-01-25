import React, { useEffect, useState } from 'react'
import Cardcss from './Cardcss';
import "./Portfilio.css"
import "./Cardcss.css"
import Video from './Video';
import { useLocation, useNavigationType } from 'react-router-dom';
function Portfilio() {
  const [show, setshow] = useState(true);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [videoshop1,setvideoshop1] = useState("shop.mp4");
  const [videoshop2,setvideoshop2] = useState("movie.mp4");
  const [videoshop3,setvideoshop3] = useState("tomi.mp4");
  // const [contacth,setcontact] = useState("contact.PNG");
  // const [dash,setdash] = useState("contactmovie.png");
  // const [logincrea,setlogincrea] = useState("logincrea.JPG");
  // const [logins,setlogins] = useState("logins.JPG");
  // const [profil,setprofil] = useState("profil.JPG");
  // const [todo,settodo] = useState("todo.JPG");
  const [showvideoshop, setshowvideoshop] = useState(false);
  const [showvideomovie, setshowvideomovie] = useState(false);
  const [showtomocrea, setshowtomocrea] = useState(false);
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
    <div className='portfilio'>
      {showvideoshop?<Video videoshop={videoshop1} setshowvi={setshowvideoshop} showvideoshop={showvideoshop} />:null}
      {showvideomovie?<Video videoshop={videoshop2} setshowvi={setshowvideomovie} showvideomovie={showvideomovie} />:null}
      {showtomocrea?<Video videoshop={videoshop3} setshowvi={setshowtomocrea} showvideomovie={showtomocrea} />:null}

<h1>Portfolio</h1>
<div className='list'>
  <h2 className={show?"ba":""} onClick={()=>{
    setshow(true);
    setshow1(false);
    setshow2(false);
  }}>React Js</h2>
  <h2 className={show1?"ba":""} onClick={()=>{
    setshow(false);
    setshow1(true);
    setshow2(false);
  }}>HTML-CSS-js</h2>
  <h2 className={show2?"ba":""} onClick={()=>{
    setshow(false);
    setshow1(false);
    setshow2(true);
  }}>MERN App</h2>

</div>
{show?<div className='port'>
  <div className='prj'>
   <div className='card'>
 
<img className='img1' src='chalangeshophome.png'/>
   </div>
   <div className='card'>
   <img className='img2' src='chlangeshopcom.png'/>
    </div>
    <div className='card'>
    <img className='img2' src='chalangeshopmobile.png'/>
    </div>
    <div className='card'>
    <img className='img2' src='chlangeshopcom1.png'/>
    </div>
    <div className='card'>
    <img className='img3' src='chalngeshopdash.png'/>
    </div>
    <div className='card cardic'>
    <h1 className='h1'>Shop App</h1>
    <svg onClick={()=>setshowvideoshop(!showvideoshop)} xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#dd1e4b" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
    </div>
  </div>
  <div className='prj'>
   <div className='card'>
<img className='img1' src='moviehome.png'/>
   </div>
   <div className='card'>
   <img  src='contactmovie.png'/>
    </div>
   
    <div className='card cardic'>
  
    <h1 className='h1'>Movie app</h1>
    <svg onClick={()=>setshowvideomovie(!showvideomovie)} xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#dd1e4b" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
    </div>
  </div>


</div>:null}





{show1?<div className='port'>
  <div className='prj'>
  {/* <Cardcss image={logincrea}/> */}
      <div className='carcss'>
<img className='i1' src="logincrea.JPG"/>

    </div>
   {/* <Cardcss image={logins}/> */}
   <div className='carcss ca1'>
<img className='i2' src="logins.JPG"/>

    </div>
   {/* <Cardcss image={"profil.JPG"}/> */}
   <div className='carcss'>
<img className='i3' src="profil.JPG"/>

    </div>
   {/* <Cardcss image={todo}/> */}
   <div className='carcss ca3'>
<img className='i4' src="todo.JPG"/>

    </div>
   {/* <Cardcss image={contacth}/> */}
   <div className='carcss ca1'>
<img className='i44' src="contact.JPG"/>

    </div>
   {/* <Cardcss image={dash}/> */}
   <div className='carcss ca2'>
<img className='i5' src="contactmovie.png"/>
    </div>
  </div>



</div>:null}
{show2?<div className='port'>
  <div className='prj'>
   <div className='card'>
 
<img className='img11' src='homecrea.png'/>
   </div>
   <div className='card cardic1'>
   <img className='img22' src='aboutcrea.png'/>
    </div>
    <div className=' card cardic1'>
    <img className='img222' src='contact.JPG'/>
    </div>
    <div className='card cardic2'>
    <img src='ideacrea.png'/>
    </div>
    <div className='card cardic1'>
    <img className='img33' src='logincrea.JPG'/>
    </div>
    <div className='card cardic'>
    <h1 className='h1'>Association App</h1>
    <svg onClick={()=>setshowtomocrea(!showtomocrea)} xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#dd1e4b" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
    </div>
  </div>



</div>:null}
    </div>
  )
}

export default Portfilio