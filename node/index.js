const express = require('express');

const app = express();
const port = 3000;
const config = {
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  createPerson()
    .then(() => {
      return listPeople();
    })
    .then((people) => {
      let listHtml = '<ul>';

      for (const person of people) {
        listHtml += `<li>${person.id} - ${person.name}</li>`;
      }

      listHtml += '</ul>';

      const html = '<h1>Full Cycle Rocks!</h1>' + listHtml;

      res.send(html);
    });
});

async function createPerson() {
  return new Promise((resolve) => {
    const sql = `INSERT INTO people (name) VALUES ('Pessoa ${new Date().getTime()}')`;
    connection.query(sql, () => {
      resolve();
    });
  });
}

async function listPeople() {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM people`;
    connection.query(sql, (_, result) => {
      resolve(result);
    });
  });
}

app.listen(3000, () => {
  console.log('Aplicação rodando na porta ' + port)
});