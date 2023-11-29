import styled from "styled-components";
import InputField from "../Input/Input";
import {useEffect, useState} from "react";

const Form = () => {
    const [day, setDay] = useState<number | typeof NaN>(NaN)
    const  [dayError, setDayError] = useState<string>('')
    const [month, setMonth] = useState<number |typeof NaN>(NaN)
    const  [monthError, setMonthError] = useState<string>('')
    const [year, setYear] = useState<number | typeof NaN>(NaN)
    const  [yearError, setYearError] = useState<string>('')

    const [dateErrors, setdateErrors] = useState<string>('')

function onChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target
    const intVal = parseInt(value)
    switch(name){
        case 'day':
            setDay(intVal)
            break;
        case 'month':
            setMonth(intVal)
            break;
        case 'year':
            setYear(intVal)
            break;
    }
}

function validateDay(day: number):Boolean{
     if (isNaN(day)) {
        setDayError('')
        return false
    }
    if(day>31 || day<1 || (month ===2 && day>29)){
        setDayError('Must be a valid day')
        return false
    }
    setDayError('')
    return true
}

function validateMonth(month: number) :Boolean {
      if (isNaN(month)) {
        setMonthError('')
        return false
    }
    if (month > 12 || month < 1) {
        setMonthError('Must be a valid month')
        return false
    }
    return true
}

function validateYear(year: number) : Boolean {
     if (isNaN(year)) {
        setYearError('')
        return false
    }
    // must be in the past
    if (year > new Date().getFullYear()) {
        setYearError('Must be in the past')
        return false
    }
    setYearError('')
    return true
}

function validDate(day: number, month: number, year: number) : Boolean {
    const date =  new Date(year, month, day)
    if (date.toString() === 'Invalid Date') {
        setdateErrors('Must be a valid date')
        return false
    }
    console.log(date.getFullYear(), date.getMonth(), date.getDate())
    console.log(date.getMonth())
    if(date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day){

        setdateErrors('Must be a valid date')
        return false
    }

    setdateErrors('')
    return true
}
useEffect(()=>{
    // console.log('day:', day, 'err:', dayError)
    // console.log('month:', month, 'err:', monthError)
    // console.log('year:', year, 'err:', yearError)

    if (validateDay(day) && validateMonth(month) && validateYear(year)) {
       if(!validDate(day, month, year)) {
            setDayError('must be a valid date')
       } else {
            setDayError('')
       }
    }


 }, [day, month, year])
return(
    <>
    <FieldWrapper>
        <InputField name='day' err={dayError} value={day} onChange={onChange}></InputField>
        <InputField name='month' err={monthError} value={month} onChange={onChange}></InputField>
        <InputField name='year' err={yearError} value={year} onChange={onChange}></InputField>
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
