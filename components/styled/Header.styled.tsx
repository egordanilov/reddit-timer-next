'use client'

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    padding: 0 80px;
    @media (min-width: 576px) and (max-width: 767px) {
        padding: 0 30px;
    }
    @media (max-width: 575px) {
        padding: 0 20px;
    }
`;

export const HeaderLogoWrapper = styled.div`
    height: 36px;

    a {
        height: 100%;
        display: inline-block;
    }
`;

export const HeaderLinksWrapper = styled.div`
    a {
        color: #636363;
        margin-left: 20px;
    }

    a:hover {
        cursor: pointer;
        color: #ff4500;
    }
`;