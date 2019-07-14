import React from 'react';

class HeaderPrincipal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            aUnInscription:false
        }
        this.deconnexion=this.deconnexion.bind(this)
    }
    deconnexion(){
        window.localStorage.removeItem('user');
        window.location.href="/login";
    }
    componentDidMount() {
        const utilisateur=JSON.parse(window.localStorage.getItem('user'));
        if(utilisateur){
            fetch('http://localhost:3001/listInscrits')
            .then(resp=>resp.json())
            .then(data=>{
            this.setState({aUnInscription:data.filter(obj=>obj.user===utilisateur.id).length!==0});
            });            
        }
 
    }
    render(){
        const utilisateur=JSON.parse(window.localStorage.getItem('user'));
        return(
            <nav>
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {utilisateur?<li><a href="/profil"> Profil</a></li>:null}
                <li><a href="/">Presentation</a></li>
                <li><a href="/faq">Faq</a></li>
                {utilisateur && this.state.aUnInscription?<li><a href="/inscription"> Inscription</a></li>:null}
                {utilisateur && !this.state.aUnInscription?<li><a href="/inscrire">S'inscrire</a></li>:null}
                {!utilisateur?<li><a href="/login">Connexion</a></li>:<li><a  onClick={()=>this.deconnexion()} href="#">Deconnexion</a></li>}
                {utilisateur?utilisateur.status==="Administrateur"?<li><a href="/admin">Admin</a></li>:null:null}
              </ul>
            </div>
          </nav>
                
        )
    }
}export default HeaderPrincipal;