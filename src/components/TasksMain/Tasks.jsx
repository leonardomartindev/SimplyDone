import { useContext, useState } from "react";
import {
  AddTaskBtn,
  DelTaskBtn,
  EditTaskBtn,
  FilterTitle,
  FormTask,
  InputTask,
  Items,
  MainContainer,
  Second,
  TaskCheck,
  TaskContainer,
  TaskLabel
} from "./Tasks.style";
import { BsPlusLg } from 'react-icons/bs';
import Config from "./ConfigPopup/Config";
import { v4 as uuidv4 } from 'uuid';
import AppContext from "../../context/AppContext";
import { FaUndo } from "react-icons/fa";

export default function Tasks() {
  // Contexto e estados
  const { tasks, setTasks, selectedFilter, showMenu, setDeletedTasks, deletedTasks, showDeletedTasks, sectionTitle  } = useContext(AppContext);
  const [newTaskName, setNewTaskName] = useState('');
  const [editingTaskName, setEditingTaskName] = useState(null);
  const { selectedTask, setSelectedTask, selectedCategory, searchQuery } = useContext(AppContext);

  // Função para lidar com clique em uma tarefa
  const handleTaskClick = (task, event) => {
    if (event.target.type === "checkbox") {
      handleToggleComplete(task.name);
    } else {
      if (!event.target.classList.contains("no-popup")) {
        setSelectedTask(task);
      }
    }
  };

  // Função para adicionar ou editar tarefa
  const handleAddOrEditTask = (event) => {
    event.preventDefault();
    if (newTaskName === "") {
      alert("O nome da tarefa não pode estar vazio.");
      return;
    }

    if (editingTaskName) {
      const updatedTasks = tasks.map((task) =>
        task.name === editingTaskName ? { ...task, name: newTaskName } : task
      );
      setTasks(updatedTasks);
      setEditingTaskName(null);
    } else {
      if (tasks.some((task) => task.name === newTaskName)) {
        alert("Uma tarefa com esse nome já existe.");
        return;
      }
      const newTask = {
        id: uuidv4(),
        name: newTaskName,
        category: selectedCategory,
        dueDate: "",
        status: "andamento",
        subtasks: [],
        notes: "",
        priority: "",
        filterTask: selectedFilter,
      };
      setTasks([...tasks, newTask]);
    }
    setNewTaskName("");
  };

  // Função para lidar com pressionar Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddOrEditTask(event);
    }
  }

  // Função para editar tarefa
  const handleEditTask = (event, taskName) => {
    event.stopPropagation();
    setNewTaskName(taskName);
    setEditingTaskName(taskName);
  }

  // Função para deletar tarefa
  const handleDeleteTask = (event, taskName) => {
    event.stopPropagation();
    const deletedTask = tasks.find((task) => task.name === taskName);
    if (deletedTask) {
      setDeletedTasks([...deletedTasks, deletedTask]);
    }
    const updatedTasks = tasks.filter((task) => task.name !== taskName);
    setTasks(updatedTasks);
  };

  const handleRestoreTask = (taskToRestore) => {
    const updatedDeletedTasks = deletedTasks.filter(
      (task) => task.id !== taskToRestore.id
    );
    setDeletedTasks(updatedDeletedTasks);
    setTasks([...tasks, taskToRestore]); // Adicione a tarefa de volta às tarefas ativas se necessário.
  };
  

  // Função para alternar o status da tarefa
  const handleToggleComplete = (taskName) => {
    const updatedTasks = tasks.map(task =>
      task.name === taskName ? { ...task, status: task.status === 'andamento' ? 'ok' : 'andamento' } : task
    );
    setTasks(updatedTasks);
  }

  // Função para lidar com a mudança na consulta de pesquisa

  return (
    <MainContainer showmenu={showMenu}>
      <Items>
        <FilterTitle>{sectionTitle}</FilterTitle>
        <FormTask onSubmit={handleAddOrEditTask}>
          <AddTaskBtn type="submit"><BsPlusLg /></AddTaskBtn>
          <InputTask
            placeholder="Adicionar tarefa"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </FormTask>
        { showDeletedTasks ? (
          <div>
            {deletedTasks.map((task) => (
              <div className="containerDeletedTasks" key={task.id}>
                <li>{task.name}</li>
                <button className="restoreBtn" onClick={() => handleRestoreTask(task)}><FaUndo/></button>
              </div>
            ))}
          </div>
        ) : (

          tasks
          .filter((task) => {
            if (selectedCategory) {
              // Se uma categoria estiver selecionada na barra lateral,
              // filtrar somente por essa categoria
              return (
                task.category === selectedCategory &&
                (searchQuery === '' || task.name.toLowerCase().includes(searchQuery.toLowerCase()))
                );
              } else if (selectedFilter) {
              // Se um filtro estiver selecionado na barra lateral,
              // filtrar somente por esse filtro
              return (
                task.filterTask === selectedFilter &&
                (searchQuery === '' || task.name.toLowerCase().includes(searchQuery.toLowerCase()))
                );
              } else {
              // Se nenhum filtro ou categoria estiver selecionado,
              // exibir todas as tarefas
              return (
                searchQuery === '' || task.name.toLowerCase().includes(searchQuery.toLowerCase())
              );
            }
          })
          .map((task) => (
            <TaskContainer key={task.id} onClick={(event) => handleTaskClick(task, event)}>
              <TaskCheck
                id={task.name}
                type="checkbox"
                checked={task.status === 'ok'}
                onChange={() => handleToggleComplete(task.name)}
                />
              <TaskLabel htmlFor={task.name} className="no-popup">{task.name}</TaskLabel>
              <Second>
                <EditTaskBtn onClick={(event) => handleEditTask(event, task.name)} />
                <DelTaskBtn onClick={(event) => handleDeleteTask(event, task.name)} />
              </Second>
            </TaskContainer>
          )
          ))}
      </Items>
      {selectedTask && <Config task={selectedTask} />}
    </MainContainer>
  );
}
