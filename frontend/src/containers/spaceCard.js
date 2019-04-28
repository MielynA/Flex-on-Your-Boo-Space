import React from 'react';
import CardAxiosService from '../services/axios/card';

export default class SpaceCard extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            date: "", 
            spaceDate: "", 
            description: "", 
            fromname: "", 
            horoscropesign: "", 
            id: "", 
            img_url: "", 
            personalnote: "", 
            title: "", 
            toname: ""

        }
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        CardAxiosService.getSpaceCard(id)
        .then(({msg}) => {
            this.setState({ state: msg })
        })
    }

   render(){
       const {
           date, 
           spaceDate, 
           description, 
           fromname, 
           horoscropesign, 
           id, 
           img_url, 
           personalnote, 
           title, 
           toname
        } = this.state;

       return(
           <React.Fragment>
               <div className="container text-white bg-dark mt-4 mb-4">
               
               <h5 className="card-title mt-4">Card title</h5>
               <img className="card-img-top" src={img_url} alt={title}/>
               <div className="card-body">
               <div>Date:       ||    Horoscope:     </div>
               <div>Facts:</div>
               <p className="card-text">Personal Note:</p>
               <p>From: (optional) </p>
               {/* we could do a moment here */}
               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
             </div>
              </div>

               
           </React.Fragment>
       );
   }

}