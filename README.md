<main>
  <h1 align="center">CHALLANGE-API 💻👨‍💻</h1>
  <p align="center">Trata-se de uma API REST para uma aplicação de entregas, onde podemos criar uma entrega, mudar o status de entrega, cancelar a entrega e acessar os dados da entrega</p>
  <br />
  <p align='center'>Para acessar a documentação em swagger da api e poder testa-la acesse: <a href='https://api-challenge-omega.vercel.app/docs'>https://api-challenge-omega.vercel.app/docs</a></p>
</main>

<section>
  <h2>O que é uma API? 🧐🤨</h2>
  <p>
    API é uma sigla para Application Programming Interface (Interface de programação de aplicação), 
    pode-se fazer uma analogia à um garçom, que serve aos clientes o que foi pedido, no conceito de API
    os clientes são os usuários da aplicação, que indiretamente se comunicam com a API, pedindo ou relatando
    situações, e recebendo os dados que foram pedidos.
  </p>
  
  
  <h2>Rotas 🚗🚙✈</h2>
  <p>
    Essa aplicação possui rotas, que são os tópicos da comunicação, por exemplo, a rota /login, serve para tratar os dados
    do login do usuário, a rota /cadastro serve para tratar sobre o cadastro.
  </p>
</section>

<br>
<br>
  
<section>
  <h2 align="center">Rotas programadas👩‍💻</h2>
  
  <h3>/api</h3>

  <p>Essa rota da acesso a outras rotas:</p>

  <ul>
    <li>/create-item-delivery</li>
    <li>/delete-item-delivery</li>
    <li>/get-item-delivery</li>
    <li>/get-many-item-delivery</li>
    <li>/update-item-delivery-status</li>
  </ul>  
  
  <h3>POST: /api/create-item-delivery</h3>
  <p>
    para acessar os dados dessa rota, deve-se dar um POST com o body possuindo o seguinte json:
  </p>
  
  ```json
  {
    "itemName": "nomeDoItem",
    "receiverCEP": "cepDoDestinatario",
    "receiverName": "nomeDoDestinatario",
    "senderCEP": "cepDoRemetente",
    "senderName": "nomeDoRemetente",
  }
  ```
  <br />
  <h3>GET: /api/get-many-item-delivery</h3>
  <p>
    para acessar os dados dessa rota, deve-se dar um GET enviando o nome do remetente ou do destinatario pela url:
  </p>
  
  ```json
    /api/delete-item-delivery?name=name
  ```
  <br />
  <h3>GET: /api/get-item-delivery</h3>
  <p>
    para acessar os dados dessa rota, deve-se dar um GET enviando o id do item pela url:
  </p>
  
  ```json
    /api/get-item-delivery?id=itemId
  ```
  <br />
  <h3>DELETE: /api/delete-item-delivery</h3>
  <p>
    para acessar os dados dessa rota, deve-se dar um DELETE enviando o id do item pela url:
  </p>
  
  ```json
    /api/delete-item-delivery?id=itemId
  ```
<br />
  <h3>PUT: /api/update-item-delivery-status</h3>
  <p>
    para acessar os dados dessa rota, deve-se dar um PUT enviando o id do item pela url:
  </p>
  
  ```json
    /api/update-item-delivery-status?id=itemId
  ```
</section>
