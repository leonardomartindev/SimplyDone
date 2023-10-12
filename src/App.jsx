import { GlobalStyle } from './GlobalStyle'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Tasks from './components/TasksMain/Tasks'
import Provider from './context/Provider'

function App() {

  return (
    <Provider>
    <GlobalStyle/>
     <NavBar/>
     <SideBar/>
     <Tasks/>
    </Provider>
  )
}

export default App
