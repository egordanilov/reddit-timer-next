'use client'
import styled from "styled-components"

export const SearchInputButton = styled.button`
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

export const SearchInputSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FormTitle = styled.h1`
    font-size: 38px;
    font-family: 'Bitter';
    text-align: center;
    color: #000;
    margin-top: 50px;
`;

export const SearchPageFormWrapper = styled.form`
    margin: 0 auto;

    div {
        display: flex;
        align-items: center;
    }
`;

export const SearchInput = styled.input`
    width: 370px;
    height: 32px;
    font-size: 14px;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    margin-left: 5px;
    margin-right: 10px;
`;