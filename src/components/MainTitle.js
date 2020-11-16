import React from 'react';
import atomize from "@quarkly/atomize";
import { Text, Box } from '@quarkly/widgets';
import TextLoopReact from 'react-text-loop';
const Container = atomize.div({});

const TextLoop = ({
	text
}) => <Text c="#02E4C0" fz="80px" g700-fz="54px">
	    
	{text}
	  
</Text>;

const MainTitle = props => <Container {...props} w="100%" mt="100px">
	    
	<Text
		c="#FFF"
		fz="80px"
		w="100%"
		d="flex"
		g700-fz="54px"
		jc="center"
	>
		Work
	</Text>
	    
	<Box w="100%" d="flex" jc="center" mt="-30px">
		      
		<TextLoopReact>
			        
			<TextLoop text="fast" />
			      
        
			<TextLoop text="smart" />
			      
        
			<TextLoop text="effectively" />
			      
        
			<TextLoop text="on&nbsp;the&nbsp;team" />
			      
        
			<TextLoop text="independently" />
			      
      
		</TextLoopReact>
		    
	</Box>
	  
</Container>;

export default atomize(MainTitle)({
	name: "MainTitle",
	effects: {
		hover: ":hover"
	},
	description: {
		en: "MainTitle — my awesome component"
	},
	propInfo: {}
});