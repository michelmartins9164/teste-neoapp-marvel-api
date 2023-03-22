import menu from '../../assets/icons/menu.svg';
import {HeaderContainer} from './styles';
export default function HeaderComponent() {
    return (
        <header>
            <HeaderContainer>
            <div className='logo'>
                <img src={menu} alt="Icone menu" />
            </div>

            <div>
                <h1>Marvel comics</h1>
            </div>
            </HeaderContainer>
        </header>
    )
}