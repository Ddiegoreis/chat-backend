# Chat Application (WebSocket)

This is a simple chat application built with React and WebSocket. Users can connect to a WebSocket server, send and receive messages in real-time, and see a list of available users to chat with.

## Features

- User authentication with a username.
- Real-time messaging using WebSocket.
- Display of available users for conversation.
- User-friendly interface with message history.

## Technologies Used

- React
- WebSocket
- HTML/CSS
- JavaScript/TypeScript

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/chat-frontend.git
   cd chat-frontend
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. Enter your username in the input field and click "Conectar" to connect to the WebSocket server.
3. Once connected, you will see a list of available users. Click on a user to set them as the recipient.
4. Type your message in the text area and press "Enviar" or hit "Enter" to send the message.
5. Click the logout icon to disconnect from the chat.

## WebSocket Server

This application requires a WebSocket server to function. You can set up a simple WebSocket server using Node.js or any other backend technology of your choice. Ensure that the server handles user connections and broadcasts messages to connected clients.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors of the libraries and frameworks used in this project.
- Special thanks to the open-source community for their support and resources.
