import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class NewCreature extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            redirect: false
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    _newCreature = async (e) => {
        e.preventDefault();
        const payload = {
            name: this.state.name,
            description: this.state.description
        }
        const res = await axios.post(`/api/creatures`, payload);
        this.setState({
            name: res.data.name,
            description: res.data.description,
            redirect: true
        })
    }
    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>New Creature</h1>
                <form onSubmit={this._newCreature}>
                    <div>
                        <label htmlFor="name">Creature Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.description} />
                    </div>

                    <button>Create New Creature</button>
                </form>
            </div>
        );
    }
}

export default NewCreature;