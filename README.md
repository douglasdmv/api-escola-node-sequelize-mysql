# API para escola de inglês
 API feita para um sistema de controle de alunos e turmas de uma escola de inglês. A idéia do projeto é fazer a matrícula de pessoas (podendo ser estudantes ou docentes), de acordo com sua turma e nível de aprendizado. Para isso, além do cadastro de pessoas, temos todos os processos de criação de níveis, turmas e matrículas.

## Ferramentas
- Node.JS
- Javascript
- Banco de Dados MySQL

## Features
- CRUD de Niveis, Turmas, Matrículas e Pessoas
- Possibilidade de restauração de arquivos que foram apagados do banco de dados
- Possibilidade de listar apenas usuários identificados como ativo
- Validação no cadastro de e-mails
- Consulta de matrículas referentes a algum estudante
- Consulta de turmas abertas em um intervalo de datas passado
- Consultar matrículas por turma e identificar quais estão lotadas
- Ao "desativar" um estudante, suas matrículas passam a constar como canceladas

## Diagrama Relacional do Projeto
![diagrama](/docs/diagrama-relacional.PNG)

## Rodando o projeto
 Se for baixar o projeto pela primeira vez, será necessário o comando `npm install` para gerar o package.json, e assim utilizar todas as dependências necessárias.
 
 É possível também verificar as bibliotecas desatualizadas, através do comando `npm outdated`. A partir disso, você pode colocar a versão desejada no package.json e em seguida utilizar o comando `npm update`.

 Como estamos utilizando um banco de dados MySQL local, deve-se verificar os parâmetros que estão sendo passados no config.json, em development. Com o banco conectado e a database 'escola_ingles' criada, temos os seeders prontos para popular as tabelas, para fins de testes. Para passarmos os dados no banco, serão necessários os comandos abaixo:

 ```
 npx sequelize-cli db:migrate
 npx sequelize-cli db:seed:all
 ```

 Com isso, já estamos preparados para rodar a aplicação, utilizando do comando `npm run start`.

## Comandos para início do desenvolvimento da API

### Baixando as dependências necessárias
 Como princípio de aprendizado, podemos destacar alguns dos comandos utilizados para o desenvolvimento da aplicação. Além da criação do projeto, utilizando o `npm init -y`, podemos destacar também a utilização do framework express, do sequelize, do mysql, entre outros. Se for necessária alguma versão em específico utilizar o @, como nesse exemplo: `npm install sequelize@5.21.7 sequelize-cli@5.5.1`.

 ```
 npm init -y
 npm install express
 npm install body-parser
 npm install --save-dev nodemon
 npm install mysql2
 npm install sequelize sequelize-cli
 ```

### Criação dos models e seeds para as tabelas
 ```
 npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
 npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
 npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
 npx sequelize-cli model:create --name Matriculas --attributes status:string
 ```

 Além da criação dos models, são necessárias também as associações das tabelas nos dois lados, assim como no exemplo abaixo:
 ```javascript
 //associação em niveis
 Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: 'nivel_id'
    })
 };

 //associação em turmas
 Turmas.associate = function(models) {
    Turmas.belongsTo(models.Niveis, {
      foreignKey: 'nivel_id'
    })
 }
 ```
 
 Em seguida, após feita a migração do banco, foram criados os seeds de cada um e populados com dados fictícios para teste da aplicação, com todos os dados prontos, são jogados todos os seeds para o banco, assim como nos comandos abaixo:
 ```
 npx sequelize-cli seed:generate --name demo-pessoa
 npx sequelize-cli seed:generate --name demo-nivel
 npx sequelize-cli seed:generate --name demo-turmas
 npx sequelize-cli seed:generate --name demo-matriculas

 npx sequelize-cli db:seed:all

 npm run start
 ``` 