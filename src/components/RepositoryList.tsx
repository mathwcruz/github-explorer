import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository { //interface para o estado repositories
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]); //esse estado é do tipo Repository que recebeu um array, por isso o <Repository[]>

  useEffect(() => { //primeiro parâmetro é qual função executar
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json()) //pasasndo a resposta para JSON
    .then(data => setRepositories(data)) //passando os dados da resposta da api para a variável "repositories"
  }, []); //segundo parâmetro é quando irá executar essa função, se for um array vazio, irá executar só uma vez, senao, tem de passar um array com as variaveis que ao ser mudadas, irão ser atualizadas na tela. NÃO ESQUECER DE  PASSAR O SEGUNDO PARÂMETRO

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
      {repositories.map(repo => { //percorrendo o array de repositórios e setando os dados em tela
        return <RepositoryItem key={repo.name} repository={repo} />
      })}
      </ul>
    </section>
  );
};