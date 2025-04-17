"use client";

import React, { useRef, useState } from "react";

interface Message {
  sender: string;
  content: string;
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [recipient, setRecipient] = useState(""); 
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = () => {
    if (!username) {
      alert("Digite seu nome de usuário!");
      return;
    }

    socket.current = new WebSocket(`ws://localhost:8080/ws?username=${username}`);

    socket.current.onopen = () => {
      console.log("Conectado ao servidor WebSocket");
      setIsConnected(true);
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    socket.current.onclose = () => {
      console.log("Desconectado");
      setIsConnected(false);
    };
  };

  const sendMessage = () => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      const message = {
        sender: username,
        recipient,
        content,
      };
      socket.current.send(JSON.stringify(message));
      setMessages((prev) => [...prev, message]);
      setContent("");
    }
  };

  const disconnect = () => {
    if (socket.current) {
      socket.current.close();
      socket.current = null;
      setMessages([]);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Chat (WebSocket)</h2>

      {!isConnected ? (
        <>
          <input
            type="text"
            placeholder="Seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <button onClick={connect} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Conectar</button>
        </>
      ) : (
        <>
          <p style={{ textAlign: "center", color: "#555" }}>Conectado como <strong>{username}</strong></p>

          <div>
            <input
              type="text"
              placeholder="Destinatário"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <textarea
              placeholder="Mensagem"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              rows={4}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc", resize: "none" }}
            />
            <button onClick={sendMessage} style={{ width: "48%", padding: "10px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "4%" }}>Enviar</button>
            <button onClick={disconnect} style={{ width: "48%", padding: "10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Desconectar</button>
          </div>

          <hr />

          <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", borderRadius: "4px", padding: "10px", backgroundColor: "#fff" }}>
            <h4 style={{ color: "#333" }}>Mensagens:</h4>
            {messages.map((msg, index) => (
              <div key={index} style={{ marginBottom: "8px", padding: "8px", borderRadius: "4px", backgroundColor: msg.sender === username ? "#e1f5fe" : "#f1f1f1", textAlign: msg.sender === username ? "left" : "right" }}>
                <strong>{msg.sender}:</strong> {msg.content}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}