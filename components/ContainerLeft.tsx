import styled from 'styled-components';


export default styled.div`
	height: 100vh;
	background: url(/static/images/background.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 55%;
	float: left;

	@media(max-width: 1400px){

		width: 50%;

	}

	@media(max-width: 992px){

		width: 40%;
	}

	@media(max-width: 768px){ 

		width: 100%;
	}
`;