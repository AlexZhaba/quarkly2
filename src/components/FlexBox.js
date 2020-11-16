import React from 'react';
import atomize from '@quarkly/atomize';
const Container = atomize.div({});

const FlexBox = ({
	children,
	...props
}) => <Container
	{...props}
	d="flex" //position

	fxd={props.default_FXD}
	ai={props.default_AI}
	jc={props.default_JC}
	gmd-fxd={props.md_FXD}
	gmd-ai={props.md_AI}
	gmd-jc={props.md_JC}
	g1300-fxd={props.g1300_FXD}
	g1300-ai={props.g1300_AI}
	g1300-jc={props.g1300_JC}
	g700-fxd={props.g700_FXD}
	g700-ai={props.g700_AI}
	g700-jc={props.g700_JC}
	gsm-fxd={props.sm_FXD}
	gsm-ai={props.sm_AI}
	gsm-jc={props.sm_JC} //margin

	ml={props.def_mar_left}
	mr={props.def_mar_right}
	mb={props.def_mar_bot}
	mt={props.def_mar_top}
	gmd-ml={props.md_mar_left}
	gmd-mr={props.md_mar_right}
	gmd-mb={props.md_mar_bot}
	gmd-mt={props.md_mar_top}
	gsm-ml={props.sm_mar_left}
	gsm-mr={props.sm_mar_right}
	gsm-mb={props.sm_mar_bot}
	gsm-mt={props.sm_mar_top} //size

	w={props.default_width}
	h={props.default_height}
	g1300-w={props.g1300_width}
	g1300-h={props.g1300_height}
	gmd-w={props.md_width}
	gmd-h={props.md_height}
	g700-w={props.g700_width}
	g700-h={props.g700_height}
	gsm-w={props.sm_width}
	gsm-h={props.sm_height}
>
	    
	{children}
	  
</Container>;

export default atomize(FlexBox)({
	name: "FlexBox",
	description: {
		en: "FlexBox"
	},
	propInfo: {
		default_FXD: {
			control: "input",
			category: "DEFAULT_POSITION"
		},
		default_AI: {
			control: "input",
			category: "DEFAULT_POSITION"
		},
		default_JC: {
			control: "input",
			category: "DEFAULT_POSITION"
		},
		g1300_FXD: {
			control: "input",
			category: "1300PX_POSITION"
		},
		g1300_AI: {
			control: "input",
			category: "1300PX_POSITION"
		},
		g1300_JC: {
			control: "input",
			category: "1300PX_POSITION"
		},
		md_FXD: {
			control: "input",
			category: "MEDIUM_POSITION"
		},
		md_AI: {
			control: "input",
			category: "MEDIUM_POSITION"
		},
		md_JC: {
			control: "input",
			category: "MEDIUM_POSITION"
		},
		g700_FXD: {
			control: "input",
			category: "700PX_POSITION"
		},
		g700_AI: {
			control: "input",
			category: "700PX_POSITION"
		},
		g700_JC: {
			control: "input",
			category: "700PX_POSITION"
		},
		sm_FXD: {
			control: "input",
			category: "SMALL_POSITION"
		},
		sm_AI: {
			control: "input",
			category: "SMALL_POSITION"
		},
		sm_JC: {
			control: "input",
			category: "SMALL_POSITION"
		},
		def_mar_left: {
			control: "input",
			category: "DEFAULT_MARGIN"
		},
		def_mar_right: {
			control: "input",
			category: "DEFAULT_MARGIN"
		},
		def_mar_top: {
			control: "input",
			category: "DEFAULT_MARGIN"
		},
		def_mar_bot: {
			control: "input",
			category: "DEFAULT_MARGIN"
		},
		md_mar_left: {
			control: "input",
			category: "MEDIUM_MARGIN"
		},
		md_mar_right: {
			control: "input",
			category: "MEDIUM_MARGIN"
		},
		md_mar_top: {
			control: "input",
			category: "MEDIUM_MARGIN"
		},
		md_mar_bot: {
			control: "input",
			category: "MEDIUM_MARGIN"
		},
		sm_mar_left: {
			control: "input",
			category: "SMALL_MARGIN"
		},
		sm_mar_right: {
			control: "input",
			category: "SMALL_MARGIN"
		},
		sm_mar_top: {
			control: "input",
			category: "SMALL_MARGIN"
		},
		sm_mar_bot: {
			control: "input",
			category: "SMALL_MARGIN"
		},
		default_width: {
			control: "input",
			category: "DEFAULT_SIZE"
		},
		default_height: {
			control: "input",
			category: "DEFAULT_SIZE"
		},
		g1300_width: {
			control: "input",
			category: "1300PX_SIZE"
		},
		g1300_height: {
			control: "input",
			category: "1300PX_SIZE"
		},
		md_width: {
			control: "input",
			category: "MEDIUM_SIZE"
		},
		md_height: {
			control: "input",
			category: "MEDIUM_SIZE"
		},
		g700_width: {
			control: "input",
			category: "700PX_SIZE"
		},
		g700_height: {
			control: "input",
			category: "700PX_SIZE"
		},
		sm_width: {
			control: "input",
			category: "SMALL_SIZE"
		},
		sm_height: {
			control: "input",
			category: "SMALL_SIZE"
		}
	}
});