import React from 'react';
import CardAxiosService from '../services/axios/card';
import moment from 'moment';

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
            toname: "",

        }
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        CardAxiosService.getSpaceCard(id)
        .then(({msg}) => {
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
                toname,
             } = msg;
             

            this.setState({ date, 
                spaceDate, 
                description, 
                fromname, 
                horoscropesign, 
                id, 
                img_url, 
                personalnote, 
                title, 
                toname })
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
           toname,
           
        } = this.state;
        console.log('this state', this.state)
       const withoutName = <p>Dear My Boo</p>
       return(

           <React.Fragment>
               <div className="container text-white bg-dark mt-4 mb-4">
               <h5 className="card-title mb-4 mt-4">{this.state.toname.length >0  ?  'Dear:' + this.state.toname : withoutName}</h5>
               <img className="card-img-top" src={img_url} alt={title}/>
               <div className="card-body">
               <div style={{display: 'flex'}}>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}   </div>  
               <div style={{}}>Horoscope:{horoscropesign}  </div>
               <div>Facts: {description}</div>
               <p className="card-text">Personal Note:{personalnote}</p>
               {fromname ? <p>From: {fromname}</p> : null}
               <button className="ml-2 btn btn-primary">Share</button>
             </div>
             </div>

               
           </React.Fragment>
       );
   }

}