'use client'

import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const FooterLinksWrapper = styled.div`
    &:first-of-type {
        margin-left: 50px;
    }

    &:last-of-type {
        margin-right: 50px;
    }

    a {
        color: #1e2538;
        margin-left: 20px;
    }

    a:hover {
        cursor: pointer;
        color: #ff4500;
    }
`;