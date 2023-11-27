import {useState, useEffect} from "react"

import styled from "styled-components"

interface InputProps {
    name: string,
    err: string,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface Placeholder {
    [key: string]: string;
}

const placeholder:Placeholder = {
    day: 'DD',
    month: 'MM',
    year: 'YYYY'
}
const InputField:React.FC<InputProps> = ({name, err, value, onChange }) =>{
    const [error, setError] = useState<string>(err)
    const id = crypto.randomUUID()
    const textColor = error.length>0 ? 'var(--light-red)' : 'unset'
    const borderColor = error.length>0 ? 'var(--light-red)' : 'var(--clr-smokey-grey)'
    const stateStyle = {
        '--clr-color': textColor as React.CSSProperties,
        '--clr-border': borderColor as React.CSSProperties,
    } as React.CSSProperties

    useEffect(()=>{
        setError(err)
        console.log(err)
    }, [error])


    return (
        <>
            <InputWrapper style={stateStyle}>
                <Label htmlFor={id}>{name}</Label>
                <Input type="number" placeholder={placeholder[name]} id={id} name = {name} value={value} onChange={onChange}>
                </Input>
                <Note>{error}</Note>
            </InputWrapper>
        </>
        )

}
export default InputField



const InputWrapper = styled.div<{ style?: React.CSSProperties }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
`


const Input = styled.input`
    outline: none;
    /* flex: 1; */
    width: 160px;
    flex-grow: 0;
    /* min-width: 0; */
    padding: 24px 12px;
    font-weight: 700;
    font-size: 32px;
    border-radius: 8px;
    border: 1px solid var(--clr-border);
    /* border: 1px solid var(--clr-color); */
    &:focus{
        border: 1px solid var(--clr-purple);
    }
`

const Label = styled.label`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: var(--clr-color);
`

const Note = styled(Label)`
    font-family: Poppins;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    color: var(--clr-color);
`
