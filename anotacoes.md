## Inicia
docker run --name sql_server_demo -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=1Secure*Password1' -e 'MSSQL_PID=Enterprise' -p 1433:1433 -d microsoft/mssql-server-linux:2017-latest

## Roda
docker exec -it sql_server_demo sqlcmd -S localhost -U sa -P 1Secure*Password1
docker exec -it sql_server_demo /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 

<!-- Horários -->
09:00 

10:00 - 15min

12:00 ou 13:00

16:00 - 15min 

17:00


================

HTML
JavaScript === Linguagem que valida formulario

NetScape (Brendan Eich)
- ECMA 262
    - JavaScript
    - Action Script

- Ryan Dahl 
    - V8 === C++
    - Roda javascript rapido pra k7
    - File system
    - Node - https://github.com/libuv/libuv + V8
    - "Node é javascript no lado do servidor"
    - "Node é javascript rodando fora do browser"
    - http://johnny-five.io/


============

# Base da aplicação

- Casa do código
    - Gerenciamento de livros da plataforma 
        - Cadastro
        - Puxar os dados
        - Puxar um dado
        - ...

# Ambiente de desenvolvimento
- Nodemon é fundamental
- Mundo JavaScript
    - Tudo você configura