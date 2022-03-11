<div align="center"> <h2> Consumo da API do Studio Ghibli </h2> </div>

Hello!
Aprendendo um pouco mais sobre APIs, NodeJS e suas ferramentas, fiz um pequeno projeto para acessar a API com todos os filmes do Studio Ghibli.<br>
<a href="https://beatavernaro.github.io/studio-ghibli-consumo-api/"> Link para visualização </a>

<h2> O que o projeto faz? </h2>
Na tela inicial é exibido, de acordo com os dados da API, algumas informações sobre os filmes: Título, diretor, ano de lançamento, descrição e imagem.
Através do metodo fetch() eu requisito os dados da API que me devolve um array com todos os dados dos filmes. Escolhi exibir na tela inicial apenas o título, diretor, ano de lançamento, descrição e imagem.

<h2> Como foi feito? </h2>
Através do metodo fetch() é requisitado os dados da API que devolve um array com todos os dados dos filmes. Para acessar apenas os dados que preciso e exibir os itens da array uso um loop for que exibe os cards conforme recebe os dados da API. Em descrições com mais de 400 caracteres uso o metodo split() para procurar o segundo ponto final e exibir somente uma parte dessa descrição tornando o card menor.
Por ser uma aplicação com JavaScript puro, não uso React, portanto os cards são criados utilizando o metodo .innerHTML do DOM. Entendo que esse não é o jeito mais pratico mas o objetivo do projeto era apenas acessar uma API e foi concluído com sucesso!

<h2> Atualizações futuras </h2>
Adicionar React a aplicação para facilitar o uso dos cards;
Dentro de cada card um botão 'SAIBA MAIS' para acesso a uma página exclusiva com mais informações sobre os filmes, personagens e ambientes;
Uma maneira melhor de 'diminuir' o tamanho das descrições de cada filme.

##

<h4> Dicas e sugestões são muito bem vindas! </h4>
