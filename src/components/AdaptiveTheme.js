import React from 'react';
import Theme from '@quarkly/theme';
import atomize from '@quarkly/atomize';
const Container = atomize.div({
	effects: {
		hover: "-hover"
	}
});
const theme = {
	breakpoints: {
		hdmd: [{
			type: "max-width",
			value: 1250
		}],
		gmd: [{
			type: "max-width",
			value: 992
		}],
		gsm: [{
			type: "max-width",
			value: 479
		}],
		g1300: [{
			type: "max-width",
			value: 1300
		}],
		g700: [{
			type: "max-width",
			value: 700
		}]
	}
};

const AdaptiveTheme = ({
	children,
	...props
}) => <Container {...props}>
	    
	<Theme theme={theme}>
		      
		{children}
		    
	</Theme>
	  
</Container>;

export default atomize(AdaptiveTheme)({
	name: "Adaptive Theme",
	description: "Adaptive Theme",
	propInfo: {}
});