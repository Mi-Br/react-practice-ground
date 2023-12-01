import React from "react"
import styled from "styled-components"
interface ArrowProps{
    active?: boolean
}

const Arrow:React.FC<ArrowProps> = ()=>{
    return(
        <Line>
            <button type="submit">
                <Svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none"  strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
                </Svg>
            </button>
        </Line>
    )
}

const Svg = styled.div`
    stroke: var(--clr-white);
    display: inline-block;
    background-color: var(--clr-purple);
    border-radius: 50%;
    padding: 26px;
    margin: 0;

`
const Line = styled.div`
    isolation: isolate;
    position: relative;
    width: 100%;
    line-height: 0;
    display: flex;
    justify-content: flex-end;
    :hover{
        background-color: var(--clr-off-black);
        cursor: pointer;
    }
    ::before{
        content: '';
        position: absolute;
        top:50%;
        left:0;
        width:100%;
        height: 1px;
        background-color: var(--clr-smokey-grey);
        z-index: -1;
    }
    button {
        background-color: transparent;
        border: none;
    }

`
export default Arrow
