import styled from 'styled-components';

export const StyledFooter = styled.div`
    background-color: ${({theme}) =>theme.clr4};
    color: ${({theme}) =>theme.clr1};
    height: 18.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.063rem;

    @media (min-width: 48rem) {
        height: 12.75rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 2.5rem;
        padding-right: 2.438rem;
    }

    @media (min-width: 80rem) {
        padding-left: 10.438rem;
        padding-right: 10.25rem;
    }

    p {
        color: rgba(73, 86, 109, 1);
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.75rem;
    }
`