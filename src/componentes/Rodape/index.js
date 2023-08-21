import React from "react";
import './estilo.css';

export default function Rodape(){
    return(
        <footer>
            <div className="contatos">
                <div>
                    <img src="assets/logo.png" alt="imagem logo"/>
                </div>
                <div>
                    <h2>ENDEREÇO</h2>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h2>CONTATO</h2>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h2>HORÁRIOS</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="dv">
                <p>
                    Gelateria. Orgulhosamente desenvolvido por Rafael Nunes
                </p>
            </div>
        </footer>
    );
}