import styled from "styled-components"

export const Btn = styled.button`
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
`

export const HeroBtn = styled(Btn)`
    width: 16rem;
    height: 3.813rem;
    border: none;
    background-color: ${({theme}) => theme.clr1};
    color: ${({theme}) => theme.clr2};
    font-size: 1.125rem;

    &:hover {
        background: linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%);
    }
`