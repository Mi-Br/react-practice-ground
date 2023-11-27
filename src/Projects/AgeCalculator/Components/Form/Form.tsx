import styled from "styled-components";
import InputField from "../Input/Input";
import {useEffect, useState} from "react";


const Form = () => {
    const [day, setDay] = useState<string>('')

    const [month, setMonth] = useState<string>('')

    const [year, setYear] = useState<string>('')

function onChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target
    switch(name){
        case 'day':
            setDay(value.toUpperCase())
            break;
        case 'month':
            setMonth(value.toUpperCase())
            break;
        case 'year':
            setYear(value.toUpperCase())
            break;
    }
}
type ErrorMessage = [boolean, string]

function validateDay(day: string):ErrorMessage{
    const dayInt = parseInt(day)
    if(dayInt>31 || dayInt<1){
        return [false, 'Must be valid day']
    }
    return [true, '']
}

useEffect(()=>{
    const [isValid, msg] = validateDay(day)
    if (!isValid){

    }
 }, [day, month, year])
return(
    <>
    <FieldWrapper>
        <InputField name='day' err={''} value={day} onChange={onChange}></InputField>
        <InputField name='month' err={''} value={month} onChange={onChange}></InputField>
        <InputField name='year' err={''} value={year} onChange={onChange}></InputField>
    </FieldWrapper>
    </>
)
}

export default Form;

const FieldWrapper = styled.div`
    flex-direction: row;
    gap: 32px;
    display: flex;
`
