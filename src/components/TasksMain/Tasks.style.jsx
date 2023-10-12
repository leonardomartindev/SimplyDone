import styled from "styled-components"
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'

export const MainContainer = styled.main`
    width: 100vw;
    display:flex;
    align-items: center;
    flex-direction:column;
    margin-top: 22vh;
    transition: margin 300ms ease;
    margin-left: ${props => props.showmenu === "true" ? "200px" : "0"};

    .containerDeletedTasks{
        display:flex;
        align-items:center;
        justify-content: space-between;
        font-size: 2rem;
    }
    .restoreBtn{
        border: none;
        background: none;
        font-size: 1.6rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    `
export const Items = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1rem;
`
export const FilterTitle = styled.h1`
    font-size: 5rem;

`
export const FormTask = styled.form`
    font-size: 2rem;
    display:flex;
    gap: 1.5rem;
    border-bottom: 1px solid #676767;
    color: #676767;
`
export const Task = styled.div``
export const First = styled.div`
    display:flex;
    gap: 1rem;
    align-items:center;

`
export const Second = styled.div`
    display:flex;
    gap: 1rem;
    align-items:center;
    font-size: 2.4rem;
`

export const AddTaskBtn = styled.button`
    background: none;
    border: none;
    display:flex;
    justify-content:center;
    align-items:center;
    color: #676767;
    font-size: 2rem;
`
export const InputTask = styled.input`
    font-size: 2rem;
    width: 70vw;
    outline: none;
    border: none;
    color: #676767;

`
export const TaskContainer = styled.div`
    display:flex;
    justify-content:space-between;
    font-size: 1.8rem;
    cursor: pointer;
`
export const TaskLabel = styled.label`
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    width: auto;
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
export const TaskCheck = styled.input`
    display: none;
    &:checked + ${TaskLabel}::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: #68B984;
        border-radius: 5px;
    }
`
export const EditTaskBtn = styled(MdModeEditOutline)`
    cursor: pointer;
`
export const DelTaskBtn = styled(AiFillDelete)`
    cursor: pointer;
`
 