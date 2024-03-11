import React from "react";
import * as S from "./HeaderStyle.jsx"
import Cn from './imagensHeader/cartoon.png'
import Jogo from './imagensHeader/jogo.png'
import Programacao from './imagensHeader/programacao.png'


function Header() {
    return (
        <S.StyleHeader>
            <img src={Cn} alt="" />


            <S.Section>
                <S.Div>
                    <S.Img src={Jogo} alt="" />
                    <h2>JOGOS</h2>
                </S.Div>

                <S.Div>
                    <S.Img src={Programacao} alt="" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>

            </S.Section>
        
        </S.StyleHeader>
    )
}

export default Header