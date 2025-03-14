"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import Image from "next/image";
import ImagemLogo from "../assets/image.png";


export default function LoginScreen() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleButtonClick = () => {
    router.push("/chatbot");
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-[#090408] via-[#1F72A4] to-[#F8D2CF] text-white">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isLogin ? 0 : "-100%" }}
        transition={{ duration: 0.8 }}
        className="w-1/2 flex items-center justify-center bg-[#1F72A4] p-10"
      >
        <Image
          src={ImagemLogo}
          alt="Logo Aegis"
          width={300}
          height={300}
          className="mb-6 mx-auto"
        />
      </motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isLogin ? 0 : "-100%" }}
        transition={{ duration: 0.8 }}
        className="w-1/2 flex items-center justify-center bg-white text-gray-800 p-10"
      >
        <div className="w-96 p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            {isLogin ? "Faça seu Login" : "Crie sua Conta"}
          </h2>

          {!isLogin && (
            <input
              type="text"
              placeholder="Nome Completo"
              className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleButtonClick}
            className="w-full p-3 bg-[#1F72A4] text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleForm}
            >
              {isLogin ? "Crie agora" : "Faça login"}
            </span>
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <FaFacebook className="text-blue-700 text-2xl cursor-pointer" />
            <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
            <FaApple className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
