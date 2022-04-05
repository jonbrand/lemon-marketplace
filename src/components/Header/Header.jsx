import 
{
    HeaderButtonMetaMaskContainer,
    HeaderContainer, 
    HeaderItemsContainer, 
    HeaderLogoContainer, 
    HeaderSearchBarContainer, 
    LinkButtons,
    LinkLogo, 
    LogoTitle, 
    SearchBar, 
    SearchBarIconContainer 
} from "./styles";
import logo from '../../assets/logo.png';
import { FiSearch } from 'react-icons/fi';
import { ButtonComponent } from "../Button/Button";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogoContainer>
                <img src={logo} alt='logo' />
                <LinkLogo to='/'>
                    <LogoTitle>Lemonade</LogoTitle>
                </LinkLogo>
            </HeaderLogoContainer>
            <HeaderItemsContainer>
                <LinkButtons to="/">Explorar</LinkButtons>
                <LinkButtons to="/MyPurchases">Minhas Compras</LinkButtons>
                <LinkButtons to="/create">Criar</LinkButtons>
                <LinkButtons to="/about">Quem Somos</LinkButtons>
            </HeaderItemsContainer>
            <HeaderSearchBarContainer>
                <SearchBarIconContainer>
                    <FiSearch color="white"/>
                </SearchBarIconContainer>
                <SearchBar placeholder='Coleções, itens ou usuários...'/>
            </HeaderSearchBarContainer>
            <HeaderButtonMetaMaskContainer>
                <ButtonComponent />
            </HeaderButtonMetaMaskContainer>
        </HeaderContainer>
    )
}