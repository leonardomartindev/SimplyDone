import { Nav, FirstItems, MenuBurguer, FormContainer, SearchButton, InputSearch, Logo } from './NavBar.style';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import LogoSimplyDone from '../../public/logoSimplyDone.svg';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function NavBar() {
  const { showMenu, setShowMenu, setSearchQuery, searchQuery } = useContext(AppContext);

  // Função para alternar o estado showMenu entre "true" e "false"
  const toggleShowMenu = () => {
    setShowMenu(showMenu === 'true' ? 'false' : 'true');
  };

  // Função para atualizar a consulta de pesquisa
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Nav>
      <FirstItems>
        <MenuBurguer onClick={toggleShowMenu}>
          <AiOutlineMenu />
        </MenuBurguer>
        <FormContainer>
          <SearchButton>
            <AiOutlineSearch />
          </SearchButton>
          <InputSearch
            placeholder="Pesquisar tarefas"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </FormContainer>
      </FirstItems>
      <Logo src={LogoSimplyDone} />
    </Nav>
  );
}
