import React from 'react';
import HeaderPrincipal from './header/HearderPrincipal';
import FooterPrincipal from './footer/FooterPrincipal';
import { users,listInscrits } from '../data/data';

class Inscription extends React.Component{
    constructor(props){
        super(props);
        this.state={
          data:[],
        }
    }
    componentDidMount() {
        const utilisateur=JSON.parse(window.localStorage.getItem('user'));
        fetch('http://localhost:3001/listInscrits')
        .then(resp=>resp.json())
        .then(data=>{
          this.setState({data:data.filter(obj=>obj.user===utilisateur.id)});
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
}export default Inscription;