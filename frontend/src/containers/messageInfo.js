import React from 'react';
import NasaAxiosService from '../services/axios/nasa';
import Horoscope from '../services/utilities/horoscope';
import CardAxiosService from '../services/axios/card';
import { withRouter } from 'react-router-dom';

class MessageInfo extends React.Component {

    state = {
        toName: '',
        fromName: '',
        personalNote: '',
        title: '',
        img_url: '',
        spaceDate: '',
        description: '',
        error: null
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkRequired = () => {
        const { spaceDate } = this.state;
        return spaceDate.length > 0
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { toName, fromName, personalNote, spaceDate } = this.state;

        const isRequired = this.checkRequired();

        if (!isRequired) {
            this.setState({ error: 'Please provide a date' })
        }
        else {
            const sign = Horoscope.getHoroscopeSign(spaceDate)
            NasaAxiosService.getSpaceInfo(spaceDate)
                .then(({ hdurl, explanation, title }) => {
                    return CardAxiosService.createSpaceCard(
                        toName,
                        fromName,
                        personalNote,
                        hdurl,
                        sign,
                        spaceDate,
                        explanation,
                        title
                        // toName, fromName, personalNote, img_url, horoscopeSign, date, spaceDate, description, title
                    )
                }, () => this.setState({ error: 'Please provide a valid date' }))
                .then(({ data }) => {
                    this.props.history.push('/spacecard/' + data[0].id)
                })
        }
    }

    render() {
        const { error } = this.state;

        return (
            <form className='needs-validation' onSubmit={this.handleSubmit}>
                <div className="col-4">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">To</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">To:</div>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange} name='toName' id="inlineFormInputGroup" placeholder="Ya boo's name..." />
                    </div>
                </div>
                <div className="col-4">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">From:</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">From:</div>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange} name='fromName' id="inlineFormInputGroup" placeholder="(Optional) Your name..." />
                    </div>
                </div>
                <div className='ml-3'>
                    <label>Choose your space fate...</label>
                    <input type="date" className='ml-3 mb-2' onChange={this.handleChange} name="spaceDate" />
                    {error ? <h2 className='ml-2'>{error}</h2> : null}
                </div>
                <textarea className="form-control ml-3 col-4" name='personalNote' id="exampleFormControlTextarea1" rows="2"></textarea>
                <button type="submit" className="btn btn-primary ml-3 my-2">Submit</button>
            </form>
        )
    }
}

export default withRouter(MessageInfo);