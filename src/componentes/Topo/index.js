import React from "react";
import './estilo.css';
import {Link} from 'react-router-dom';


export default function Topo(){
    return(
        <header>
            <div className="nav-topo">
                <img src="assets/logo.png" alt="imagem logo"/>

                <div className="box-links">
                    <Link className="link" to='/projeto-sorveteria'>Home</Link>
                    <Link className="link" to='/sabores'>Sabores</Link>
                    <Link className="link" to='/sobre'>Sobre</Link>
                </div>
            </div>
        </header>
    );
}
