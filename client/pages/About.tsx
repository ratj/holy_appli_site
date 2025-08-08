import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Heart, ArrowRight, CheckCircle, MessageCircle, Mail, MapPin, Phone, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const handleWhatsAppDemo = () => {
    const whatsappNumber = "+33662110445";
    const message = "Bonjour ! Je viens de la page À propos de Holy Appli et suis impressionné par le travail d'Ichtus IT. Je souhaite discuter d'un projet similaire. Pouvez-vous me mettre en contact ?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactIchtus = () => {
    const ichtusEmail = "contact@ichtus-it.com";
    const subject = "Demande de collaboration - Holy Appli";
    const body = "Bonjour,\n\nJ'ai découvert Holy Appli et suis impressionné par cette réalisation. Je souhaiterais discuter d'un projet similaire.\n\nCordialement";
    const mailtoUrl = `mailto:${ichtusEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techSkills = [
    { name: "HTML", category: "Frontend", level: "Expert" },
    { name: "CSS", category: "Frontend", level: "Expert" },
    { name: "JavaScript", category: "Frontend", level: "Expert" },
    { name: "React", category: "Frontend", level: "Expert" },
    { name: "React Native", category: "Mobile", level: "Expert" },
    { name: "Angular", category: "Frontend", level: "Avancé" },
    { name: "Vue.js", category: "Frontend", level: "Avancé" },
    { name: "Node.js", category: "Backend", level: "Expert" },
    { name: "Nest.js", category: "Backend", level: "Expert" },
    { name: "PHP", category: "Backend", level: "Avancé" },
    { name: "WordPress", category: "CMS", level: "Expert" },
    { name: "Shopify", category: "E-commerce", level: "Avancé" }
  ];

  const services = [
    {
      icon: Globe,
      title: "Design & Branding",
      description: "Identité visuelle complète et branding professionnel",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Site Web",
      description: "Applications web performantes et intuitives",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Application Mobile",
      description: "Apps iOS et Android avec React Native",
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Application Web",
      description: "Solutions web complexes et scalables",
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Optimisation SEO",
      description: "Référencement naturel et performance",
      color: "bg-gradient-to-r from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "UX/UI Design",
      description: "Expérience utilisateur et interface design",
      color: "bg-gradient-to-r from-emerald-500 to-green-600"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Partage",
      description: "Nous partageons nos connaissances et nos expériences pour faire grandir ensemble l'écosystème technologique.",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      title: "Humain",
      description: "L'humain est au centre de nos préoccupations. Nous créons des solutions qui améliorent la vie des utilisateurs.",
      color: "text-red-400"
    },
    {
      icon: CheckCircle,
      title: "Entraide",
      description: "L'entraide est naturelle chez nous. Nous collaborons pour atteindre l'excellence dans chaque projet.",
      color: "text-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-green-400/30 via-blue-500/30 to-purple-500/30 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <Badge className="mb-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-lg px-6 py-2 border-0">
              🏢 Développé par Ichtus IT
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              À propos de <span className="text-green-400">Holy Appli</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Holy Appli est une <span className="text-green-400 font-bold">innovation révolutionnaire</span> développée par 
              <span className="text-emerald-400 font-bold"> Ichtus IT</span>, agence française spécialisée dans les 
              <span className="text-cyan-400 font-bold"> applications web et mobile performantes</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ichtus IT Presentation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Company Description */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-blue-400">Ichtus IT</span> - Notre Expertise
              </h2>
              
              <p className="text-lg text-green-200 mb-6">
                Agence française basée à <span className="text-cyan-400 font-bold">Tourcoing</span>, 
                spécialisée dans le développement d'applications web et mobile 
                <span className="text-green-400 font-bold"> performantes, ergonomiques et intuitives</span>.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">+50 projets réalisés avec succès</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">Équipe de développeurs experts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">Solutions sur-mesure innovantes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">Accompagnement complet de A à Z</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleContactIchtus} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Contacter Ichtus IT
                </Button>
                <Button onClick={handleWhatsAppDemo} variant="outline" className="border-green-400 text-green-400 hover:bg-green-500/10">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Discuter projet similaire
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-green-400" />
                  Coordonnées Ichtus IT
                </h3>
                <div className="space-y-3 text-green-200">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                    <span>99A Boulevard Constantin Descat</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                    <span>59200 Tourcoing, France</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <span>+33 6 62 11 04 45</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-3" />
                    <span>contact@ichtus-it.com</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-xl text-white"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-4">Prêt à booster votre projet digital ?</h3>
                <p className="text-green-100 mb-4">
                  Ichtus IT développe des solutions sur-mesure adaptées à vos besoins spécifiques.
                </p>
                <Button onClick={handleContactIchtus} className="bg-white text-green-600 hover:bg-green-50 w-full font-bold">
                  Let's go ! Discutons ensemble
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos <span className="text-green-400">Valeurs</span> Fondamentales
            </h2>
            <p className="text-lg text-green-200">
              <span className="text-green-400 font-bold">Partage, Humain et Entraide</span> - 
              Il n'y a pas besoin de long discours pour décrire ces valeurs que nous retrouvons naturellement au sein de l'agence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="text-center p-6 border-green-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg h-full">
                  <CardHeader>
                    <value.icon className={`h-12 w-12 ${value.color} mx-auto mb-4`} />
                    <CardTitle className="text-white text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-200 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos <span className="text-cyan-400">Services</span> Experts
            </h2>
            <p className="text-lg text-green-200">
              De la conception à la mise en production, Ichtus IT vous accompagne sur tous les aspects de votre projet digital
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg h-full">
                  <CardHeader>
                    <div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg ${service.color}`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-cyan-400">{service.title}</CardTitle>
                    <CardDescription className="text-green-200">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stack <span className="text-purple-400">Technologique</span>
            </h2>
            <p className="text-lg text-green-200">
              Nos développeurs maîtrisent les technologies les plus performantes du marché
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 rounded-lg p-4 text-center border border-purple-400/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                >
                  <h3 className="font-bold text-white text-sm mb-1">{skill.name}</h3>
                  <p className="text-xs text-purple-300 mb-1">{skill.category}</p>
                  <Badge className={`text-xs ${
                    skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {skill.level}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Holy Appli Achievement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Holy Appli : Notre <span className="text-green-200">Chef-d'œuvre</span> Technologique
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              Fruit de <span className="font-bold">18 mois de développement</span>, Holy Appli révolutionne l'agriculture malgache 
              en combinant <span className="font-bold">IA, drones multispectraux, IoT et blockchain</span> dans une solution unique au monde.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">18 mois</div>
                <div className="text-sm opacity-90">Développement intensif</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">6 modules IA</div>
                <div className="text-sm opacity-90">Technologies avancées</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">+250% ROI</div>
                <div className="text-sm opacity-90">Résultats clients</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsAppDemo} size="lg" className="bg-white text-green-600 hover:bg-green-50 font-bold">
                <MessageCircle className="mr-2 h-5 w-5" />
                Voir Holy Appli en action
              </Button>
              <Button onClick={handleContactIchtus} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                <Mail className="mr-2 h-5 w-5" />
                Projet similaire avec Ichtus IT
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Besoin d'une <span className="text-green-400">Solution Sur-Mesure</span> ?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Comme Holy Appli, <span className="text-green-400 font-bold">Ichtus IT</span> peut développer 
              <span className="text-emerald-400 font-bold"> votre application révolutionnaire</span>. 
              Contactez-nous pour discuter de votre projet !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleContactIchtus} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4">
                <Mail className="mr-2 h-5 w-5" />
                Contacter Ichtus IT
              </Button>
              <Button onClick={handleWhatsAppDemo} size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-500/10 font-bold px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Demo Holy Appli
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
