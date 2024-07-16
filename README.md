# Scraping Baggio Café

Este projeto utiliza o Puppeteer para realizar web scraping na página inicial da loja Baggio Café na Amazon. O script automatiza a extração de informações como títulos, preços e links dos produtos listados.

# Funcionalidades Atuais

Extração de Dados:
 - Captura automática de títulos, preços e links dos produtos listados na página principal.
Utilização de Puppeteer:
 - Biblioteca Node.js para controle programático do Chrome ou Chromium, permitindo navegação e interação com elementos da página.

# Como Usar

- Node.js instalado (versão 12 ou superior)
- NPM (Node Package Manager) ou Yarn

Clone o repositório:

~~~bash
git clone https://github.com/daltonfontes/poc-crawler-amz
~~~
Instale as dependências:

~~~bash
cd poc-crawler-amz
npm install   # ou yarn install
~~~
Execução
Para executar o script e obter os dados dos produtos da Baggio Café na Amazon:

~~~bash
npm start   # ou yarn start
~~~
Os dados extraídos serão exibidos no console e também salvos em um arquivo JSON na raiz do projeto.

Planos Futuros

 - Integração com Serviços de Mensagens: Adicionar funcionalidade para enviar automaticamente resumos diários dos produtos extraídos via Telegram, WhatsApp ou e-mail.
 - Suporte a Autenticação: Implementar suporte para capturar informações em páginas restritas que requerem autenticação.
- Logging e Monitoramento: Implementar logs detalhados e monitoramento para rastrear execuções e gerenciar erros de forma eficiente.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para sugestões, relatar problemas ou propor novas funcionalidades.
