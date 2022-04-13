// importing component
import Button from "./button"

// importing styled components
import { HeroStats, HeroTxtButton, HeroWrapper } from "./styled/Hero.styled";
import { Btn, HeroBtn } from "./styled/Button.styled";

//importing images
import mobileHeroImg from '../../src/assets/img-and-logo/image-hero-landscape@2x.png';
import dskHeroImg from '../../src/assets/img-and-logo/image-hero-portrait@2x.png';
import HeroBlur from "./svg/heroBlur";

export default function Hero () {
    return (
        <HeroWrapper>
            <HeroTxtButton>
                <h1>
                <span>A </span>super <span>solution</span> <span>for your</span> business.
                </h1>
                <p>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
                <HeroBtn>Request Beta Access</HeroBtn>
                <HeroBlur/>
            </HeroTxtButton>

            <div>
                {/* <img src={mobileHeroImg} /> */}
                <img src={dskHeroImg} />
            </div>
            

            <HeroStats>
                <li>
                    <span>2K+</span>
                    <br/>
                    <span>companies</span>
                </li>

                <li>
                    <span>8</span>
                    <br/>
                    <span>languages</span>
                </li>

                <li>
                    <span>1.2M</span>
                    <br/>
                    <span>leads</span>
                </li>
            </HeroStats>
        </HeroWrapper>
    )
}