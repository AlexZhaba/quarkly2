import React from 'react';
import atomize from '@quarkly/atomize';
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(180deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;
const Container = styled.div`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
`;
let Con = atomize.div({});

const Rotate = ({
	children,
	...props
}) => <Container {...props}>
	    
	<Con g700-w="95px" g700-h="95px">
		      
		{children}
		    
	</Con>
	  
</Container>;

export default atomize(Rotate)({
	name: "Rotate Animation",
	description: {
		en: "Rotate Animation"
	},
	propInfo: {}
});