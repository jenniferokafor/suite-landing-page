import Logo from "./svg/logo";
import Facebook from './svg/facebook.js';
import Twitter from './svg/twitter.js';
import Instagram from './svg/instagram.js';

import { StyledFooter } from "./styled/footer.styled";

export default function Footer () {
    return (
        <StyledFooter>
            <Logo />
            <p>Copyright - Suite</p>
            <div>
                <Facebook />
                <Twitter />
                <Instagram />
            </div>
        </StyledFooter>
    )
}