import {
  AddCategorie,
  Categorie,
  CategoriesContainer,
  CategoriesTitle,
  CircleIcon,
  ContainerAddCategorie,
  FilterIcon,
  Filters,
  FirstContainer,
  InputContainer,
  Line,
  LineAddCategorie,
  SideBarContainer,
  Trash,
  MinusIcon,
} from "./SideBar.style";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoToday } from "react-icons/io5";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import { useContext, useState } from "react";

export default function SideBar() {
  // Contexto e estados
  const {
    showMenu,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    setSelectedFilter,
    selectedFilter,
    setShowDeletedTasks,
    showDeletedTasks,
    setSectionTitle,
  } = useContext(AppContext);
  const [newCategory, setNewCategory] = useState("");

  // Função para remover categoria
  const handleRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter((category) => category !== categoryToRemove));
    if (selectedCategory === categoryToRemove) {
      setSelectedCategory(""); // Limpa a categoria selecionada se ela for removida
    }
  };

  // Função para adicionar categoria
  const handleAddCategory = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    if (
      newCategory.trim() !== "" &&
      categories.length < 5 &&
      !categories.includes(newCategory)
    ) {
      // Verifica se o input não está vazio
      setCategories([...categories, newCategory]); // Adiciona a nova categoria ao array
      setNewCategory(""); // Limpa o input
    }
  };

  // Função para lidar com clique em categoria
  const handleCategoryClick = (category) => {
    setSelectedFilter("");
    setSelectedCategory(category);
    setSectionTitle(category)
    console.log(category);
  };

  // Funções para lidar com cliques nos filtros
  const handleInboxClick = () => {
    setSelectedCategory("inbox");
    setSectionTitle("inbox")
    setShowDeletedTasks(false)
  };

  const handleTodayClick = () => {
    setSelectedCategory("");
    setSelectedFilter("hoje");
    setSectionTitle("hoje")
    console.log(selectedFilter);
    setShowDeletedTasks(false)
  };

  const handleTomorrowClick = () => {
    setSelectedCategory("");
    setSelectedFilter("amanha");
    setSectionTitle("amanhã")
    console.log(selectedFilter);
    setShowDeletedTasks(false)
  };

  const handleSomeDayClick = () => {
    setSelectedCategory("");
    setSelectedFilter("algum dia");
    setSectionTitle("algum dia")
    console.log(selectedFilter);
    setShowDeletedTasks(false)
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddCategory(event);
    }
  };

  const handleTrashClick = () => {
    setSectionTitle("lixeira")
    setShowDeletedTasks(!showDeletedTasks);
  };

  return (
    <SideBarContainer showmenu={showMenu}>
      <FirstContainer>
        <Filters>
          {/* Filtros */}
          <FilterIcon onClick={handleInboxClick}>
            <RiInboxArchiveFill /> Inbox
          </FilterIcon>
          <FilterIcon onClick={handleTodayClick}>
            <BsFillCalendarDayFill /> Hoje
          </FilterIcon>
          <FilterIcon onClick={handleTomorrowClick}>
            <IoToday /> Amanhã
          </FilterIcon>
          <FilterIcon onClick={handleSomeDayClick}>
            <BsFillCalendarDayFill /> Algum dia
          </FilterIcon>
        </Filters>
        <Line />
        {/* Lista de Categorias */}
        <CategoriesContainer>
          <CategoriesTitle>Categorias</CategoriesTitle>

          {categories.map((category) => (
            <Categorie key={category} onClick={() => handleCategoryClick(category)}>
              <CircleIcon />
              {category}
              <MinusIcon
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveCategory(category);
                }}
              />
            </Categorie>
          ))}

          {/* Formulário para adicionar categoria */}
          <ContainerAddCategorie onSubmit={handleAddCategory}>
            <InputContainer>
              <AiOutlinePlus onClick={handleAddCategory} />
              <AddCategorie
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder={"Adicionar nova categoria"}
                onKeyPress={handleKeyPress}
              />
            </InputContainer>
            <LineAddCategorie />
          </ContainerAddCategorie>
        </CategoriesContainer>
      </FirstContainer>
      <Trash onClick={handleTrashClick}>
        <FaTrash /> Lixeira
      </Trash>
    </SideBarContainer>
  );
}
