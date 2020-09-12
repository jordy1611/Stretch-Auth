import React, { Component } from 'react';
import PokeForm from '../PokeForm/PokeForm'
import PokeCard from '../PokeCard/PokeCard'
import { Link } from 'react-router-dom'
import './FormContainer.css'


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      slot1: {},
      slot2: {},
      slot3: {},
      slot4: {},
      slot5: {},
      slot6: {}
    }

    this.showPokemon = this.showPokemon.bind(this);
  }

  showPokemon(selectedPokemon, pokeName, slot) {
    const foundPokemon = this.props.allPokemon.find(pokemon => {
      return pokemon.name === selectedPokemon.toLowerCase() || pokemon.id === Number(selectedPokemon)
    })
    console.log(foundPokemon)
    if (foundPokemon) {
      const caughtPokemon = {pokemon: foundPokemon.name, sprite: foundPokemon.sprite, name: (pokeName !== '') ? pokeName : foundPokemon.name.toUpperCase()};
      this.props.savePokemonToUser(caughtPokemon, slot);
      this.setState({[slot]: caughtPokemon});
    }
  }

  showPokeSprite(selectedPokemon, pokeName, slot) {
    const foundPokemon = this.props.allPokemon.find(pokemon => {
      return pokemon.name === selectedPokemon.toLowerCase() || pokemon.id === Number(selectedPokemon)
    })
  }

  render() {
    return (
      <section className='form-container'>
        {(this.state.slot1.pokemon &&
          <div className='poke-sprite-div'>
          <p className='poke-sprite-name'>{this.state.slot1.name}</p>
          <img className='poke-sprite' src={this.state.slot1.sprite} alt={`${this.state.slot1.pokemon} sprite`}/>
          <p className='release-sprite-text'>Click To Release</p>
          </div>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot1"}/>
        }
        {(this.state.slot2.pokemon &&
          <div className='poke-sprite-div'>
          <img className='poke-sprite' src={this.state.slot2.sprite} alt={`${this.state.slot2.pokemon} sprite`}/>
          <p>{this.state.slot2.name}</p>
          <p>Click To Release</p>
          </div>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot2"}/>
        }
        {(this.state.slot3.pokemon &&
          <div className='poke-sprite-div'>
          <img className='poke-sprite' src={this.state.slot3.sprite} alt={`${this.state.slot3.pokemon} sprite`}/>
          <p>{this.state.slot3.name}</p>
          <p>Click To Release</p>
          </div>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot3"}/>
        }
        {(this.state.slot4.pokemon &&
          <div className='poke-sprite-div'>
          <img className='poke-sprite' src={this.state.slot4.sprite} alt={`${this.state.slot4.pokemon} sprite`}/>
          <p>{this.state.slot4.name}</p>
          <p>Click To Release</p>
          </div>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot4"}/>
        }
        {(this.state.slot5.pokemon &&
          <div className='poke-sprite-div'>
          <img className='poke-sprite' src={this.state.slot5.sprite} alt={`${this.state.slot5.pokemon} sprite`}/>
          <p>{this.state.slot5.name}</p>
          <p>Click To Release</p>
          </div>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot5"}/>
        }
        {(this.state.slot6.pokemon &&
          <div className='poke-sprite-div'>
          <img className='poke-sprite' src={this.state.slot6.sprite} alt={`${this.state.slot6.pokemon} sprite`}/>
          <p>{this.state.slot6.name}</p>
          <p>Click To Release</p>
          </div>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot6"}/>
        }
      </section>
    )
  }
}
export default FormContainer

// {(this.state.slot1.pokemon &&
//   <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot1"}/>
// ) ||
//
// }
