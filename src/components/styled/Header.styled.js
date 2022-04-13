import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.clr2};
    padding: 1.5rem 1rem 3.5rem 1rem;

    @media (min-width: 48rem) {
        padding: 2.5rem 2.5rem 5rem 2.5rem;
    }

    @media (min-width: 80rem) {
        padding: 3.125rem 10.313rem 4.188rem 10.313rem;
    }
`