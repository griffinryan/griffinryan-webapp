import React, { Component } from 'react';
import logo from './borderedrainbow.svg';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h2 className="responsive-headline"><span></span>T O R P O I S E</h2>
            
            <img src={logo} className="App-logo" alt="logo" />
            
            <h3><span>Griffin Ryan</span> is {city} based <span>{occupation}</span></h3><hr />
            <h3>{description}.</h3><hr />
            <li>Visit the <a title="Torpoise Spotify" href="https://open.spotify.com/artist/1mrMGfjOuLEJP3YhW2Fhu3">Torpoise Spotify</a> page.</li> <hr />
            <h3>Also check out <a title="Torpoise's development projects" href="https://github.com/torpoise/torpoisepage">Torpoise's development projects</a> page. projects!</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
