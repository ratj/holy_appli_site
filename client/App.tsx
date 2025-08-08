import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { ScrollToTop } from "@/components/ScrollToTop";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-green-400/20 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Leaf className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                HOLY APPLI
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Accueil" },
              { to: "/about", label: "À propos" },
              { to: "/features", label: "Fonctionnalités" },
              { to: "/impact", label: "Impact" },
              { to: "/contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="text-green-100 hover:text-green-400 transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold border-0 shadow-lg">
                <MessageCircle className="mr-2 h-4 w-4" />
                🚀 Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-100 hover:text-green-400 transition-colors p-2"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 backdrop-blur-xl rounded-b-2xl border-t border-green-400/20">
            {[
              { to: "/", label: "Accueil" },
              { to: "/about", label: "À propos" },
              { to: "/features", label: "Fonctionnalités" },
              { to: "/impact", label: "Impact" },
              { to: "/contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="block px-3 py-2 text-green-100 hover:text-green-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="px-3 py-2">
              <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-full font-bold">
                <MessageCircle className="mr-2 h-4 w-4" />
                🚀 Démonstration
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.4) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.01, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Leaf className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                HOLY APPLI
              </span>
            </div>
            <p className="text-green-200 mb-6 max-w-md leading-relaxed">
              Plateforme d'<span className="text-green-400 font-semibold">intelligence artificielle</span> révolutionnaire
              pour l'<span className="text-emerald-400 font-semibold">agriculture biologique</span> à Madagascar et en Afrique.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 font-bold">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  🚀 Demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 font-bold">
                  <Mail className="mr-2 h-4 w-4" />
                  Partenaire
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-green-400">Navigation</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/about", label: "À propos" },
                { to: "/features", label: "Fonctionnalités" },
                { to: "/impact", label: "Impact" }
              ].map((item, index) => (
                <motion.li
                  key={item.to}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={item.to} className="text-green-200 hover:text-green-400 transition-colors font-medium">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-green-400">Contact Bio-Tech</h3>
            <ul className="space-y-3 text-green-200">
              <motion.li whileHover={{ x: 5 }} className="font-medium">
                🇲🇬 Antananarivo, Madagascar
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="font-medium">
                📧 contact@holyappli.mg
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="font-medium">
                📱 +261 34 12 345 67
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="font-medium">
                💬 WhatsApp 24/7
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-green-400/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-green-200">
            &copy; 2024 <span className="text-green-400 font-bold">Holy Appli</span> -
            Révolution Bio-Technologique. Tous droits réservés.
          </p>
          <motion.p
            className="text-sm text-green-300 mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌱 Powered by Quantum Agriculture AI 🚀
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
