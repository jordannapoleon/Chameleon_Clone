//Styling
import css from '@/styles/Layout.module.css'
//Imports 
import { indieFlower } from '../Fonts/Fonts';

const Header = () => {

    return (
        <header>
            <a href='http://localhost:3000/'>
                <h1 className={`${css.header} ${indieFlower.className}`} >Chameleon</h1>
            </a>
        </header>

    )
};

export default Header;