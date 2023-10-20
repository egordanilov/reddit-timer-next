'use client'

import styled from 'styled-components';

export const HeroSectionWrapper = styled.section`
    max-width: 1114px;
    margin: 0 auto;
    text-align: center;

    img {
        &:hover {
            cursor: pointer;
            opacity: 0.9;
        }
    }
`;

export const HeroSectionHeader = styled.h1`
    font-family: 'Bitter';
    font-size: 38px;
    color: #000;
    margin-top: 40px;
    margin-bottom: 0px;
`;

export const HeroSectionParagraph = styled.p`
    color: #93918f;
    margin-top: 20px;
`;

export const HeroSectionButton = styled.button`
    background: #fdb755;
    border-radius: 4px;
    color: #fff;
    font-family: 'Montserrat';

    border: none;
    padding: 10px 16px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
        background: #fea62e;
    }
`;