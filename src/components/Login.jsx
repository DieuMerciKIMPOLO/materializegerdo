import React from 'react';
import HeaderPrincipal from './header/HearderPrincipal';
import FooterPrincipal from './footer/FooterPrincipal';
// import { users } from '../data/data';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            motdepasse:""
        }
        this.seconnecter=this.seconnecter.bind(this);
        this.detecterChan=this.detecterChan.bind(this)
    }
    detecterChan(e,nomDuChamp){
      if(nomDuChamp==='email'){
          this.setState({email:e.target.value})
      }else{
          this.setState({motdepasse:e.target.value})
      }
    }
    seconnecter(){
      fetch('http://localhost:3001/users')
      .then(resp=>resp.json())
      .then(data=>{
        const existe=data.filter(obj=>obj.email===this.state.email && obj.motdepasse===this.state.motdepasse).length>0
      
        if(existe){
          window.localStorage.setItem('user',JSON.stringify(data.filter(obj=>obj.email===this.state.email && obj.motdepasse===this.state.motdepasse)[0]))
          window.location.href='/profil'
          //alert(`${this.state.email} et ${this.state.motdepasse} EXISTE!!!!!`) 
        }else{
          alert(`${this.state.email} et ${this.state.motdepasse} N'EXISTE PAS!!!!!`) 
        }
      });  
    }
    render(){
        return(
            <div className="container">
              <HeaderPrincipal/>
              <div className="row">
              <div className="col s3"></div>
              <form className="col s6">
              <div className="row">
                <div className="input-field col s12">
                    <input value={this.state.email} id="email" type="email" className="validate" onChange={(e)=>this.detecterChan(e,'email')}/>
                    <label for="email">Votre email</label>
                    </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" value={this.state.motdepasse} type="password" className="validate" onChange={(e)=>this.detecterChan(e,'motdepasse')}/>
                    <label for="password">Votre mot de passe</label>
                  </div>
                </div>
                <div className="row">
                <div className="input-field col s12">
                <a onClick={()=>this.seconnecter()} class="waves-effect waves-light btn">Se connecter</a>
                </div>
                </div>
              </form>
              <div className="col s3"></div>
            </div>
              <FooterPrincipal/>
            </div>     
        )
    }
}export default Login;