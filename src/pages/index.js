import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, GoogleMap } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.AdaptiveTheme>
			<Box background="#181818" font="16px Inter">
				<Components.FlexBox
					width="100%"
					default_FXD="row"
					md_JC="space-between"
					default_height="114px"
					default_AI="center"
					default_JC="space-evenly"
					md_height="88px"
				>
					<Components.FlexBox md_mar_left="30px">
						<Image width="189px" height="59px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/logo%20dark%20(2).svg?v=2020-11-16T09:36:51.458Z" />
					</Components.FlexBox>
					<Components.FlexBox md_width="0px" md_height="0px" overflow-x="hidden" overflow-y="hidden">
						<Box display="flex" justify-content="center">
							<Link
								href="#"
								display="flex"
								align-items="center"
								text-decoration-line="initial"
								color="#ffffff"
								margin="0px 25px 0px 25px"
								hover-color="#02E4C0"
								hover-transition="all .3s ease 0s"
							>
								Home
							</Link>
							<Link
								href="#"
								display="flex"
								align-items="center"
								text-decoration-line="initial"
								color="#ffffff"
								margin="0px 25px 0px 25px"
								hover-color="#02E4C0"
								hover-transition="all .3s ease 0s"
							>
								Product
							</Link>
							<Link
								href="#"
								display="flex"
								align-items="center"
								text-decoration-line="initial"
								color="#ffffff"
								margin="0px 25px 0px 25px"
								hover-color="#02E4C0"
								hover-transition="all .3s ease 0s"
							>
								About
							</Link>
							<Link
								href="#"
								display="flex"
								align-items="center"
								text-decoration-line="initial"
								color="#ffffff"
								margin="0px 25px 0px 25px"
								hover-color="#02E4C0"
								hover-transition="all .3s ease 0s"
							>
								Contact
							</Link>
						</Box>
					</Components.FlexBox>
					<Components.FlexBox overflow-x="hidden" overflow-y="hidden" md_width="0px" md_height="0px">
						<Box padding="13.5px 46px 13.5px 46px" border-width="1px" border-style="solid" border-color="#ffffff">
							<Text margin="0 0px 0 0px" color="#ffffff">
								Login
							</Text>
						</Box>
					</Components.FlexBox>
					<Components.FlexBox
						default_width="0px"
						default_height="0px"
						md_mar_right="30px"
						md_width="44px"
						md_height="30px"
					>
						<Components.Burger />
					</Components.FlexBox>
				</Components.FlexBox>
				<Components.MainTitle display="flex" align-items="center" justify-content="center" flex-direction="column" />
				<Components.FlexBox default_JC="center">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="20px/30px Inter"
						margin="16px 5px 16px 5px"
					>
						Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule{"\n\n"}
					</Text>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" padding="10px 0px 0px 0px" margin="60px 0px 0px 0px">
					<Box
						padding="20px 40px 20px 40px"
						background="rgb(68, 82, 254)"
						box-shadow="rgba(0, 0, 0, 0.15) 0px 4px 31px"
						hover-transform="translateY(-5px)"
						transition="all .3s ease 0s"
						cursor="pointer"
					>
						<Text margin="0px 0px 0px 0px" color="#ffffff" font="17px/24px Inter">
							Try for free
						</Text>
					</Box>
					<Box
						padding="20px 40px 20px 40px"
						box-shadow="rgba(0, 0, 0, 0.15) 0px 4px 31px"
						hover-transform="translateY(-5px)"
						transition="all .3s ease 0s"
						cursor="pointer"
						margin="0px 0px 0px 35px"
						border-width="1px"
						border-style="solid"
						border-color="white"
					>
						<Text margin="0px 0px 0px 0px" color="#ffffff" font="17px/24px Inter">
							Try for free
						</Text>
					</Box>
				</Components.FlexBox>
				<Components.FlexBox margin="40px 0px 0px 0px" position="relative">
					<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/screens%20(1).png?v=2020-11-16T11:50:12.455Z" />
					<Box
						position="absolute"
						bottom="auto"
						height="calc(50% + 150px)"
						left={0}
						right="0px"
						top="50%"
						width="100%"
						background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%);"
					/>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" margin="200px 0px 0px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="52px/64px Inter"
						margin="16px 5px 16px 5px"
					>
						Features
					</Text>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" margin="0px 0px 0px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="20px/30px Inter"
						margin="16px 5px 16px 5px"
					>
						Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule{"\n\n"}
					</Text>
				</Components.FlexBox>
				<Components.FlexBox default_FXD="row" default_JC="center">
					<Components.FlexBox default_width="696px" default_height="696px" position="relative">
						<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Chat%20Bot.png?v=2020-11-16T09:36:05.874Z" />
						<Components.Rotate position="absolute" left="50px" bottom="70px">
							<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/circle-ribbon.svg?v=2020-11-16T09:36:05.839Z" />
						</Components.Rotate>
					</Components.FlexBox>
					<Components.FlexBox
						default_AI="flex-start"
						default_width="500px"
						default_FXD="column"
						md_width="100%"
						md_FXD="row"
						g700_FXD="column"
						g700_AI="center"
					>
						<Box width="300px" min-height="200px" margin="25px 25px 0px 25px">
							<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-round-restaurant-menu.svg?v=2020-11-16T09:36:05.835Z" />
							<Text color="#ffffff" font="20px/30px Inter">
								A single source of truth
							</Text>
							<Text color="#ffffff" font="16px/24px Inter" height="96px">
								When you add work to your Slate calendar we automatically calculate useful insights{"\n\n"}
							</Text>
						</Box>
						<Box width="300px" min-height="200px" margin="25px 25px 0px 25px">
							<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-alien-outline.svg?v=2020-11-16T09:36:05.834Z" />
							<Text color="#ffffff" font="20px/30px Inter">
								Intuitive interface
							</Text>
							<Text color="#ffffff" font="16px/24px Inter" height="96px">
								When you add work to your Slate calendar we automatically calculate useful insights{"\n\n"}
							</Text>
						</Box>
						<Box width="300px" min-height="200px" margin="25px 25px 0px 25px">
							<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-all-inclusive.svg?v=2020-11-16T09:36:05.841Z" />
							<Text color="#ffffff" font="20px/30px Inter">
								Or with rules
							</Text>
							<Text color="#ffffff" font="16px/24px Inter" height="96px">
								When you add work to your Slate calendar we automatically calculate useful insights{"\n\n"}
							</Text>
						</Box>
					</Components.FlexBox>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" margin="80px 0px 0px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="52px/64px Inter"
						margin="16px 5px 16px 5px"
					>
						Contents
					</Text>
				</Components.FlexBox>
				<Components.FlexBox
					default_JC="center"
					default_width="100%"
					md_FXD="column"
					md_AI="center"
					g700_width="100%"
				>
					<Components.FlexBox
						default_width="476px"
						default_height="620px"
						color="#000000"
						background="#ffffff"
						border-radius="10px"
						default_AI="center"
						default_FXD="column"
						margin="30px 15px 0px 15px"
						g700_width="calc(100% - 32px)"
					>
						<Text font="bold 20px/30px Inter" text-align="center" margin="40px 0px 16px 0px">
							Work
						</Text>
						<Text width="300px" text-align="center">
							Ever wondered if you're too reliant{" "}
							<br />
							on a client for work? Slate helps{" "}
							<br />
							you identify{"\n\n"}
						</Text>
						<Box
							padding="13.5px 46px 13.5px 46px"
							background="rgb(68, 82, 254)"
							box-shadow="rgba(0, 0, 0, 0.15) 0px 4px 31px"
							hover-transform="translateY(-5px)"
							transition="all .3s ease 0s"
							cursor="pointer"
							margin="30px 0px 0px 0px"
						>
							<Text margin="0px 0px 0px 0px" color="#ffffff" font="17px/24px Inter">
								Sign Up
							</Text>
						</Box>
						<Image width="100%" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Macbook%20Pro.png?v=2020-11-16T09:36:05.828Z" />
					</Components.FlexBox>
					<Components.FlexBox
						default_width="476px"
						default_height="620px"
						color="#000000"
						background="#ffffff"
						border-radius="10px"
						default_AI="center"
						default_FXD="column"
						margin="30px 15px 0px 15px"
						g700_width="calc(100% - 32px)"
					>
						<Text font="bold 20px/30px Inter" text-align="center" margin="40px 0px 16px 0px">
							Design with real data
						</Text>
						<Text width="300px" text-align="center">
							Ever wondered if you're too reliant{" "}
							<br />
							on a client for work? Slate helps{" "}
							<br />
							you identify{"\n\n"}
						</Text>
						<Box
							padding="13.5px 46px 13.5px 46px"
							background="rgb(68, 82, 254)"
							box-shadow="rgba(0, 0, 0, 0.15) 0px 4px 31px"
							hover-transform="translateY(-5px)"
							transition="all .3s ease 0s"
							cursor="pointer"
							margin="30px 0px 0px 0px"
						>
							<Text margin="0px 0px 0px 0px" color="#ffffff" font="17px/24px Inter">
								Try for free
							</Text>
						</Box>
						<Image width="100%" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Boards%20Notifications.png?v=2020-11-16T09:36:05.853Z" />
					</Components.FlexBox>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" margin="80px 0px 0px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="52px/64px Inter"
						margin="16px 5px 16px 5px"
					>
						Gallery
					</Text>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" margin="0px 0px 0px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="20px/30px Inter"
						margin="16px 5px 16px 5px"
					>
						We focus on ergonomics and meeting you where you work.
						<br />
						It's only a keystroke away.
					</Text>
				</Components.FlexBox>
				<Section>
					<Components.FlexBox g1300_FXD="column" g1300_AI="center" md_width="100%">
						<Components.FlexBox default_width="594px" md_width="100%">
							<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/gallery-image-1.png?v=2020-11-16T09:36:05.855Z" />
						</Components.FlexBox>
						<Components.FlexBox
							align-items="flex-start"
							flex-wrap="wrap"
							margin="0px 0px 0px px"
							default_width="630px"
							g1300_width="730px"
							md_width="100%"
							def_mar_left="32px"
							md_mar_left="0px"
							md_mar_top="32px"
						>
							<Components.FlexBox
								display="flex"
								default_width="594px"
								g1300_width="calc(50% - 32px)"
								g1300_height="176px"
								def_mar_bot="16px"
								def_mar_left="16px"
								def_mar_top="16px"
								def_mar_right="16px"
							>
								<Image
									width="100%"
									height="100%"
									src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Rectangle%201.png?v=2020-11-16T09:36:05.849Z"
									border-radius="12px"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
									object-fit="cover"
								/>
							</Components.FlexBox>
							<Components.FlexBox
								display="flex"
								default_width="281px"
								default_height="176px"
								def_mar_right="16px"
								def_mar_top="16px"
								g1300_width="calc(50% - 32px)"
								g1300_height="176px"
								def_mar_bot="16px"
								def_mar_left="16px"
							>
								<Image
									width="100%"
									height="100%"
									src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Rectangle%201%20(1).png?v=2020-11-16T09:36:05.829Z"
									border-radius="12px"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
									object-fit="cover"
								/>
							</Components.FlexBox>
							<Components.FlexBox
								display="flex"
								default_width="281px"
								default_height="176px"
								def_mar_top="16px"
								g1300_width="calc(50% - 32px)"
								g1300_height="176px"
								def_mar_left="16px"
								def_mar_right="16px"
								def_mar_bot="16px"
							>
								<Image
									width="100%"
									height="100%"
									src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Rectangle%201%20(2).png?v=2020-11-16T11:49:34.375Z"
									border-radius="12px"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
									object-fit="cover"
								/>
							</Components.FlexBox>
							<Components.FlexBox
								display="flex"
								default_width="176px"
								default_height="176px"
								def_mar_right="16px"
								def_mar_top="16px"
								g1300_width="calc(50% - 32px)"
								g1300_height="176px"
								def_mar_left="16px"
								def_mar_bot="16px"
							>
								<Image
									width="100%"
									height="100%"
									src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Rectangle%201%20(3).png?v=2020-11-16T09:36:05.824Z"
									border-radius="12px"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
									object-fit="cover"
								/>
							</Components.FlexBox>
							<Components.FlexBox
								display="flex"
								default_width="176px"
								default_height="176px"
								def_mar_right="16px"
								def_mar_top="16px"
								g1300_width="calc(50% - 32px)"
								g1300_height="176px"
								def_mar_left="16px"
								def_mar_bot="16px"
							>
								<Image
									width="100%"
									height="100%"
									src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Rectangle%201%20(4).png?v=2020-11-16T09:36:05.818Z"
									border-radius="12px"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
									object-fit="cover"
								/>
							</Components.FlexBox>
							<Components.FlexBox
								display="flex"
								default_width="176px"
								default_height="176px"
								def_mar_right="16px"
								def_mar_top="16px"
								g1300_width="calc(50% - 32px)"
								g1300_height="176px"
								def_mar_left="16px"
								def_mar_bot="16px"
							>
								<Image
									width="100%"
									height="100%"
									src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Rectangle%201%20(5).png?v=2020-11-16T09:36:05.830Z"
									border-radius="12px"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
									object-fit="cover"
								/>
							</Components.FlexBox>
							<Components.FlexBox display="flex" />
						</Components.FlexBox>
					</Components.FlexBox>
				</Section>
				<Components.FlexBox default_JC="center" margin="80px 0px 0px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="52px/64px Inter"
						margin="16px 5px 16px 5px"
					>
						Partners
					</Text>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" margin="0px 0px 0px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="20px/30px Inter"
						margin="16px 5px 16px 5px"
					>
						We focus on ergonomics and meeting you where you work.
						<br />
						It's only a keystroke away.
					</Text>
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" flex-wrap="wrap">
					<Image width="60px" height="60px" margin="40px 40px 0px 40px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/logos_apple-app-store.svg?v=2020-11-16T09:36:05.832Z" />
					<Image width="60px" height="60px" margin="40px 40px 0px 40px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/logos_apiary.svg?v=2020-11-16T09:36:05.700Z" />
					<Image width="60px" height="60px" margin="40px 40px 0px 40px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/logos_android-icon.svg?v=2020-11-16T09:36:05.815Z" />
					<Image width="60px" height="60px" margin="40px 40px 0px 40px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/logos_basecamp.svg?v=2020-11-16T09:36:05.702Z" />
					<Image width="60px" height="60px" margin="40px 40px 0px 40px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/logos_airbnb.svg?v=2020-11-16T09:36:05.697Z" />
					<Image width="60px" height="60px" margin="40px 40px 0px 40px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/logos_ibm.svg?v=2020-11-16T09:36:05.706Z" />
				</Components.FlexBox>
				<Components.FlexBox default_JC="center" margin="120px 0px 60px 0px">
					<Text
						color="#ffffff"
						width="593px"
						text-align="center"
						font="52px/64px Inter"
						margin="16px 5px 16px 5px"
					>
						Testimonials
					</Text>
				</Components.FlexBox>
				<Components.FlexBox justify-content="center">
					<Components.FlexBox default_JC="center" flex-wrap="wrap" max-width="1000px" sm_width="100%">
						<Components.FlexBox
							default_width="356px"
							default_height="176px"
							border-width="1px"
							border-style="solid"
							border-color="#5c5c5c"
							border-radius="10px"
							margin="8px 8px 8px 8px"
							padding="40px 40px 40px 40px"
							default_AI="flex-start"
							flex-direction="column"
						>
							<Components.FlexBox align-items="center">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/user-pic-Claire-Bell.png?v=2020-11-16T09:36:05.706Z" />
								<Box display="flex" flex-direction="column" margin="0px 0px 0px 20px">
									<Text margin="0px 0px 3px 0px" color="#02e4C0">
										Claire Bell
									</Text>
									<Text margin="0px 0px 0px 0px" color="#ffffff">
										Designer
									</Text>
								</Box>
							</Components.FlexBox>
							<Text color="#FFF" font="16px/24px Inter">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n"}
							</Text>
						</Components.FlexBox>
						<Components.FlexBox
							default_width="356px"
							default_height="176px"
							border-width="1px"
							border-style="solid"
							border-color="#5c5c5c"
							border-radius="10px"
							margin="8px 8px 8px 8px"
							padding="40px 40px 40px 40px"
							default_AI="flex-start"
							flex-direction="column"
						>
							<Components.FlexBox align-items="center">
								<Image height="50px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/user-pic-Francisco-Lane.png?v=2020-11-16T13:31:52.393Z" width="50px" />
								<Box display="flex" flex-direction="column" margin="0px 0px 0px 20px">
									<Text margin="0px 0px 3px 0px" color="#02e4C0">
										Francisco Lane{"\n\n"}
									</Text>
									<Text margin="0px 0px 0px 0px" color="#ffffff">
										Coder
									</Text>
								</Box>
							</Components.FlexBox>
							<Text font="16px/24px Inter" color="#FFF">
								You’re just awesome! The prices are reasonable, and the service is just great. Thank you so much! Highly recommend!{"\n\n\n\n"}
							</Text>
						</Components.FlexBox>
						<Components.FlexBox
							default_width="356px"
							default_height="176px"
							border-width="1px"
							border-style="solid"
							border-color="#5c5c5c"
							border-radius="10px"
							margin="8px 8px 8px 8px"
							padding="40px 40px 40px 40px"
							default_AI="flex-start"
							flex-direction="column"
						>
							<Components.FlexBox align-items="center">
								<Image height="50px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/user-pic-Ralph-Fisher.png?v=2020-11-16T13:32:53.767Z" width="50px" />
								<Box display="flex" flex-direction="column" margin="0px 0px 0px 20px">
									<Text margin="0px 0px 3px 0px" color="#02e4C0">
										Ralph Fisher{"\n\n"}
									</Text>
									<Text margin="0px 0px 0px 0px" color="#ffffff">
										Coder
									</Text>
								</Box>
							</Components.FlexBox>
							<Text font="16px/24px Inter" color="#FFF">
								A friend of mine advised you to me, and I definitely liked working with you. It was a good experience. Thanks a lot!{"\n\n"}
							</Text>
						</Components.FlexBox>
						<Components.FlexBox
							default_width="356px"
							default_height="176px"
							border-width="1px"
							border-style="solid"
							border-color="#5c5c5c"
							border-radius="10px"
							margin="8px 8px 8px 8px"
							padding="40px 40px 40px 40px"
							default_AI="flex-start"
							flex-direction="column"
						>
							<Components.FlexBox align-items="center">
								<Image height="50px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/user-pic-Jorge-Murphy.png?v=2020-11-16T13:33:02.805Z" width="50px" />
								<Box display="flex" flex-direction="column" margin="0px 0px 0px 20px">
									<Text margin="0px 0px 3px 0px" color="#02e4C0">
										Jorge Murphy{"\n\n"}
									</Text>
									<Text margin="0px 0px 0px 0px" color="#ffffff">
										Designer
									</Text>
								</Box>
							</Components.FlexBox>
							<Text font="16px/24px Inter" color="#FFF">
								You did an amazing job and I wholeheartedly recommend you to everyone I know. You are the best!{"\n\n"}
							</Text>
						</Components.FlexBox>
					</Components.FlexBox>
				</Components.FlexBox>
				<Section>
					<Components.FlexBox
						default_width="100%"
						default_JC="center"
						margin="100px 0px 0px 0px"
						default_height="370px"
						g1300_width="100%"
						g1300_height="700px"
					>
						<Components.FlexBox
							background="#343434"
							border-radius="33px"
							box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
							overflow-x="hidden"
							overflow-y="hidden"
							g1300_FXD="column"
							g1300_width="700px"
						>
							<Components.FlexBox
								default_width="50%"
								align-items="center"
								justify-content="center"
								flex-direction="column"
								g1300_width="100%"
								g1300_height="50%"
							>
								<Text
									color="#ffffff"
									font="52px/63px Inter"
									width="487px"
									text-align="center"
									margin="0px 0px 16px 0px"
								>
									OpenType features and Variable fonts
								</Text>
								<Box
									padding="13.5px 76px 13.5px 76px"
									background="rgb(68, 82, 254)"
									box-shadow="rgba(0, 0, 0, 0.15) 0px 4px 31px"
									hover-transform="translateY(-5px)"
									transition="all .3s ease 0s"
									cursor="pointer"
								>
									<Text margin="0px 0px 0px 0px" color="#ffffff" font="17px/24px Inter">
										Try for free
									</Text>
								</Box>
							</Components.FlexBox>
							<Components.FlexBox default_height="100%" default_width="50%" g1300_width="100%" g1300_height="50%">
								<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/Line%20Chart%201%20(1).png?v=2020-11-16T09:36:05.847Z" object-fit="cover" />
							</Components.FlexBox>
						</Components.FlexBox>
					</Components.FlexBox>
				</Section>
				<GoogleMap margin="200px 0px 0px 0px" />
				<Section>
					<Components.FlexBox margin="100px 0px 100px 0px" justify-content="center" md_FXD="column">
						<Components.FlexBox sm_FXD="column">
							<Box margin="0px 120px 0px 0px">
								<Text color="#ffffff" font="20px/30px Inter" margin="16px 0px 24px 0px">
									Product
								</Text>
								<Text color="#b9b9b9">
									Overview
								</Text>
								<Text color="#b9b9b9">
									Features
								</Text>
								<Text color="#b9b9b9">
									Roadmap
								</Text>
								<Text color="#b9b9b9">
									Pricing
								</Text>
							</Box>
							<Box margin="0px 120px 0px 0px">
								<Text color="#ffffff" font="20px/30px Inter" margin="16px 0px 24px 0px">
									About
								</Text>
								<Text color="#b9b9b9">
									Overview
								</Text>
								<Text color="#b9b9b9">
									Team
								</Text>
								<Text color="#b9b9b9">
									Vacancy Jobs
								</Text>
								<Text color="#b9b9b9">
									Awards
								</Text>
							</Box>
							<Box margin="0px 120px 0px 0px">
								<Text color="#ffffff" font="20px/30px Inter" margin="16px 0px 24px 0px">
									Product
								</Text>
								<Text color="#b9b9b9">
									Head Office
								</Text>
								<Text color="#b9b9b9">
									Subsidiaries
								</Text>
								<Text color="#b9b9b9">
									Support
								</Text>
								<Text color="#b9b9b9">
									Feedback
								</Text>
							</Box>
						</Components.FlexBox>
						<Components.FlexBox width="400px" flex-direction="column" justify-content="center">
							<Box display="flex" align-items="center">
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-bx-map.svg?v=2020-11-16T09:36:05.695Z" />
								<Text color="#ffffff" font="16px/16px Inter" margin="16px 0px 16px 16px">
									65806 Briarwood Road San Francisco CA{"\n\n"}
								</Text>
							</Box>
							<Box display="flex" align-items="center" margin="16px 0px 16px 0px">
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-baseline-phone-android.svg?v=2020-11-16T09:36:05.695Z" />
								<Link href="#" color="#ffffff" text-decoration-line="initial" margin="0px 0px 0px 16px">
									417-865-1442
								</Link>
							</Box>
							<Box display="flex" align-items="center">
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-twitter-outlined.svg?v=2020-11-16T14:47:13.600Z" margin="0px 26px 0px 0px" />
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-facebook-filled.svg?v=2020-11-16T14:47:24.918Z" margin="0px 26px 0px 0px" />
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fb2421db1c8af001eb53043/images/icon-linkedin-filled.svg?v=2020-11-16T14:47:37.376Z" margin="0px 26px 0px 0px" />
							</Box>
						</Components.FlexBox>
					</Components.FlexBox>
				</Section>
			</Box>
		</Components.AdaptiveTheme>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});