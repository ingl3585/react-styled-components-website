import React, { useState } from 'react';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};
	return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Banking Made Easy</HeroH1>
				<HeroP>
					Get started today and receive $500 in credit towards your first
					payment.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to='sign-up'
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary='true'
						dark='true'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
