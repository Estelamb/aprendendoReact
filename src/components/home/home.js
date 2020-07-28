// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Portfolio from '../portfolio/portfolio'
// Importando o avatar da empresa 1
import imagem1 from '../../images/darkWillow.jpg';
// Importando o avatar da empresa 1
import imagem2 from '../../images/iconeEstela.jpg';
// Importando o avatar da empresa 1
import imagem3 from '../../images/sailorMars.jpg';

const Home = () => (
    <div class="container">
        <Row>
            <Col m={3} s={12}>
                <UserProfile />
            </Col>

            <Col m={9} s={12}>
                <h4 className="subtitle">About Me</h4>
                <Card>
                <div>
                    <p><b>Muito Prazer!</b></p>
                    <p>Eu sou a Estela Miranda Batista! Sou estudante de Ciência da Computação na UFV, Campus Florestal.</p>
                    <br/>
                    <p>Até o momento, durante as disciplinas do curso, eu desenvolvi conhecimento nas linguagens Python,
                    C, Verilog, Java, C++ e MySQL, e de forma autodidata tenho buscado aprender sobre HTML, CSS, Javascript e Ruby.
                    </p>
                    <p>
                    Além das disciplinas cursadas, eu participo de um projeto chamado
                    <a href="http://minascoders.caf.ufv.br/" target="_blank">'MinasCoders'</a>, e atualmente,
                    além de participar, eu me tornei a treinadora das equipes de maratona de programação.
                    </p>
                </div>
                </Card>
                <br/>
                <br/> 
            </Col>

            <div id="portfolio"></div>
            <h4 className="subtitle">Portfolio</h4>

            <Col m={4} s={12}>
                <Portfolio avatar={imagem1} />
            </Col>

            <Col m={4} s={12}>
                <Portfolio avatar={imagem2} />
            </Col>

            <Col m={4} s={12}>
                <Portfolio avatar={imagem3} />
            </Col>
        </Row>
    </div>
);

export default Home;