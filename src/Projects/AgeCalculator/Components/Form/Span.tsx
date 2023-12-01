import styled from "styled-components";

type SpanProps = {
	name: "day" | "month" | "year";
	value: number;
};

const Span = ({ name, value }: SpanProps) => {
	const label = {
		day: "days",
		month: "months",
		year: "years",
		empty: "_ _",
	};

	return (
		<>
			<StyledWrapper>
				<StyledValue>{!isNaN(value) ? value : label.empty}{' '}</StyledValue>
                <StyledLabel>{label[name]}</StyledLabel>
			</StyledWrapper>
		</>
	);
};

export default Span;

const StyledWrapper = styled.div``;
const StyledValue = styled.span`
	font-family: Poppins;
	font-size: 104px;
	font-style: italic;
	font-weight: 800;
	line-height: 110%; /* 114.4px */
	letter-spacing: -2.08px;
    color: var(--clr-purple);
`;

const StyledLabel = styled.span`
	font-family: Poppins;
	font-size: 104px;
	font-style: italic;
	font-weight: 800;
	line-height: 110%; /* 114.4px */
	letter-spacing: -2.08px;
`;
