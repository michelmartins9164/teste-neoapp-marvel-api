import menu from '../../assets/icons/menu.svg';
import { HeaderContainer,ContainerLinks } from './styles';
import { Link } from 'react-router-dom';
export default function HeaderComponent() {
    return (
        <header>
            <HeaderContainer>
                    <h1>Marvel comics</h1>
                    <ContainerLinks>
                        <Link to={'/'}>Inicio</Link>
                        <Link to={'/car'}>Carrinho</Link>
                    </ContainerLinks>
            </HeaderContainer>
        </header>
    )
}