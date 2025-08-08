import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  const whatsappNumber = "+33662110445"; // Numéro WhatsApp Holy Appli
  const message = "Bonjour ! Je suis intéressé par Holy Appli et souhaite en savoir plus sur vos solutions agricoles intelligentes.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: 180, x: 100 }}
      animate={{ scale: 1, rotate: 0, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 1.5
      }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="group relative w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:shadow-green-500/70"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
          boxShadow: [
            "0 15px 40px rgba(34, 197, 94, 0.4)",
            "0 25px 60px rgba(34, 197, 94, 0.6)",
            "0 15px 40px rgba(34, 197, 94, 0.4)"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -15, 15, -15, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-green-300"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-cyan-400"
          animate={{
            scale: [1, 2.6, 1],
            opacity: [0.4, 0, 0.4]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />

        {/* WhatsApp Icon */}
        <MessageCircle className="h-10 w-10 text-white relative z-10" />
        
        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white"
          animate={{
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="text-white text-xs font-bold">!</span>
        </motion.div>

        {/* Tooltip */}
        <div className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-3 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-2xl">
          💬 Contactez-nous sur WhatsApp
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.button>
    </motion.div>
  );
}
