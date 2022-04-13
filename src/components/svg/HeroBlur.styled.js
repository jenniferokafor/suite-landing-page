import styled from 'styled-components';

export const StyledHeroBlur = styled.svg`
   width: 9.467rem;
   transform: rotate(13deg);
   position: absolute;
   top: -40px;
   right: 28px;

   @media (min-width: 48rem) {
       width: 14.449rem;
       transform: rotate(4deg);
       right: -117px;
   }

   @media (min-width: 80rem) {
       width: 17.938rem;
       transform: rotate(0deg);
       top: -60px;
       right: -250px;
   }
`