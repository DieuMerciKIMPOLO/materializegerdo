import React from 'react';
import HeaderPrincipal from './header/HearderPrincipal';
import FooterPrincipal from './footer/FooterPrincipal';

class Presentation extends React.Component{
    render(){
        return(
            <div className="container">
              <HeaderPrincipal/>
              <div className="col s12 m12">
              <h2 className="header">Horizontal Card</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://lorempixel.com/100/190/nature/6"/>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
              </div>
              <div className="col s12 m12">
                <div className="card-panel teal">
                  <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                  </span>
                </div>
              </div>
              <div className="col s6 m6">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://materializecss.com/images/office.jpg"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>              
              </div>

              <FooterPrincipal/>
            </div>     
        )
    }
}export default Presentation;