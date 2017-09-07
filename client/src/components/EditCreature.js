import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class EditCreature extends Component {
    constructor() {
        super();
        this.state = {
            creature: {
                name: '',
                description: ''
            },
            redirect: false
        }
    }

    componentWillMount() {
        const creatureId = this.props.match.params.id;
        this._getCreatures(creatureId);
    }

    _getCreatures = async (creatureId) => {
        try {
            const res = await axios.get(`/api/creatures/${creatureId}`);
            await this.setState({
                creature: {
                    name: res.data.name,
                    description: res.data.description
            }})
        }
        catch (error) {
            console.log(error)
        }
    }

    _editCreature = async (e) => {
        e.preventDefault();
        const payload = this.state.creature;
        const creatureId = this.props.match.params.id;
        try {
            const res = await axios.patch(`/api/creatures/${creatureId}`, payload);
            this.setState({ redirect: true})
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.creature};
        newState[e.target.name] = e.target.value;
        this.setState({creature: newState});
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={`/creatures/${this.props.match.params.id}`} />
        }
        return (
            <div>
                <h1>Edit Creature</h1>
                <form>
                    <div>
                        <label htmlFor="name">Creature Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.creature.name} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.creature.description} />
                    </div>

                    <button onClick={this._editCreature}>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditCreature;