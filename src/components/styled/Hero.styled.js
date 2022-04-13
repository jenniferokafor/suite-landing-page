import styled from 'styled-components';

export const HeroWrapper = styled.div`
    background-color: ${({theme}) => theme.clr2};
    padding: 2rem 1rem 17rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    color: ${({theme}) => theme.clr1};

    div img {
        max-width: 21.438rem;

        @media (min-width: 80rem) {
            max-width: 21.875rem;
        }
    }

    @media (min-width: 48rem) {
        padding: 0 2.5rem 16.75rem 2.5rem;
        max-height: 50rem;
        display: grid;
        grid-template-columns: 22.5rem 20.063rem;
        grid-template-rows: 1fr 1fr;
        justify-content: center;
        align-content: center;
    }

    @media (min-width: 80rem) {
       padding: 0 10.313rem 9.625rem 10.313rem;
       display: grid;
       grid-template-columns: 31.25rem 21.875rem 11.875rem;
       grid-template-rows: 1fr;
       gap: 0;
       justify-content: start;
    }
`

export const HeroTxtButton = styled.div`
    max-width: 21.469rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    @media (min-width: 80rem) {
        margin-left: 0rem;
    }

    h1 {
        font-size: 2.375rem;
        font-weight: 700;
        line-height: 2.75rem;

        span:first-child, span:last-child {
            font-weight: 400;
        }

        @media (min-width: 48rem) {
            font-size: 3.5rem;
            line-height: 4rem;
            width: 34.813rem;
            z-index: 10;
        }

        @media (min-width: 80rem) {
            font-size: 4.5rem;
            line-height: 4.875rem;
            width: 44rem;
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.75rem;

        @media (min-width: 80rem) {
            font-size: 1.125rem;
            line-height: 2rem;
            max-width: 21.875rem;
        }
    }
`

export const HeroStats = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    span:first-child {
        font-size: 3rem;
        font-weight: 700;
    }

    span:last-child {
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        margin-top: 2px;
        color: ${({theme}) => theme.clr3};
    }

    @media (min-width: 48rem) {
        flex-direction: row;
        gap: 8rem;
        grid-column: 1/-1;
        justify-self: center;
    }

    @media (min-width: 80rem) {
        flex-direction: column;
        gap: 4rem;
        text-align: left;
        grid-column: 3/-1;
        margin-left: 6rem;
    }
`