import './App.css'
import { ToDoList } from './components/ToDoList/ToDoList'
import { Home } from './pages/Home/Home';
import { Header } from './pages/Header/Header';
import { Done } from './pages/Done/Done';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/done' element = {<Done></Done>} ></Route>
          <Route path='/' element ={<Home></Home>}></Route>
          <Route path='/todolist' element ={<ToDoList></ToDoList>}></Route>
        </Routes>
      </Router>
      {/* <ToDoList></ToDoList> */}
      
      
    </div>
  )
}

export default App;