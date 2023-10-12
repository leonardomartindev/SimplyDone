import { useContext, useState } from "react";
import {
  AddBtn,
  AddInput,
  AddSubContainer,
  CateogiresTitle,
  CloseIcon,
  ContainerPopup,
  Infos,
  LeftContent,
  LeftRightContainer,
  PopupBg,
  RightContent,
  SelectCategorie,
  SubTitle,
  TaskCheckP,
  TaskContainerP,
  TaskLabelP,
  TitleCg,
  TopContainer,
  Option,
  Line,
  DateI,
  Label,
  Description,
  SubContainer,
  Field,
  CancelBtn,
  SaveBtn,
  TextAreaField,
  ButtonContainer,
} from "./Config.style";
import AppContext from "../../../context/AppContext";
import propTypes from "prop-types";

export default function Config({ task }) {
  // Contexto e estados
  const {
    setSelectedTask,
    categories,
    tasks,
    priority,
    setTasks,
  } = useContext(AppContext);
  const [newSubtaskName, setNewSubtaskName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(task.category);
  const [selectedPriority, setSelectedPriority] = useState(task.priority);
  const [selectedDueDate, setSelectedDueDate] = useState(task.dueDate);
  const [subtasks, setSubtasks] = useState([...task.subtasks]);

  // Função para fechar a janela de configuração da tarefa
  const closeTaskPopup = () => {
    setSelectedTask(false);
  };

  // Função para adicionar uma subtarefa
  const handleAddSubtask = (e) => {
    e.preventDefault();
    if (newSubtaskName === "") {
      alert("O nome da subtarefa não pode estar vazio.");
      return;
    }

    // Atualize a lista de subtarefas no estado local
    const updatedSubtasks = [...subtasks, newSubtaskName];
    setSubtasks(updatedSubtasks);

    // Atualize a lista de subtarefas na tarefa atual
    task.subtasks = updatedSubtasks;

    setSelectedTask(task);
    setNewSubtaskName("");
  };

  // Função para salvar as alterações na tarefa
  const [description, setDescription] = useState(task.notes || "");
  const handleSaveChanges = (e) => {
    e.preventDefault();
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];

      let filterTask;
      const today = new Date();
      const tomorrow = new Date(today);

      tomorrow.setDate(tomorrow.getDate() + 1);

      if (selectedDueDate === today.toISOString().split("T")[0]) {
        filterTask = "hoje";
      } else if (selectedDueDate === tomorrow.toISOString().split("T")[0]) {
        filterTask = "amanha";
      } else if (selectedDueDate > tomorrow.toISOString().split("T")[0]) {
        filterTask = "algum dia";
      } else {
        filterTask = "inbox";
      }
      task.notes = description

      updatedTasks[taskIndex] = {
        ...task, // Mantenha as propriedades existentes da tarefa
        category: selectedCategory, // Atualize a categoria
        priority: selectedPriority, // Atualize a prioridade
        dueDate: selectedDueDate, // Atualize a data de vencimento
        subtasks: [...subtasks], // Atualize as subtarefas
        filterTask: filterTask, // Atualize o filtro da tarefa
      };
      setTasks(updatedTasks); // Defina o estado com a cópia atualizada
    }
    console.log(tasks);
  };

  return (
    <PopupBg>
      <ContainerPopup>
        <TopContainer>
          <TitleCg>Inbox</TitleCg>
          <CloseIcon onClick={closeTaskPopup} />
        </TopContainer>
        <LeftRightContainer>
          <LeftContent>
            <TaskContainerP>
              <TaskCheckP
                type="checkbox"
                id="taskPopup"
                defaultChecked={task.status === "ok"}
              />
              <TaskLabelP htmlFor="taskPopup">{task.name}</TaskLabelP>
            </TaskContainerP>
            <SubContainer>
              <SubTitle>Subtarefas</SubTitle>
              <Line />
              {task.subtasks.map((subtask, index) => (
                <TaskContainerP key={index}>
                  <TaskCheckP
                    className="subTask"
                    type="checkbox"
                    id={`subTaskPopup${index}`}
                  />
                  <TaskLabelP
                    className="subTask"
                    htmlFor={`subTaskPopup${index}`}
                  >
                    {subtask}
                  </TaskLabelP>
                </TaskContainerP>
              ))}
              <Line />
              <AddSubContainer>
                <AddBtn onClick={handleAddSubtask}>+</AddBtn>
                <AddInput
                  placeholder="Adicionar subtarefa"
                  value={newSubtaskName}
                  onChange={(e) => setNewSubtaskName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleAddSubtask(e);
                    }
                  }}
                />
              </AddSubContainer>
            </SubContainer>
          </LeftContent>
          <RightContent>
            <CateogiresTitle>Categorias</CateogiresTitle>
            <Infos>
              <Field>
                <Label htmlFor="selectCategory">Categoria: </Label>
                <SelectCategorie
                  id="selectCategory"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((categorie) => (
                    <Option key={categorie} value={categorie}>
                      {categorie}
                    </Option>
                  ))}
                </SelectCategorie>
              </Field>
              <Line />
              <Field>
                <Label htmlFor="date">Data de vencimento</Label>
                <DateI
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDueDate(e.target.value)}
                  value={selectedDueDate || ""}
                />
              </Field>
              <Line />
              <Field>
                <Label htmlFor="priority">Prioridade</Label>
                <SelectCategorie
                  id="priority"
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                >
                  {priority.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
                </SelectCategorie>
              </Field>
              <Line />
              <Field>
                <TextAreaField>
                  <Description 
                  placeholder="Descrição da tarefa"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                  <ButtonContainer>
                    <CancelBtn onClick={closeTaskPopup}>cancelar</CancelBtn>
                    <SaveBtn onClick={handleSaveChanges}>salvar</SaveBtn>
                  </ButtonContainer>
                </TextAreaField>
              </Field>
            </Infos>
          </RightContent>
        </LeftRightContainer>
      </ContainerPopup>
    </PopupBg>
  );
}

Config.propTypes = {
  task: propTypes.object.isRequired,
};
