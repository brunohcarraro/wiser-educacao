import styled from 'styled-components';

export default styled.div`
	height: 100vh;
	width: 45%;
	float: left;

	@media(max-width: 1200px){
		width: 50%;	
	}

	@media(max-width: 992px){
		width: 58%;	
	}

	@media(max-width: 768px){
		position: absolute;
		top: 40%;
		width: 80%;
		margin-left: 10%;
		border-radius: 10px;
		background-color: #FAF5FF;
		text-align: center;
		height: 605px;
	}

	@media(max-width: 540px){
		height: 554px;
	}
`;