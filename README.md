# Full Cycle 3.0 - Desafio Docker Node

Esse repositório contém três container:
- Aplicação (NodeJS);
- Servidor (Nginx);
- Banco de Dados (MySQL);

Ao acessar o endereço http://localhost, o usuário será direcionado para a aplicação Node com uma simples listagem de pessoas. A cada acesso ao endpoint, uma nova pessoa é cadastrada e listada.

## Execução do projeto

Primeiramente, na pasta `node`, execute `npm install` para instalar as dependências da aplicação.

Para executar o projeto basta rodar o comando:
```
docker-compose up -d
```

Após executar o comando, acesse no seu browser o endereço: [localhost](http://localhost).
