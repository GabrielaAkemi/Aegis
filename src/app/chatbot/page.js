"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaChartBar } from "react-icons/fa";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowChat(true);
      setMessages([{ text: "Olá! Sou o Aegis Bot. Estou aqui para ajudar com questões de cibersegurança. Como posso te ajudar hoje?", sender: "bot" }]);
    }, 5000);
  }, []);

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Entendi! Me fale mais sobre o seu problema.", sender: "bot" }]);
    }, 1500);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden relative">
      {!showChat && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
        >
          <motion.div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
            Bem-vindo ao Aegis Bot
          </motion.div>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Nossa inteligência artificial oferece monitoramento contínuo para sites e soluções eficazes de cibersegurança. Estou aqui para te ajudar!
          </motion.p>
          <motion.div
            className="mt-8 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Carregando o chat...
          </motion.div>
        </motion.div>
      )}

      {showChat && (
        <div className="h-full w-full flex flex-col justify-end p-6 bg-gradient-to-b from-black via-purple-900 to-blue-900 relative">
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-xs p-3 rounded-lg ${msg.sender === "bot" ? "bg-white text-black self-start" : "bg-gray-700 text-white self-end"}`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
          <div className="relative w-full p-4">
            <input
              type="text"
              className="w-full p-3 rounded-full bg-gray-800 text-white focus:outline-none"
              placeholder="Digite uma mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}