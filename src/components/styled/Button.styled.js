import styled from "styled-components"

export const Btn = styled.button`
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
`

export const HeaderBtn = styled(Btn)`
    font-size: 0.875rem;
    color: var(--dark-blue);
    background-color: ${({theme}) => theme.clr2};
    border: 1px solid ${({theme}) => theme.clr1};
    width: 11.375rem;
    height: 3rem;

    &:hover {
        color: ${({theme}) => theme.clr2};
        background-color:  ${({theme}) => theme.clr1};
    }
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