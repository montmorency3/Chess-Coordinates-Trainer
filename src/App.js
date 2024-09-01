import {useState} from "react";
import './App.css';
import Board from './components/Board';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[isAuth, setIsAuth] = useState(false)

  return (
    <div className="App" >
      <header className="App-header">
        {isAuth ? <Board /> : <Login onAuthentication={setIsAuth}/> }
      </header>
    </div>
  );
}

export default App;
