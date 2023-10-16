import Image from "next/image";
import Link from "next/link";
import footerLogo from './footerlogo.svg';
import { FooterWrapper, FooterLinksWrapper } from "./styled/Footer.styled";

function Footer() {
    return(
        <FooterWrapper>
            <FooterLinksWrapper>
                <Link href="/">
                <Image 
                        src={footerLogo}
                        alt="Reddit logo"
                    />
                </Link>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <Link href="/terms">Terms & Conditions</Link>
            </FooterLinksWrapper>
        </FooterWrapper>
    )
}

export default Footer;