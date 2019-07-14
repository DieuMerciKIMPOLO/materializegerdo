import React from 'react';
import HeaderPrincipal from './header/HearderPrincipal';
import FooterPrincipal from './footer/FooterPrincipal';
import { users,listInscrits } from '../data/data';

class ListeInscrits extends React.Component{
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
          },
          data:[],
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
        })
        .catch(error=>{
            console.log(error);
        })
    //   listInscrits.push(this.state.inscription);
    //   console.log(this.state.inscription, listInscrits);
    }
    componentDidMount() {
        fetch('http://localhost:3001/listInscrits')
        .then(resp=>resp.json())
        .then(data=>{
          this.setState({data:data});
        }); 
    }
    
    render(){
        return(
            <div className="container">
              <HeaderPrincipal/>
              <div className="row">
              <table>
              <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Adresse</th>
                    <th>Filiere</th>
                    <th>Annee</th>
                </tr>
              </thead>
      
              <tbody>
              {
                  this.state.data.map((item)=>{
                      return(
                        <tr>
                            <td>{item.nom}</td>
                            <td>{item.prenom}</td>
                            <td>{item.adresse}</td>
                            <td>{item.filiere}</td>
                            <td>{item.annee}</td>
                        </tr>                          
                      )
                  })
              }

              </tbody>
            </table>
               </div>
              <FooterPrincipal/>
            </div>     
        )
    }
}export default ListeInscrits;