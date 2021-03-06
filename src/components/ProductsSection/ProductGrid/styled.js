import styled from "styled-components";

const GridProductContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
	grid-auto-rows: 280px;
	place-items: center;

	width: 100%;
	min-height: ${({ productAmount }) => {
		if (productAmount > 0) return "500px";
		if (productAmount > 4) return "1000px";
		if (productAmount > 8) return "1500px";
	}};

	margin-top: 60px;
	margin-bottom: 20px;

	@media (min-width: 480px) {
		grid-template-columns: repeat(2, minmax(235px, 1fr));
		grid-auto-rows: 340px;

		width: 90%;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		grid-auto-rows: unset;
		grid-row-gap: 30px;
		grid-column-gap: 35px;

		width: 90%;
	}

	@media (min-width: 1024px) {
		width: 90%;
	}

	@media (min-width: 1440px) {
		width: 80%;
	}

	@media (min-width: 1920px) {
		width: 70%;
	}

	/* CARDS MEDIA QUERIES */
	@media (max-width: 768px) {
		.card {
			transform: scale(0.8);
		}
	}

	@media (max-width: 480px) {
		.card {
			transform: scale(0.69);
		}
	}
`;

export { GridProductContainer };
