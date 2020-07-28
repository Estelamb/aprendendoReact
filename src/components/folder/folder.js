// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Footer, Col } from 'react-materialize';

const FooterSite = () => (
    <footer>
        <Col m={4} s={12}>

        </Col>

        <Col m={8} s={12}>
            <div class="contato">
                <ul>
                <a href="https://www.facebook.com/estela.mirandabatista">
                    <i class="fab fa-facebook"></i>
                </a>

                <a target="_blank" href="https://www.instagram.com/estela_mirandab/">
                    <i class="fab fa-instagram"></i>
                </a>

                <a target="_blank" href="https://github.com/Estelamb">
                    <i class="fab fa-github"></i>
                </a>

                <a target="_blank" href="https://br.linkedin.com/in/estela-miranda-batista-977664174">
                    <i class="fab fa-linkedin"></i>
                </a>
                </ul>
            </div>
        </Col>

        <div class="center">
        <p>Feito por Estela ♡</p>
        </div>
    </footer>
);

export default FooterSite;