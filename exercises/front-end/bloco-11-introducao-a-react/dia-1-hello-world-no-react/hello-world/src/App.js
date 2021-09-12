import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas =['Acordar', 'Tomar café', 'Escovar os dentes', 'Fazer os exercicios da Trybe'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => task(tarefa)) }</ul>
    );
  }
}

export default App;
