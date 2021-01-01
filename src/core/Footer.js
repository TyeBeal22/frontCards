import React from "react";
import "./Footer.css";
import socials from '../assets/socials.svg'
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Bullish Breaks LLC</h4>
            <h1 className="list-unstyled">
              <li>703-***-8888</li>
              <li>Arlington, VA</li>
              <li>12 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Contacts</h4>
            <img src={socials} className="socials" />
            <ui className="list-unstyled">
              <li>BullishBreak@yahoo.com</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
          <h4>Social Media</h4>
            <ui className="list-unstyled">
            <a href="https://www.instagram.com/bullishbreaks/"><InstagramIcon className="fab fa-instagram" style={{ fontSize: 50, color: "gold" }} /></a>
            </ui>

          </div>
          <Link href="#"><ArrowUpwardIcon style={{ fontSize: 50, color: "gold" }} onClick={() => scroll.scrollToTop()}/></Link>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm bottom">
            &copy;{new Date().getFullYear()} Designed by | MutationCode LLC |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;





{/*
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import basketball from '../assets/basketball.png';

export default class Footer extends Component {
    render() {
        return (
            <div  styles={{ backgroundImage:`url(${basketball})` }}>
                    <Link href="#"><FacebookIcon className="fab fa-facebook-f" /></Link>
                    <Link href="#"><InstagramIcon className="fab fa-instagram" /></Link>
                    <Link href="#"><SportsFootballIcon style={{ fontSize: 60 }}/></Link>
                    <Link href="/"><SportsBasketballIcon style={{ fontSize: 60 }} /></Link>
            </div>
        )
    }
}

*/}