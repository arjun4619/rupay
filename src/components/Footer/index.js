import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights} from './Footer.styles'
import { animateScroll as scroll } from 'react-scroll';

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How It Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>Destination</FooterLink>
                                <FooterLink to='/signin'>Sponsorships</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/signin'>Submit Video</FooterLink>
                                <FooterLink to='/signin'>Ambassadors</FooterLink>
                                <FooterLink to='/signin'>Agency</FooterLink>
                                <FooterLink to='/signin'>Influencers</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Youtube</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                                <FooterLink to='/signin'>Telegram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Rupay
                        </SocialLogo>

                        <WebsiteRights>Rupay ?? {new Date().getFullYear()}
                        </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook/>   
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram/>   
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label="Twitter"><FaTwitter/>   
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube/>   
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
