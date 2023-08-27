import "./Banner.css";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Cursor , useTypewriter } from 'react-simple-typewriter'

export default function Banner()
{
    const [text] = useTypewriter({
        words: ['prashant prajapati', 'react full stack developer', 'web designer'],
        loop: 0,
        typeSpeed:60,
        deleteSpeed:80,
        delaySpeed:1500
    
      })
    
    return(<div className='hero'>
    <div className="mask">
        <img className="into_img" src="image.jpg" />
    </div>

    <div className="hero-content">
        <div className="hello-btn">Hello !</div>
        <div className="developer">
            <span>I am </span> {text} <span><Cursor/></span>
            </div>
        <div className="description">I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design and many more...</div>
        <div className="icon">
            <div className="insta"><a className="a1" href="https://demo.templatemonster.com/demo/74175.html"><InstagramIcon/></a></div>
            <div className="insta"><a className="a1" href="https://www.linkedin.com/in/prashant-prajapati-04561626b"><LinkedInIcon/></a></div>
            <div className="insta"><a className="a1" href="https://demo.templatemonster.com/demo/74175.html"><InstagramIcon/></a></div>


        </div>

    </div>

   
   
    </div>)
}