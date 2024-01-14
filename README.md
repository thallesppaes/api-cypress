# Cypress API Test

<p align="center">
  <img src="https://cypress.io/static/cypress-io-logo-social-share-8fb08b1d2d22f76b039d6392f2992e88.png" alt="Cypress Logo" width="200"/>
</p>

Este é um projeto de teste de API usando Cypress para garantir a robustez e confiabilidade de suas APIs.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/cypress-api-test.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd cypress-api-test
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

## Configuração

No arquivo `cypress.json`, você pode configurar variáveis de ambiente, URLs de API e outras configurações necessárias para o seu ambiente de teste.

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test

Isso iniciará o Cypress e executará os testes automaticamente.

<h3> Estrutura do Projeto</h3>
cypress/integration: Contém os arquivos de teste Cypress.</br>
cypress/support: Contém arquivos de suporte, como comandos personalizados e configurações globais.</br>

### Customizações
Sinta-se à vontade para personalizar os testes de acordo com suas necessidades. Adicione novos casos de teste, comandos personalizados ou ajuste as configurações conforme necessário.

### Relatórios
Os relatórios de testes são gerados automaticamente e estão disponíveis na pasta cypress/reports. Abra o arquivo HTML no navegador para visualizar os resultados.

### Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

### Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
