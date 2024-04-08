import mysql from 'mysql2';

// Configurações de conexão
const connection = mysql.createConnection({
  host: 'localhost',  
  port: '3306',       
  user: 'casco',      
  password: 'teste',  
  database: 'db_cup'  
});

connection.connect()

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql intrução sql a ser executada
 * @param {string=id | [selecao, id]} valores valores passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns object da Promise
 */
export const consult = (sql, valores='', mensagemReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, valores, (erro, result) => {
        if(erro) return reject(mensagemReject)
        const row = JSON.parse(JSON.stringify(result))
        return resolve(row)
    })
})
}

export default connection;
