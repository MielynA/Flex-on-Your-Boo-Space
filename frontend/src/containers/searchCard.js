import React from 'react';

export default class SearchCard extends React.Component { 
    constructor(props){
        super(props);
        this.state = {


        }
    }
   render(){
       return(
           <React.Fragment>
               <div className="container text-white bg-dark mt-4 mb-4">
               
               <h5 className="card-title mt-4">Card title</h5>
               <img className="card-img-top" src="https://apod.nasa.gov/apod/image/1904/pia23122c-16.jpg" alt="booSpace image"/>
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