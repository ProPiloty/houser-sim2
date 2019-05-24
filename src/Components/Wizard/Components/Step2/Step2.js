import React, {Component} from 'react';
import axios from 'axios';

class Step2 extends Component {
    constructor (){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        };
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleAddHouse = (e) => {
        e.preventDefault();
        const {name, address, city, state, zip} = this.state;
        axios.post('/api/houses', {name, address, city, state, zip})
            .then(this.props.history.push('/'))
            .catch((err) => {console.log(err)});
    }

    render(){
        const {name, address, city, state, zip} = this.state;
        return(
            <div>
                <form>
                    <input name='name' value={name} placeholder='Name' onChange={this.handleInputChange} />
                    <input name='address' value={address} placeholder='Address' onChange={this.handleInputChange} />
                    <input name='city' value={city} placeholder='City' onChange={this.handleInputChange} />
                    <input name='state' value={state} placeholder='State' onChange={this.handleInputChange} />
                    <input name='zip' value={zip} placeholder='Zip Code' onChange={this.handleInputChange} />
                    <button onClick={this.handleAddHouse}>Complete</button>
                </form>
            </div>
        )
    }
}

export default Step2;