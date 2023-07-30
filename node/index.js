const express = require('express')

const app = express()

const port = 3000
const config = {
    host:'ingrena-db',
    user:'anderson',
    password:'123456',
    database:'nodedb'
}
const mysql = require('mysql');
try {
    const connection = mysql.createConnection(config);
    let insert = `Insert into people (nome) values ('Anderson Rodrigues de Almeida');`
    connection.query(insert);
    connection.end(); 
} catch (error) {
    console.log(error);
    res.send(error);
}

app.get('/', (request,response)=>{     
    const connection = mysql.createConnection(config);
    let sql = "Select * from people order by id asc;";
    connection.query(sql,function (erro, result, fields){
        let linhas = '';
        console.log(erro);
        console.log(result,fields,);
        for (let w = 0; w < result.length; w++){
            let linha = `<tr>
                <td>${result[w].id}</td>
                <td>${result[w].nome}</td>
            </tr>`;
            linhas = linhas + linha;
        }
        
        let conteudo = `
            <h1>Full Cycle Novo</h1>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                </tr>
                ${linhas}                
            </table>
        `;
        response.send(conteudo);
    });
    connection.end();
});
app.get('/healthcheck', (request,response)=>{
    response.send('Funcionando');
});
app.listen(port, ()=>{
    console.log('Rodando na porta' + port)
    
})