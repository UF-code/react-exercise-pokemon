import React, { Component } from 'react'
import Pokecard from './Pokecard'

export class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        )
    }
}

export default Pokedex
