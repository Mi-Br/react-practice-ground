import styled from "styled-components";
import { useEffect, useState } from "react";

type SpanProps = {
	name: "day" | "month" | "year";
	value: number;
};

const Span = ({ name, value }: SpanProps) => {
	const [animatedValue, setAnimatedValue] = useState<number>(0);

	const label = {
		day: "days",
		month: "months",
		year: "years",
		empty: "_ _",
	};

	useEffect(() => {
		let currentValue = 0;
		const interval = setInterval(() => {
			if (currentValue < value) {
				currentValue++;
				setAnimatedValue(currentValue);
			} else {
				clearInterval(interval);
			}
		}, 30);
		return () => clearInterval(interval);
	}, [value]);

	return (
		<>
			<StyledWrapper>
				<StyledValue>
					{!isNaN(animatedValue) ? animatedValue : label.empty}{" "}
				</StyledValue>
				<StyledLabel>{label[name]}</StyledLabel>
			</StyledWrapper>
		</>
	);
};

export default Span;

const StyledWrapper = styled.div`
	font-family: Poppins;
	font-size: 104px;
	font-style: italic;
	font-weight: 800;
	line-height: 110%; /* 114.4px */
	letter-spacing: -2.08px;

	@media (max-width: 768px) {
		font-size: 56px;
		font-style: italic;
		font-weight: 800;
		line-height: 110%; /* 61.6px */
		letter-spacing: -1.12px;
	}
`;
const StyledValue = styled.span`
	color: var(--clr-purple);
`;
const StyledLabel = styled.span``;
