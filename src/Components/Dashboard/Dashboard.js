// PACKAGES
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// CHILD-COMPONENTS
import House from './../House/House';

class Dashboard extends Component {
    constructor (){
        super()
        this.state = {
            houses: [],
        };

        this.getAllHouses = this.getAllHouses.bind(this);
    }

    componentDidMount() {
        this.getAllHouses();
    }
    
    getAllHouses() {
        axios.get('/api/houses')
            .then((res) => {
                this.setState({houses: res.data})
            })
            .catch((err) => {console.log(err)});
    }

    handleDeleteHouse(id) {
        axios.delete(`/api/deletehouse/${id}`)
            .then(() => {
                this.getAllHouses();
            })
            .catch((err) => {console.log(err)})
    }

    render(){
        const {houses} = this.state;
        const mappedHouses = houses.map((house, index) => (
            <House key={index} house={house} handleDeleteHouse={() => this.handleDeleteHouse(house.id)} />
        ))
        return(
            <div>
                Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
        )
    }
}

export default Dashboard;