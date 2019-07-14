import React from 'react';
import HeaderPrincipal from './header/HearderPrincipal';
import FooterPrincipal from './footer/FooterPrincipal';
import { users,listInscrits } from '../data/data';

class Inscrire extends React.Component{
    constructor(props){
        super(props);
        this.state={
          inscription:{
            nom:"",
            prenom:"",
            adresse:"",
            filiere:"",
            annee:"",
            user:""
          }
        }
        this.seconnecter=this.seconnecter.bind(this);
        this.detecterChan=this.detecterChan.bind(this)
    }
    detecterChan(e,nomDuChamp){
        var data=this.state.inscription;
        data[`${nomDuChamp}`]=e.target.value;
        this.setState({inscription:data})

    }
    seconnecter(){
    const utilisateur=JSON.parse(window.localStorage.getItem('user'));
    var data=this.state.inscription;
    data[`user`]=utilisateur.id;
    this.setState({inscription:data});
    fetch('http://localhost:3001/listInscrits', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.inscription)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            window.location.href="/inscription"
        })
        .catch(error=>{
            console.log(error);
        })
    //   listInscrits.push(this.state.inscription);
    //   console.log(this.state.inscription, listInscrits);
    }
    render(){
        return(
            <div className="container">
              <HeaderPrincipal/>
              <div className="row">
              <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                    <input value={this.state.inscription.nom} id="email" type="text" className="validate" onChange={(e)=>this.detecterChan(e,'nom')}/>
                    <label for="email">Votre nom</label>
                    </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" value={this.state.inscription.prenom} type="text" className="validate" onChange={(e)=>this.detecterChan(e,'prenom')}/>
                    <label for="password">Votre prenom</label>
                  </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" value={this.state.inscription.adresse} type="text" className="validate" onChange={(e)=>this.detecterChan(e,'adresse')}/>
                    <label for="password">Votre adresse</label>
                    </div>
                </div>
                <div className="row">
                <div className="input-field col s12">
                <input id="password" value={this.state.inscription.filiere} type="text" className="validate" onChange={(e)=>this.detecterChan(e,'filiere')}/>
                <label for="password">Filiere</label>
                </div>
               </div>
               <div className="row">
                <div className="input-field col s12">
                <input id="password" value={this.state.inscription.annee} type="text" className="validate" onChange={(e)=>this.detecterChan(e,'annee')}/>
                <label for="password">Annee</label>
                </div>
               </div>
                <div className="row">
                <div className="input-field col s12">
                <a onClick={()=>this.seconnecter()} class="waves-effect waves-light btn">Se connecter</a>
                </div>
                </div>
              </form>
            </div>
              <FooterPrincipal/>
            </div>     
        )
    }
}export default Inscrire;