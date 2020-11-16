import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text } from '@quarkly/widgets';
const Container = atomize.div({});

const BurgerMenu = ({
	isOpen
}) => <Container
	position="fixed"
	top="88px"
	left="0px"
	w={isOpen ? "100%" : "0px"}
	op={isOpen ? "1" : "0"}
	z="10"
	h="calc(100vh - 88px)"
	bgc="#181818"
	d="flex"
	c="#FFF"
	ai="center"
	fxd="column"
	fz="30px"
	ov="hidden"
	trs=".3s all ease-in-out"
>
	    
	<Text mt="60px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		Home
	</Text>
	    
	<Text mt="60px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		Product
	</Text>
	    
	<Text mt="60px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		About
	</Text>
	    
	<Text mt="60px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		Contact
	</Text>
	    
	<Box
		p="20px 40px"
		bd="2px solid #FFF"
		mt="60px"
		cur="pointer"
		hover-transform="translateY(-5px)"
		trs=".3s all"
	>
		      Learn More
    
	</Box>
	  
</Container>;

const styleBurger = {
	d: "flex",
	fxd: "column",
	ai: "flex-end"
};

const Burger = ({
	children,
	...props
}) => {
	let [isOpen, setIsOpen] = useState(false);
	return <Container {...props} {...styleBurger} overflow={isOpen ? "" : "hidden"}>
		      
		<BurgerMenu isOpen={isOpen} />
		      
		<Box
			d="flex"
			fxd="column"
			ai="flex-end"
			cur="pointer"
			onClick={() => setIsOpen(!isOpen)}
		>
			        
			<Container
				h="5px"
				w="44px"
				bgc="#FFF"
				mb="5px"
				trs=".3s all"
				trf={isOpen ? "rotate(-45deg) translate(-6px, 11px)" : ""}
			/>
			        
			<Container
				h="5px"
				w="34px"
				bgc="#FFF"
				mb="5px"
				trs=".3s all"
				opacity={isOpen ? "0" : "1"}
			/>
			        
			<Container
				h="5px"
				w={isOpen ? "44px" : "22px"}
				bgc="#FFF"
				mb="5px"
				trs=".3s all"
				trf={isOpen ? "rotate(45deg) translate(-2px, -8px)" : ""}
			/>
			      
		</Box>
		    
	</Container>;
};

export default atomize(Burger)({
	name: "Burger",
	description: {
		en: "burger"
	},
	propInfo: {}
});