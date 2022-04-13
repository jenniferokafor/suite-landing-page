import Logo from './svg/logo';

// importing components

import { StyledHeader } from './styled/Header.styled';
import { HeaderBtn } from './styled/Button.styled';


export default function Header () {
    return (
        <StyledHeader>
            <Logo />
            <HeaderBtn>Request Beta Access</HeaderBtn>
        </StyledHeader>
    )
}