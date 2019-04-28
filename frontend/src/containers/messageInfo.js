import React from 'react';
import NasaAxiosService from '../services/axios/nasa';

export default class MessageInfo extends React.Component {

    state = {
        toName: '',
        fromName: '',
        personalNote: '',
        img_url: '',
        date: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        const { toName, fromName, personalNote, img_url, date, description } = this.state;

        return (
            <form>
                <div className="col-auto">
                    <label className="sr-only" for="inlineFormInputGroup">To</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">To:</div>
                        </div>
                        <input type="text" className="form-control" name='toName' id="inlineFormInputGroup" placeholder="Ya boo's name..." />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" for="inlineFormInputGroup">From:</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">From:</div>
                        </div>
                        <input type="text" className="form-control" name='fromName' id="inlineFormInputGroup" placeholder="(Optional) Your name..." />
                    </div>
                </div>
                <input type="date" name="bday" />
                <textarea className="form-control" name='personalNote' id="exampleFormControlTextarea1" rows="2"></textarea>
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        )
    }
}