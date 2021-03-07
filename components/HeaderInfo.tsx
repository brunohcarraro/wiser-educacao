import styled from 'styled-components';

export default styled.div`
	padding: 100px 45% 60px 120px;

	@media(max-width: 1500px){ 
		padding: 100px 36% 60px 90px;

	}

	@media(max-width: 1200px){
		padding: 60px 28% 60px 90px;

	}

	@media(max-width: 768px){ 

		padding: 60px 100px;
	}

	@media(max-width: 540px){
		padding: 60px 50px;

	}
`;