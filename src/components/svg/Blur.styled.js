import styled from 'styled-components';

export const StyledBlur = styled.svg`
    position: absolute;
    top: -150px;
    display: none;

    @media (min-width: 48rem) {
        display: block;
        width: 50%;
        height: 50%;
        top: -100px;
    }

    @media (min-width: 80rem) {
        width: 100%;
        height: 100%;
        top: 90px;
        left: 10px;
    }
`