import styled from "styled-components"
interface ArrowProps{
    active?: boolean
}

const Arrow:React.FC<ArrowProps> = ({active=true})=>{
    return(
        <Line>
            <Svg active={active}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none"  strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
            </Svg>
        </Line>
    )
}

const Svg = styled.div<{active: boolean}>`
    stroke: var(--clr-off-white);
    display: inline-block;
    background-color: ${props => props.active ? 'var(--clr-purple)' : 'var(--clr-off-black)'};
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
`


export default Arrow
