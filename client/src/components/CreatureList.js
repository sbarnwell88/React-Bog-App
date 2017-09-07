import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreatureList extends Component {
    constructor() {
        super();
        this.state = {
            error: '',
            creatures: []
        }
    }
    componentWillMount() {
        this._getCreatures();
    }

    _getCreatures = async () => {
        try {
            const response = await axios.get('/api/creatures');
            await this.setState({creatures: response.data})
            return response.data
        }
        catch (error) {
            await this.setState({ error: error.message})
            return error.message
        }
    }

    render() {
        if(this.state.error) {
            return <div>you must login</div>
        }
        return (
            <div>
                <h1>All Creatures</h1>
                {this.state.creatures.map((creature) => (
                    <div>
                        <Link to={`/creatures/${creature.id}`} key={creature.id} >{creature.name}</Link>
                    </div>
                )
                )}
            </div>
        );
    }
}

export default CreatureList;