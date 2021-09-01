import React, { Component } from 'react'
import Pokedex from './Pokedex'

export class Pokegame extends Component {
    render() {
        return (
            <div>
                <h1>Pokegame</h1>
                <Pokedex/>
            </div>
        )
    }
}

export default Pokegame
