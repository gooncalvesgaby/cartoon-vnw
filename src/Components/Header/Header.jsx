import React from "react";
import * as S from "./HeaderStyle.jsx"
import Logo from './imagensHeader/logo.png'
import Jogos from './imagensHeader/controle.png'
import Relogio from './imagensHeader/relogio.png'


function Header() {
    return (
        <S.StyleHeader>
            <img src={Logo} alt="Logo cn" />

            <S.StyleSection>
                <S.StyleDiv>
                    <img src={Jogos} alt="icone controle" />
                    <h2>JOGOS</h2>
                </S.StyleDiv>

                <S.StyleDiv>
                    <img src={Relogio} alt="icone de um relógio" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.StyleDiv>

            </S.StyleSection>
        
        </S.StyleHeader>
    )
}

export default Header