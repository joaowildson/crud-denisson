import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:3001/pessoas';

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [form, setForm] = useState({ nome: '', idade: '', uf: '' });

  const fetchPessoas = async () => {
    const res = await axios.get(API);
    setPessoas(res.data);
  };

  useEffect(() => {
    fetchPessoas();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post(API, form);
    setForm({ nome: '', idade: '', uf: '' });
    fetchPessoas();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchPessoas();
  };

  return (
    <div>
      <h1>Pessoas</h1>
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" />
      <input name="idade" value={form.idade} onChange={handleChange} placeholder="Idade" />
      <input name="uf" value={form.uf} onChange={handleChange} placeholder="UF" />
      <button onClick={handleSubmit}>Salvar</button>

      <ul>
        {pessoas.map(p => (
          <li key={p.id}>
            {p.nome} - {p.idade} - {p.uf}
            <button onClick={() => handleDelete(p.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;