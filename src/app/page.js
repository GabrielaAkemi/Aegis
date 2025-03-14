"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import ImagemLogo from "./assets/image.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setShowButton(false);
    router.push("/login");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-[url('/matrix-bg.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute w-[100px] h-[100px] bg-blue-600 blur-[150px] rounded-full opacity-40"></div>
      <div className="absolute w-[50px] h-[50px] bg-purple-500 blur-[120px] rounded-full opacity-30 right-10 top-20"></div>

      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-black/90 p-12 rounded-3xl shadow-2xl text-center max-w-lg border-4 border-blue-600"
        onClick={() => setShowButton(true)} // Exibe o botão após o clique
      >
        {/* Logo */}
        <Image
          src={ImagemLogo}
          alt="Logo Aegis"
          width={150}
          height={150}
          className="mb-6 mx-auto"
        />

        {/* Título (exemplo de uso do ícone) */}
        <h1 className="text-white text-6xl font-extrabold tracking-wide flex items-center justify-center gap-2">
          <ShieldCheck className="w-10 h-10" />
          Aegis
        </h1>

        {/* Descrição */}
        <p className="mt-6 text-gray-300 text-lg font-medium">
          Navegue com segurança e confiança.
        </p>

        {/* Botão de ação (exibe após o clique) */}
        {showButton && (
          <motion.button
            onClick={handleButtonClick}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all"
          >
            Começar
          </motion.button>
        )}
      </motion.div>

      <footer className="absolute bottom-4 text-gray-600 text-sm">
        © 2025 Aegis. Todos os direitos reservados.
      </footer>
    </div>
  );
}