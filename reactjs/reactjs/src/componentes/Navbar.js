import React from 'react';
import bannerhero from '../imgs/banner-hero.png';

function Navbar() {
    return (
        <div className="App">
            <header>
                <nav class="menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Sobre nós">Sobre nós</a>
                        </li>
                        <li>
                            <a href="/pacotes">Pacotes</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                        <li>
                            <a href="/galeria">Galeria</a>
                        </li>
                        <li>
                            <a href="/cadastro">Cadastro</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;