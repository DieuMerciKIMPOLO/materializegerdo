import React from 'react';
import HeaderPrincipal from './header/HearderPrincipal';
import FooterPrincipal from './footer/FooterPrincipal';

class Profil extends React.Component{
    render(){
        const utilisateur=JSON.parse(window.localStorage.getItem('user'));
        return(
            <div className="container">
              <HeaderPrincipal/>
              <div className="row">
              <div className="col s3 m3">
              </div>
              <div className="col s6 m6">
              <div className="card">
                <div className="card-image">
                  <img src="https://materializecss.com/images/sample-1.jpg"/>
                  <span className="card-title">Le profil de l'utilisateur</span>
                </div>
                <div className="card-content">
                <a href="#" className="brand-logo">
                  <p>{utilisateur?utilisateur.nom:null}</p> 
                  <p>{utilisateur?utilisateur.prenom:null}</p> 
                  <p>{utilisateur?utilisateur.email:null}</p>
                  <p>{utilisateur?utilisateur.status:null}</p>
                  </a>
                </div>
                <div className="card-action">
                </div>
              </div>
            </div>
              <div className="col s3 m3">             
              </div>
              </div>
              <FooterPrincipal/>
            </div>     
        )
    }
}export default Profil;