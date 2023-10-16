import { HeaderWrapper, HeaderLogoWrapper, HeaderLinksWrapper } from "./styled/Header.styled";
import Image from "next/image";
import Link from "next/link";
import redditLogo from './RedditTimerLogo.svg';

function Header() {
    return(
        <HeaderWrapper>
            <HeaderLogoWrapper>
                <Link href="/">
                    <Image 
                        src={redditLogo}
                        alt="Reddit logo"
                    />
                </Link>
            </HeaderLogoWrapper>
            <HeaderLinksWrapper>
                <Link href="/search?query=javascript">Search</Link>
                <Link href="/#how-it-works">How it works</Link>
                <Link href="/#about">About</Link>
            </HeaderLinksWrapper>
        </HeaderWrapper>
    )
}

export default Header;