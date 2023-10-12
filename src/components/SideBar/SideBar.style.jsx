import styled from 'styled-components'
import { BsFillCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'

export const SideBarContainer = styled.aside`
    width: 25vw;
    min-width: 400px;
    height: calc(100vh - 12vh);
    position: absolute;
    bottom: 0;
    left: ${props => props.showmenu === "true" ? "0" : "-100vw"};
    background-color:#C4C4C4;
    font-size: 2.2rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition: all 400ms ease;
    z-index: 1;
    @media(max-width: 1100px ){
        width: 40vw;
    }
    `
export const FirstContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 2rem;
`
export const Filters = styled.div`
    color: #3E3E3E;
    padding: 2rem 0 0 2rem;
    display:flex;
    flex-direction: column;
    gap: 1.5rem;


`
export const FilterIcon = styled.p`
    cursor: pointer;


`
export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #A0A0A0;
`
export const CategoriesContainer = styled.div`
    padding: 2rem;
    display:flex;
    flex-direction:column;
    gap: 2rem;

    .allCateogory{
        color: #3E3E3E;
    }
    `
export const CategoriesTitle = styled.h1``
export const MinusIcon = styled(AiFillMinusCircle)`
  color: red; 
  margin-left: 50px; 
  display:none;
  
`;
export const Categorie = styled.p`
    margin-left: 2rem;
    cursor: pointer;

    &:hover ${MinusIcon}{ 
        display: inline;
    }
`
export const CircleIcon = styled(BsFillCircleFill)`
  color: #28A745; 
  margin-right: 10px; 
`;
export const Trash = styled.p`
    padding: 2rem;
    color: #2E2E2E;
    cursor: pointer;
`
export const ContainerAddCategorie = styled.div`
    display:flex;
    flex-direction:column;
    color: #676767;
    margin-left: 2rem;
`
export const AddCategorie = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 2rem;
    color: #676767;

`
export const InputContainer = styled.div`
    display:flex;
    gap: 1rem;
`
export const LineAddCategorie = styled.div`
    width: 80%;
    height: 1px; 
    background-color: #676767;
`

