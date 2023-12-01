import styled from "styled-components";
import "../../../public/AgeCalculatorFonts/fonts/fonts.css";
import Form from "./Components/Form/Form";
export default function AgeCalculator() {
	const globalStyles = {
		"--clr-purple": "hsl(259, 100%, 65%)",
		"--light-red": "hsl(0, 100%, 67%)",
		"--clr-white": "hsl(0, 0%, 100%)",
		"--clr-off-white": "hsl(0, 0%, 94%)",
		"--clr-light-grey": "hsl(0, 0%, 86%)",
		"--clr-smokey-grey": "hsl(0, 1%, 44%)",
		"--clr-off-black": "hsl(0, 0%, 8%)",

		fontFamily: "Poppins, sans-serif",
	} as React.CSSProperties;

	return (
		<Container>
			<StyledWrapper style={globalStyles}>
				<Form></Form>
			</StyledWrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	outline: 1px solid red;
	padding: 6px;
`;

const StyledWrapper = styled.div`
	flex: 1;
	max-width: 860px;
	padding: 56px;
	border-radius: 24px 24px 200px 24px;
	border: 1px solid grey;
	h1 {
	}
	@media (max-width: 768px) {
		padding: 24px;
	}
`;
