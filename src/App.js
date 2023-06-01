
import { useState } from 'react';
import './App.css';
import api from './api';

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState('')
async function handleSearch(){
  if (input === ''){
    alert("Preencha algum CEP")
    return;
  }

  try{
     const response = await api.get (`${input}/json`)
     setCep(response.data)
  }

  catch{
    alert('Ops, erro ao buscar')
    setInput('')
  }
}
  return (
    <div className="App">
    <h1 className='title'>Buscador de CEP</h1>
    <div className='containerinput'>
      <input className='procure' type='text' placeholder='Pesquise algum cep'value={input} onChange={(e)=> setInput(e.target.value)}></input>


      <button onClick={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg></button>
    </div>
    
    {Object.keys(cep).length > 0 &&(

      //O nome "keys" foi escolhido para indicar claramente a funcionalidade desse método. Ao chamar Object.keys(), você está solicitando ao JavaScript que retorne as chaves do objeto como um array. Por exemplo, considere o seguinte objeto:
      
      //const pessoa = {
      //  nome: 'João',
       // idade: 30,
       // cidade: 'São Paulo'};
      
      //const chaves = Object.keys(pessoa);
     // console.log(chaves);  
     //(chaves) que no caso é ['nome', 'idade', 'cidade']


      <main className='main'>
      <h2>CEP: {cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
      
    </main>

    )}
    
    </div>
  );
}

export default App;
