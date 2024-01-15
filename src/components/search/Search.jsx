// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Search.css";

const Search = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    const buscarCidades = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
        const dadosCidades = response.data.map(cidade => ({
          nome: cidade.nome.toUpperCase(),
          estado: cidade.microrregiao.mesorregiao.UF.sigla.toUpperCase(),
        }));
        setCidades(dadosCidades);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    };

    buscarCidades();
  }, []);

  const cidadesFiltradas = cidades.filter(cidade =>
    cidade.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
    cidade.estado.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <>
      <input
          type="text"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          list="cidadesList"
          className="form-input input-regiao"
          placeholder='Digite a cidade.'
      />
      <datalist id="cidadesList">
        {cidadesFiltradas.map((cidade, index) => (
          <option key={index} value={`${cidade.nome}, ${cidade.estado}`} />
        ))}
      </datalist>
    </>
  );
};


export default Search;
