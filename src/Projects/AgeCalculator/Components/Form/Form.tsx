import styled from "styled-components";
import InputField from "../Input/Input";
import Arrow from "../Arrow/Arrow";
import { useState } from "react";
import Span from "./Span";
import { diffDaysMonthsYears } from "../../Utils/utils";

const Form = () => {
	const [day, setDay] = useState<number | typeof NaN>(NaN);
	const [dayError, setDayError] = useState<string>("");
	const [month, setMonth] = useState<number | typeof NaN>(NaN);
	const [monthError, setMonthError] = useState<string>("");
	const [year, setYear] = useState<number | typeof NaN>(NaN);
	const [yearError, setYearError] = useState<string>("");
	const [dateHasErrors, setDateHasErrors] = useState<boolean>(false);
	const [ageCount, setAgeCount] = useState<AgeCount>({
		days: NaN,
		months: NaN,
		years: NaN,
	});

	type AgeCount = {
		days: number;
		months: number;
		years: number;
	};

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		const intVal = parseInt(value);
		switch (name) {
			case "day":
				setDay(intVal);
				break;
			case "month":
				setMonth(intVal);
				break;
			case "year":
				setYear(intVal);
				break;
		}
	}

	function validateDay(day: number): Boolean {
		if (isNaN(day)) {
			setDayError("");
			return false;
		}
		if (day > 31 || day < 1 || (month === 2 && day > 29)) {
			setDayError("Must be a valid day");
			return false;
		}
		setDayError("");
		return true;
	}

	function validateMonth(month: number): Boolean {
		if (isNaN(month)) {
			setMonthError("");
			return false;
		}
		if (month > 12 || month < 0) {
			setMonthError("Must be a valid month");
			return false;
		}
		setMonthError("");
		return true;
	}

	function validateYear(year: number): Boolean {
		if (isNaN(year)) {
			setYearError("");
			return false;
		}
		// must be in the past
		if (year > new Date().getFullYear()) {
			setYearError("Must be in the past");
			return false;
		}
		setYearError("");
		return true;
	}

	function validDate(day: number, month: number, year: number): Boolean {
		// Date object month starts from 0 - 11
		console.log(`valida date input date: ${year}-${month}-${day}`);
		const date = new Date(year, month - 1, day);
		if (date.toString() === "Invalid Date") {
			console.log("invalid date");
			setDateHasErrors(true);
			return false;
		}
		console.log(
			`date object:`,
			date.getFullYear(),
			date.getMonth(),
			date.getDate()
		);
		if (
			date.getFullYear() !== year ||
			date.getMonth() !== month - 1 ||
			date.getDate() !== day
		) {
			console.log("full year not matching date");
			setDateHasErrors(true);
			return false;
		}
		setDateHasErrors(false);
		return true;
	}

	function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		//check errors
		const thereAreErrors =
			!validateDay(day) ||
			!validateMonth(month) ||
			!validateYear(year) ||
			!validDate(day, month, year);
		if (thereAreErrors) {
			setDayError("must be a valid date");
			setDateHasErrors(thereAreErrors);
		} else {
			setDayError("");
			setDateHasErrors(true);
		}
		// update count if no errors
		if (!thereAreErrors) {
			const inputDate = new Date(year, month, day);
			const [days, months, years] = diffDaysMonthsYears(inputDate);
			setAgeCount({ days, months, years });
		} else {
			setAgeCount({
				days: NaN,
				months: NaN,
				years: NaN,
			});
		}
	}

	return (
		<>
			<form onSubmit={onFormSubmit}>
				<FieldWrapper>
					<InputField
						name="day"
						err={dayError}
						value={day}
						onChange={onChange}
					></InputField>
					<InputField
						name="month"
						err={monthError}
						value={month}
						onChange={onChange}
					></InputField>
					<InputField
						name="year"
						err={yearError}
						value={year}
						onChange={onChange}
					></InputField>
				</FieldWrapper>
				<Arrow></Arrow>
			</form>
			{<Span name="year" value={ageCount["years"]}></Span>}
			{<Span name="month" value={ageCount["months"]}></Span>}
			{<Span name="day" value={ageCount["days"]}></Span>}
		</>
	);
};

export default Form;

const FieldWrapper = styled.div`
	flex-direction: row;
	gap: 32px;
	display: flex;
	@media (max-width: 768px) {
		gap: 16px;
	}
`;
