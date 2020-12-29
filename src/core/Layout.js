import React from "react";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import "../styles.css";
import Header from "./Header";
import Footer from './Footer';
import YouTube from "./Youtube";






const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div className="every">
        <Header/>
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
       
        <div className={className}>{children}</div>
   
        <div>
        <ImageSlider slides={SliderData} />
        </div>
        <div className="Vids">

        <YouTube 
        videoId='0ZsO3PgRbDY'
        />

        <YouTube videoId='0ZsO3PgRbDY'/>
        </div>
  
        <Footer />
    </div>
 
);

export default Layout;
