import React from 'react';
import { SvgBg, FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';
import { FaInstagram, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { GiHand } from 'react-icons/gi';
import { IoCall } from 'react-icons/io5';
import aparat from '../../images/aparat.png';

const Footer = (props) => {
    return (
        <FooterContainer style={props.style}>
            <SvgBg />
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
                                <FaTelegramPlane />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='noopener noreferrer'>
                                <SiGmail />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='FaTwitter' rel='noopener noreferrer'>
                                <GiHand />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='FaTwitter' rel='noopener noreferrer'>
                                <IoCall />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='FaTwitter' rel='noopener noreferrer'>
                                <img src={aparat} alt="aparat" width="35px" />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialLogo to='/'>آموزش فن بیان</SocialLogo>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;