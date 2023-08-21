import React from "react";
import './estilo.css';
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

export default function Home(){
    return(
        <div className="home">
            <Topo/>
            <div className="conteudo-principal-home">
                <section className="secao-banner">
                    <h1>SORVETE NATURAL</h1>
                </section>
                <section className="secao-sabores">
                    <div className="img">
                        <img src="assets/banner-sabores.jpg" alt="imagem banner sabores"/>
                    </div>
                    <div className="texto">
                        <h1>NOSSOS SABORES</h1>
                        <small>Novos e Deliciosos!</small>
                        <p>
                            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                    <div className="texto">
                        <h1>NOSSOS EVENTOS</h1>
                        <small>Delicias com sorvete!</small>
                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>
                    <div className="img">
                        <img src="assets/eventos-image.jpg" alt="imagem eventos"/>
                    </div>
                
                    <div className="img">
                        <img src="assets/sobre-image.jpg" alt="imagem sobre"/>
                    </div>
                    <div className="texto">
                        <h1>SOBRE NÓS!</h1>
                        <small>Alegria em cada casquinha!</small>
                        <p>
                            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                        </p>
                    </div>
                </section>
            </div>
            <Rodape/>
        </div>
    );
}