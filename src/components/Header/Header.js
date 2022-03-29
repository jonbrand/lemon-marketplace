import 
{
    HeaderButtonMetaMaskContainer,
    HeaderContainer, 
    HeaderItemsContainer, 
    HeaderLogoContainer, 
    HeaderSearchBarContainer, 
    LinkButtons, 
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
                <LogoTitle>Lemonade</LogoTitle>
            </HeaderLogoContainer>
            <HeaderItemsContainer>
                <LinkButtons to="/profile">Explorar</LinkButtons>
                <LinkButtons to="/profile">Minhas NFT's</LinkButtons>
                <LinkButtons to="/profile">Criar</LinkButtons>
                <LinkButtons to="/profile">Quem Somos</LinkButtons>
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