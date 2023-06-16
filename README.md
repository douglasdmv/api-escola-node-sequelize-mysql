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
 Se for baixar o projeto pela primeira vez, será necessário o comando ˋnpm installˋ para gerar o package.json, e assim utilizar todas as dependências necessárias.
 
 É possível também verificar as bibliotecas desatualizadas, através do comando ´npm outdated´. A partir disso, você pode colocar a versão desejada no package.json e em seguida utilizar o comando ˋnpm updateˋ.

 Como estamos utilizando um banco de dados MySQL local, deve-se verificar os parâmetros que estão sendo passados no config.json, em development. Com o banco conectado e a database 'escola_ingles' criada, temos os seeders prontos para popular as tabelas, para fins de testes. Para passarmos os dados no banco, serão necessários os comandos abaixo:

 ˋˋˋ
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
 ˋˋˋ

