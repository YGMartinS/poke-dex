import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';
import pokeImg from '../../assets/pokes/bulbasaur.png';
import pokeImg2 from '../../assets/pokes/blastoise.png';

export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <span>Olá, Mestre</span>

                <Link className="button" to="/pokes/new">Novo Pokémon</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Minha Pokédex</h1>

            <ul>
                <li>
                    <img src={pokeImg} alt="Pokémon"/>
                    <strong>Bulbasaur</strong>
                    <div className="description">
                        <strong>Description:</strong>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
                    </div>                    
                </li>            
                <li>
                    <img src={pokeImg2} alt="Pokémon"/>
                    <strong>Blastoise</strong>
                    <div className="description">
                        <strong>Description:</strong>
                        <p>Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.</p>
                    </div>                    
                </li>
                <li>
                    <img src={pokeImg} alt="Pokémon"/>
                    <strong>Bulbasaur</strong>
                    <div className="description">
                        <strong>Description:</strong>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
                    </div>                    
                </li>
                <li>
                    <img src={pokeImg2} alt="Pokémon"/>
                    <strong>Blastoise</strong>
                    <div className="description">
                        <strong>Description:</strong>
                        <p>Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.</p>
                    </div>                    
                </li>
                <li>
                    <img src={pokeImg} alt="Pokémon"/>
                    <strong>Bulbasaur</strong>
                    <div className="description">
                        <strong>Description:</strong>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
                    </div>                    
                </li>
                <li>
                    <img src={pokeImg2} alt="Pokémon"/>
                    <strong>Blastoise</strong>
                    <div className="description">
                        <strong>Description:</strong>
                        <p>Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.</p>
                    </div>                    
                </li>
                <li>
                    <img src={pokeImg} alt="Pokémon"/>
                    <strong>Bulbasaur</strong>
                    <div className="description">
                        <strong>Description:</strong>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
                    </div>                    
                </li>
            </ul>
        </div>
    );
}