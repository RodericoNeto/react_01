import logo from './1516869932899-removebg-preview.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import { ModalTemplate } from './components/Modal Template';
import CardTemplate from './components/CardTemplate';
import { useState } from 'react';

function App() {

  const [livro, setLivro] = useState({nome: `hary protein`, autor: `JK`})

  return (
    <div className="App">
      <ModalTemplate data={livro}></ModalTemplate>
    </div>
  );
}

export default App;
