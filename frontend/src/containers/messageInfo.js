import React from 'react';
import NasaAxiosService from '../services/axios/nasa';

export default class MessageInfo extends React.Component {
    render() {
        return (
            <form>
                <div class="col-auto">
                    <label class="sr-only" for="inlineFormInputGroup">To</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">To:</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Ya boo's name..." />
                    </div>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="inlineFormInputGroup">From:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">From:</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="(Optional) Your name..." />
                    </div>
                </div>
                <input type="date" name="bday" />
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                <button type="submit" class="btn btn-primary my-2">Submit</button>
            </form>
        )
    }
}