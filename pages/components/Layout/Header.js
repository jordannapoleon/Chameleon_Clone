import css from '@/styles/Layout.module.css'
import { useRouter } from 'next/router';
import { indieFlower } from '../Fonts/Fonts';

const Header = () => {

    const router = useRouter();

    return (
        <a href='http://localhost:3000/'>
            <h1 className={`${css.header} ${indieFlower.className}`} >Chameleon</h1>
        </a>
        
    )
};

export default Header;