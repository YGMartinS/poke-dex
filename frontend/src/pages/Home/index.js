import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.png';
import ashImg from '../../assets/ash.png';

export default function Home() {
    return (
        <div className="home-container">
            <header>
                <img src={logoImg} alt="Logo"/>
            </header>
                
            <section className="central-container">
                <img src={ashImg} alt="Ash"/>

                <section className="form">
                    <form>
                        <h1>Bem-Vindo(a)</h1>
                        <input placeholder="Sua ID"/>
                        <input type="password" placeholder="Senha"/>
                        <button className="button" type="submit">Entre</button>
                    </form>                    
                </section>
            </section>
        </div>
    );
} 