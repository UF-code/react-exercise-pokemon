import React, { Component } from 'react'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

export class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        console.log(imgSrc)
        return (
            <div className='Pokecard'>
                <h1> {this.props.name} </h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className='Type'> Type: {this.props.type} </div>
                <div className='Exp'> Exp: {this.props.exp} </div>
            </div>
        )
    }
}

export default Pokecard
