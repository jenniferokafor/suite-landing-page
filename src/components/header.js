// importing svgs and images
import { ReactComponent as Logo } from '../assets/img-and-logo/logo.svg';

// importing components
import Button from './button';

export default function Header () {
    return (
        <header>
            <Logo className='logo'/>
            <Button />
        </header>
    )
}