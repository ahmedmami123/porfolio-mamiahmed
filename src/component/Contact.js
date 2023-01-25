

import React, { useEffect,useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { useLocation, useNavigationType } from 'react-router-dom';

function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_3th3cbu', 'template_sqkny1o', form.current, 't4ad_eQnrRVMx5GeC')
    .then((result) => {
        console.log(result.text);
        console.log("message sent")
    }, (error) => {
        console.log(error.text);
    });
};
const [inputValue, setInputValue] = useState("");
const [inputValue1, setInputValue1] = useState("");
const [inputValue2, setInputValue2] = useState("");
const handleUserInput = (e) => {
  setInputValue(e.target.value);
};
const handleUserInput1 = (e) => {
  
  setInputValue1(e.target.value);
};
const handleUserInput2 = (e) => {

  setInputValue2(e.target.value);
};
// Reset Input Field handler
const location = useLocation();
const navType = useNavigationType();
const resetInputField = () => {
  setInputValue("");
  setInputValue1("");
  setInputValue2("");
};
useEffect(() => {
  if (navType !== "POP") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [location]);
  return (
    <div className='contact'>
        <div className='div1'>
            <h1>Contact</h1>
        </div>
        <div className='div2'>
        <div className='div'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>


</div>
<h2>Address :</h2>
<p>AlNoor District bouchemma-gabes,tunisia</p>
        </div>
        <div className='div'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>


</div>
<h2>Phone :</h2>
<p>(+216) 58008840</p>
        </div>
        <div className='div'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg>


</div>
<h2>Email :</h2>
<p>ahmedmami940@gmail.com</p>
        </div>
        </div>
  <form ref={form}  onSubmit={sendEmail} className='div3'>
<div className='div'>
<h1>Get in touch with us</h1>
<input type="text" name="users_name" placeholder='Name' value={inputValue} onChange={handleUserInput}></input>
<input type="text" name="users_email" placeholder='Email' value={inputValue1} onChange={handleUserInput1}></input>
<textarea name="message" placeholder='Message'value={inputValue2} onChange={handleUserInput2}></textarea>
<button onClick={()=>{
  setTimeout(() => {
    resetInputField();
  }, 1000);
}}>SEND MESSAGE</button>
</div>
  </form>
    </div>
  )
}

export default Contact