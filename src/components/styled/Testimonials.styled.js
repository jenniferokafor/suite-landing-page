import styled from 'styled-components'

export const TestimonialWrapper = styled.div`
background: linear-gradient(180deg, ${({theme}) =>theme.clr2} 50%, ${({theme}) =>theme.clr4} 50%); 

    @media (min-width: 48rem) {
        padding: 0 2.5rem;
    }

    @media (min-width: 80rem) {
        padding: 0 10.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } 
`

export const StyledTestimonialMain = styled.div`
    background-color: ${({theme}) =>theme.clr1};
    color: ${({theme}) =>theme.clr2};
    padding: 0 1rem 4rem 1rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    position: relative;
    

    @media (min-width: 80rem) {
        width: 55rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        padding: 0 8rem 0 8rem; 
    }

    img {
        width: 15.75rem;
        margin-top: -11.25rem;
        z-index: 10;

        @media (min-width: 80rem) {
            width: 23.438rem;
            margin-top: -3.5rem;
        }
    }


`

export const StyledTestimonialText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;

    @media (min-width: 48rem) {
        max-width: 35.813rem;
    }

    @media (min-width: 80rem) {
        align-items: flex-start;
        text-align: left;
        max-width: 21.875rem;
    }

    h3 {
        font-size: 2.5rem;
        line-height: 3rem;

        span {
            font-weight: 700;
        }
    }

    p {
        font-size: 1.125rem;
        line-height: 2rem;
    }

    div {
        h4 {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        h6 {
            font-size: 1rem;
        }
    }
`