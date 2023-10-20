'use client'

import Image from "next/image";
import heatmap from './heatmap.png'
import { useRouter } from "next/navigation";
import { HeroSectionWrapper, HeroSectionHeader, HeroSectionParagraph, HeroSectionButton } from "./styled/HeroSection.styled";

function HeroSection() {
    const router = useRouter()

    const clickHandler = () => {
        router.push('/search?query=javascript');
    }
    return (
        <HeroSectionWrapper>
            <HeroSectionHeader>No reactions to your reddit posts?</HeroSectionHeader>
            <HeroSectionParagraph>Great timing, great results! Find the best time to post on your subreddit.</HeroSectionParagraph>
            <HeroSectionButton onClick={clickHandler}>SHOW ME THE BEST TIME</HeroSectionButton>
            <HeroSectionParagraph>r/javascript</HeroSectionParagraph>
            <Image 
                src={heatmap}
                alt="Heatmap"
                onClick={clickHandler}
            />
        
        </HeroSectionWrapper>
    )
}

export default HeroSection;
