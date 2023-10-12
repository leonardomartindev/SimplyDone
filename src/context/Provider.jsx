import { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

    const [showMenu, setShowMenu] = useState("false");
    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("");
    
    const initialCategories = ["Trabalho", "Faculdade", "Personal"];
    const [categories, setCategories] = useState(initialCategories);
    const [priority, setPriority] = useState(["p1","p2","p3", "p4"]);
    const [tasks, setTasks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("inbox")
    const [searchQuery, setSearchQuery] = useState('');
    const [deletedTasks, setDeletedTasks] = useState([]);
    const [showDeletedTasks, setShowDeletedTasks] = useState(false);
    const [sectionTitle, setSectionTitle] = useState("inbox")

    const value = {
      sectionTitle,
      setSectionTitle,
      showDeletedTasks,
      setShowDeletedTasks,
      deletedTasks,
      setDeletedTasks,
      searchQuery,
      setSearchQuery,
      priority,
      setPriority,
      showMenu,
      setShowMenu,
      selectedTask,
      setSelectedTask,
      tasks,
      setTasks,
      categories,
      setCategories,
      selectedCategory,
      setSelectedCategory,
      selectedFilter,
      setSelectedFilter,
    };
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
}

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;

export default Provider;