import React, { Component } from 'react'
import Pokecard from './Pokecard'

export class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
                <p>Total Experience: {this.props.exp} </p>
                <p> {this.props.isWinner ? 'Winner' : 'Loser'} </p>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex
