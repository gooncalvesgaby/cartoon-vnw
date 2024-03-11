import React from "react";
import * as S from "./MainStyle"
import Scooby from "./imagensMain/scooby.png"
import Ben10 from "./imagensMain/ben.png"
import Looney from "./imagensMain/looney.png"




function Main() {
    return(
        <main>
            <S.StyledSection>
                <img src={Scooby} alt="" />
                <img src={Ben10} alt="" />
                <img src={Looney} alt="" />    
            </S.StyledSection>

        </main>
    )

}

export default Main