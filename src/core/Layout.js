import React, {useState} from "react";
import background from "../assets/background.png";
import sports from '../assets/Sports.png';
import "../styles.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import YouTube from "./Youtube";
import freak from '../assets/freak.svg';
import {animateScroll as scroll} from 'react-scroll'

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (




    <div className="every">
               <Navbar />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
       
        <div className={className}>{children}</div>


        <div className="Vids" style={{backgroundImage: `url(${sports})`,backgroundColor: 'blue'}}>

        <YouTube 
        videoId='0ZsO3PgRbDY'
        />
        <div style={{paddingTop:"1rem"}}>
        <YouTube videoId='0ZsO3PgRbDY' />
        </div>
        </div>
        <div style={{height:'7rem', backgroundImage: `url(${background})`, backgroundColor: '#fc8621'}}>
        <img src={freak} className="freak" onClick={() => scroll.scrollToTop()}/>
        </div>



        <Footer />
    </div>
 
);

export default Layout;
