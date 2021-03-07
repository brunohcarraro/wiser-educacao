import styled from 'styled-components';

export default styled.div`
	padding: 0px 120px;
	width: 45%;

	@media(max-width: 1500px){ 
		padding: 0px 90px;

	}

	@media(max-width: 1300px){
		width: 60%;	
	}

	@media(max-width: 768px){ 
		width: 80%;
		margin-left: 10%;
		padding: 0px 0px;
	}
`;