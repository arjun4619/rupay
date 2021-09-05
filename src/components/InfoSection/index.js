import React from 'react'
import { Button } from '../ButtonElement';
import { InfoWrapper, InfoContainer, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './Info.styles';

function InfoSection({ id, lightBg, lightText, topLine, description, headline, lightTextDesc, buttonLabel, imgStart, img, alt, dark, primary, darkText }) {
    return (
        <>
        <InfoWrapper lightBg={lightBg} id={id}>
            <InfoContainer>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoContainer>
        </InfoWrapper>   
        </>
    )
}

export default InfoSection;
