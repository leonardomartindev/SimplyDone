import styled from "styled-components"

export const Nav = styled.nav`
    width: 100vw;
    height: 12vh;
    background-color: #1A2634;
    position: fixed;
    top: 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 2rem;

    
`
export const FirstItems = styled.div`
    display:flex;
    gap: 2rem;
    height: fit-content;
`
export const MenuBurguer = styled.button`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background: none;
    border: none;
    color: white;
    font-size: 5rem;
    cursor: pointer;
    `
export const FormContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`
export const SearchButton = styled.button`
    background-color: #B3B3B3;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border: none;
    color: #1A2634;
    height: 5rem;
    width: 5rem;
    font-size: 4rem;
    border-radius: 10px 0 0 10px;

    
`
export const InputSearch = styled.input`
    background-color: #B3B3B3;
    border: none;
    color: #1A2634;
    height: 5rem;
    width: 45vw;
    border-radius: 0 10px 10px 0;
    outline: none;
    font-size: 2rem;
    padding-left: 2rem;
    @media(max-width: 700px){
        width: 80vw;
    }

`
export const Logo = styled.img`
    width: 15rem;
    @media(max-width: 700px){
        display:none;
    }

`