import person from '../../src/assets/img-and-logo/image-jeremy-large@2x.png';
import SmallCurve from './svg/smallCurve';
import Blur from './svg/blur';
import { StyledTestimonialMain, StyledTestimonialText, TestimonialWrapper } from './styled/Testimonials.styled';

export default function Testimonial () {
    return (
        <TestimonialWrapper>

            <StyledTestimonialMain>
                <img src={person} alt='image of a man using a mobile device' />
                <Blur />

                <SmallCurve />

                <StyledTestimonialText>
                    <h3>It just <span>works.</span></h3>

                    <p>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>

                    <div>
                        <h4>JEREMY ROBINSON</h4>
                        <h6>CMO, FYLO</h6>
                    </div>
                </StyledTestimonialText>
            </StyledTestimonialMain>

        </TestimonialWrapper>
    )
}