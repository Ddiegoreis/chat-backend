# Aplicativo de Chat (WebSocket)

Este é um aplicativo de chat simples construído com React e WebSocket. Os usuários podem se conectar a um servidor WebSocket, enviar e receber mensagens em tempo real e ver uma lista de usuários disponíveis para conversar.

## Funcionalidades

- Autenticação de usuário com um nome de usuário.
- Mensagens em tempo real usando WebSocket.
- Exibição de usuários disponíveis para conversa.
- Interface amigável com histórico de mensagens.

## Tecnologias Utilizadas

- React
- WebSocket
- HTML/CSS
- JavaScript/TypeScript

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seuusuario/chat-frontend.git
   cd chat-frontend
   ```

2. **Instale as dependências:**

   Certifique-se de que você tenha o Node.js instalado. Em seguida, execute:

   ```bash
   npm install
   ```

3. **Execute o aplicativo:**

   ```bash
   npm start
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

## Uso

1. Abra o aplicativo em seu navegador.
2. Digite seu nome de usuário no campo de entrada e clique em "Conectar" para se conectar ao servidor WebSocket.
3. Uma vez conectado, você verá uma lista de usuários disponíveis. Clique em um usuário para defini-lo como destinatário.
4. Digite sua mensagem na área de texto e pressione "Enviar" ou pressione "Enter" para enviar a mensagem.
5. Clique no ícone de logout para desconectar do chat.

## Servidor WebSocket

Este aplicativo requer um servidor WebSocket para funcionar. Você pode configurar um servidor WebSocket simples usando Node.js ou qualquer outra tecnologia de backend de sua escolha. Certifique-se de que o servidor gerencie as conexões de usuários e transmita mensagens para os clientes conectados.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões para melhorias ou novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Agradecimentos

- Agradecimentos aos contribuidores das bibliotecas e frameworks utilizados neste projeto.
- Agradecimentos especiais à comunidade de código aberto pelo seu apoio e recursos.
