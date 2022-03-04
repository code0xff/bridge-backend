# Bridge Evaluation Platform Server
## Install
- [Node.js](https://nodejs.org)
- [Postgresql](https://www.postgresql.org/download/)
  - You can set postgresql with docker. [Check here.](https://hub.docker.com/_/postgres)
## Start
- git clone
- Install
```bash
cd bridge-backend
npm install
```
- Set DB
```javascript 
// db/pool.js
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mariadb',
  database: 'xchain',
  connectionLimit: 20
})
```
- Create Tables with `sql/create_table.sql`
- Run
```bash
npm start
```