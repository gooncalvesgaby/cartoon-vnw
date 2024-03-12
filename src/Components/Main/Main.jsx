import React, { useState } from "react"

import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"

import Gumball from "./ImagensMain/gumball.png"
import Meninas from "./ImagensMain/meninas.png"
import TomJerry from "./ImagensMain/tomejerry.png"

import * as S from "./MainStyle"

import Programacao from "../Programacao/Programacao.jsx"


function Main() {


    const [galeria, setGaleria] = useState([
        Gumball, Meninas, TomJerry
    ])

    return (
        <main>
        <S.MainStyle>
            <S.StyledSection>
                <img src={Scooby} alt="Scooby" />
                <img src={Ben10} alt="Ben10" />
                <img src={Looney} alt="Looney" />
            </S.StyledSection>        

            <S.StyledSection2>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}

            </S.StyledSection2>

             <Programacao /> 
        </S.MainStyle>

        </main>
    )
}

export default Main