import React, { Component } from 'react';
import axios from 'axios';

class Creature extends Component {
    constructor() {
        super();
        this.state = {
            creature: {
                pets: []
            },
        }
    }

    componentWillMount() {
        const creatureId = this.props.match.params.id;
        this._getCreatureAndPets(creatureId);
    }

    _getCreatureAndPets = async (creatureId) => {
            const res = await axios.get(`/api/creatures/${creatureId}`)
            this.setState({creature: res.data })
            return res.data
    }

    render() {
        return (
            <div>
                <h1>{this.state.creature.name}</h1>
                <p>{this.state.creature.description}</p>
            </div>
        );
    }
}


export default Creature;