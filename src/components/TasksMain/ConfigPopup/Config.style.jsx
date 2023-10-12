import styled from "styled-components"
import { AiFillCloseCircle } from 'react-icons/ai'

export const PopupBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .5);
    position:absolute;
    top: 0;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ContainerPopup = styled.div`
    width: 50vw;
    height: 90vh;
    background-color:white;
    border: 4px solid black;
    border-radius: 15px;
    box-shadow: 0px 0px 20px;
    position: relative;
    overflow: hidden;

    @media(max-width: 900px){
        width: 80vw;
    }
`
export const TopContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid #ABABAB;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 1rem;
    height: 40px;
    `
export const TitleCg = styled.h1`
    font-size: 2.5rem;
`
export const CloseIcon = styled(AiFillCloseCircle)`
    color:#FF7272;
    font-size: 2.5rem;
    cursor: pointer;
`
export const LeftRightContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    @media (max-width: 1100px){
        flex-direction:column;
    }
`
export const LeftContent = styled.div`
    display:flex;
    flex-direction:column;
    gap: 6rem;
    margin: 2rem 1rem;
    width: 60%;

    @media (max-width: 1100px){
        gap: 2rem;
        width: 100%
    }
`
export const SubContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 1rem;
`
export const TaskContainerP = styled.div`
    display:flex;
    font-size: 1.8rem;

    .subTask{
        margin-left: 2rem;
        font-size: 1.4rem;
    }
`
export const TaskLabelP = styled.label`
    position: relative;
    padding-left: 30px;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 15px;
        height: 15px;
        border: 1px solid #000;
        border-radius: 5px;
    }
`
export const TaskCheckP = styled.input`
    display: none;

    &:checked + ${TaskLabelP}::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: #68B984;
        border-radius: 5px;
    }
`
export const SubTitle = styled.h1`
    font-size: 1.5rem;
`
export const AddSubContainer = styled.div`
    display:flex;
    gap: 1rem;
    margin-left: 2rem;
`
export const AddBtn = styled.button`
    border: none;
    background: none;
    color: #5E5E5E;
    font-size: 1.6rem;
`
export const AddInput = styled.input`
    border: none;
    background: none;
    outline: none;
    font-size: 1.6rem;
`
export const RightContent = styled.div`
    background: #DEDEDE; 
    width: 40%;
    padding-top: 2rem;
    border-radius: 0 0 15px 0;
    @media (max-width: 1100px){
        width: 100%;
        padding-bottom: 7rem;
        border-radius: 0 0 15px 15px;
    }

`
export const CateogiresTitle = styled.h1`
    padding-bottom: 2rem;
    padding-left: 1rem;
`
export const Infos = styled.form`
    display:flex;
    flex-direction:column;
    gap: 1rem;
    font-size: 1.5rem;
    padding-left: 1rem;
    color: rgba(0,0,0, .63);

`
export const Field = styled.div`
    display:flex;
    gap: 1rem;
`
export const Label = styled.label``
export const SelectCategorie = styled.select`
    border: none;
    background: none;
    outline: none;
    width: 4rem;
    height: 2rem;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background: #28A745;
`
export const Option = styled.option`
    width: 60px;
    padding: 6rem;
    background: white;
    color: black;
`
export const Line = styled.div`
    height: 2px;
    background-color: #ABABAB;
    width: 100%;
`
export const DateI = styled.input`
    background: none;
    border:none;
    border-bottom: 1px solid #343434;
    outline: none;
`
export const TextAreaField = styled.div`
    display:flex;
    width: 100%;
    flex-direction:column;
`
export const Description = styled.textarea`
    width: 96%;
    height: 160px;
    background: none;
    border: #aaa 2px solid;
    border-radius: 10px;
    resize: none;
    outline: none;
    padding: 1rem;

    @media (max-width: 1100px){
        height: 12rem;
    }
`
export const ButtonContainer = styled.div`
    display:flex;
    gap: 1rem;
    justify-content: end;
    margin: 1rem 1.5rem;

`
export const CancelBtn = styled.button`
    padding: .5rem;
    text-transform: uppercase;
    border: none;
    background-color: #FF4848;
    font-weight: bold;
    color: white;
    border-radius: 4px;
    cursor:pointer;
`
export const SaveBtn = styled.button`
    padding: .5rem;
    text-transform: uppercase;
    border: none;
    background-color: #343434;
    font-weight: bold;
    color: white;
    border-radius: 4px;
    cursor:pointer;

`