interface RepositoryItemProps { //criando a interface para as propriedades do componente RepositoryItem
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
};

export function RepositoryItem(props: RepositoryItemProps) { //o formato dessas propriedades é do tipo RepositoryItemProps
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
};
