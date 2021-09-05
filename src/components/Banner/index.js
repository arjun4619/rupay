import React, { useState } from 'react'
import { Wrapper, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './Banner.styles';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

function Banner() {

   const [hover, setHover] = useState(false);

   const onhover = () => {
       setHover(!hover);
   }

    return (
        <Wrapper>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a New Account today and recieve ₹2000 in credit towards your next payment.
                </HeroP>

                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onhover} onMouseLeave={onhover}
                    primary='true'
                    dark='true'
                    >
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </Wrapper>
    )
}

export default Banner;
