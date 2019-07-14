import React from 'react';
import HeaderPrincipal from './header/HearderPrincipal';
import FooterPrincipal from './footer/FooterPrincipal';

class Faq extends React.Component{
    render(){
        const utilisateur=JSON.parse(window.localStorage.getItem('user'));
        return(
            <div className="container">
              <HeaderPrincipal/>
              <div className="row">
                   Code du FAQ
              </div>
              <FooterPrincipal/>
            </div>     
        )
    }
}export default Faq;