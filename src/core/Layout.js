import React, {useState} from "react";
import background from "../assets/background.png";
import "../styles.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import YouTube from "./Youtube";

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





        <div className="Vids">

        <YouTube 
        videoId='0ZsO3PgRbDY'
        />

        <YouTube videoId='0ZsO3PgRbDY'/>
        </div>
        <div style={{height:'4rem', backgroundImage: `url(${background})`, backgroundColor: '#fc8621'}}>
        </div>

        <Footer />
    </div>
 
);

export default Layout;
