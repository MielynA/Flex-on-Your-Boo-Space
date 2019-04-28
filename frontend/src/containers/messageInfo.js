import React from 'react';
import NasaAxiosService from '../services/axios/nasa';

export default class MessageInfo extends React.Component {

    state = {
        toName: '',
        fromName: '',
        personalNote: '',
        title: '',
        img_url: '',
        spaceDate: '',
        description: ''
    }

    handleChange = (e) => {
        console.log('e', e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const { toName, fromName, personalNote, img_url, date, description } = this.state;

        return (
            <form className='needs-validation'>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">To</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">To:</div>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange} name='toName' id="inlineFormInputGroup" placeholder="Ya boo's name..." />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">From:</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">From:</div>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange} name='fromName' id="inlineFormInputGroup" placeholder="(Optional) Your name..." />
                    </div>
                </div>
                <div className=''>
                    <label>Choose your space fate...</label>
                    <input type="date" onChange={this.handleChange} name="spaceDate" />
                    <div className="invalid-tooltip">
                        Please provide a date!
                    </div>
                </div>
                <textarea className="form-control" name='personalNote' id="exampleFormControlTextarea1" rows="2"></textarea>
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        )
    }
}