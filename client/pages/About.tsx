import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Heart, ArrowRight, CheckCircle, MessageCircle, Mail, MapPin, Phone, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const handleWhatsAppDemo = () => {
    const whatsappNumber = "+261341234567";
    const message = t("about.whatsapp.message");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactIchtus = () => {
    const ichtusEmail = "contact@ichtus-it.com";
    const subject = t("about.email.subject");
    const body = t("about.email.body");
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
    { name: "HTML", category: "Frontend", level: t("about.tech.level.expert") },
    { name: "CSS", category: "Frontend", level: t("about.tech.level.expert") },
    { name: "JavaScript", category: "Frontend", level: t("about.tech.level.expert") },
    { name: "React", category: "Frontend", level: t("about.tech.level.expert") },
    { name: "React Native", category: "Mobile", level: t("about.tech.level.expert") },
    { name: "Angular", category: "Frontend", level: t("about.tech.level.advanced") },
    { name: "Vue.js", category: "Frontend", level: t("about.tech.level.advanced") },
    { name: "Node.js", category: "Backend", level: t("about.tech.level.expert") },
    { name: "Nest.js", category: "Backend", level: t("about.tech.level.expert") },
    { name: "PHP", category: "Backend", level: t("about.tech.level.advanced") },
    { name: "WordPress", category: "CMS", level: t("about.tech.level.expert") },
    { name: "Shopify", category: "E-commerce", level: t("about.tech.level.advanced") }
  ];

  const services = [
    {
      icon: Globe,
      title: t("about.service1.title"),
      description: t("about.service1.desc"),
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: t("about.service2.title"),
      description: t("about.service2.desc"),
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: t("about.service3.title"),
      description: t("about.service3.desc"),
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: t("about.service4.title"),
      description: t("about.service4.desc"),
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: t("about.service5.title"),
      description: t("about.service5.desc"),
      color: "bg-gradient-to-r from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: t("about.service6.title"),
      description: t("about.service6.desc"),
      color: "bg-gradient-to-r from-emerald-500 to-green-600"
    }
  ];

  const values = [
    {
      icon: Users,
      title: t("about.value1.title"),
      description: t("about.value1.desc"),
      color: "text-blue-400"
    },
    {
      icon: Heart,
      title: t("about.value2.title"),
      description: t("about.value2.desc"),
      color: "text-red-400"
    },
    {
      icon: CheckCircle,
      title: t("about.value3.title"),
      description: t("about.value3.desc"),
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
              {t("about.hero.badge")}
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              {t("about.hero.title")}
            </h1>

            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t("about.hero.subtitle")}
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
                {t("about.ichtus.title")}
              </h2>

              <p className="text-lg text-green-200 mb-6">
                {t("about.ichtus.description")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">{t("about.ichtus.achievement1")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">{t("about.ichtus.achievement2")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">{t("about.ichtus.achievement3")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100">{t("about.ichtus.achievement4")}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleContactIchtus} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("about.ichtus.contact.button")}
                </Button>
                <Button onClick={handleWhatsAppDemo} variant="outline" className="border-green-400 text-green-400 hover:bg-green-500/10">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t("about.ichtus.discuss.button")}
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-green-400" />
                  {t("about.contact.title")}
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
                <h3 className="text-xl font-bold mb-4">{t("about.contact.cta.title")}</h3>
                <p className="text-green-100 mb-4">
                  {t("about.contact.cta.desc")}
                </p>
                <Button onClick={handleContactIchtus} className="bg-white text-green-600 hover:bg-green-50 w-full font-bold">
                  {t("about.contact.cta.button")}
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
              {t("about.values.main.title")}
            </h2>
            <p className="text-lg text-green-200">
              {t("about.values.main.desc")}
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
              {t("about.services.main.title")}
            </h2>
            <p className="text-lg text-green-200">
              {t("about.services.main.desc")}
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
              {t("about.tech.main.title")}
            </h2>
            <p className="text-lg text-green-200">
              {t("about.tech.main.desc")}
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
              {t("about.holyappli.title")}
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              {t("about.holyappli.desc")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">{t("about.holyappli.stat1")}</div>
                <div className="text-sm opacity-90">{t("about.holyappli.stat1.desc")}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">{t("about.holyappli.stat2")}</div>
                <div className="text-sm opacity-90">{t("about.holyappli.stat2.desc")}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">{t("about.holyappli.stat3")}</div>
                <div className="text-sm opacity-90">{t("about.holyappli.stat3.desc")}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsAppDemo} size="lg" className="bg-white text-green-600 hover:bg-green-50 font-bold">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("about.holyappli.button1")}
              </Button>
              <Button onClick={handleContactIchtus} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                <Mail className="mr-2 h-5 w-5" />
                {t("about.holyappli.button2")}
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
              {t("about.final.title")}
            </h2>
            <p className="text-xl text-green-100 mb-8">
              {t("about.final.desc")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleContactIchtus} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4">
                <Mail className="mr-2 h-5 w-5" />
                {t("about.final.button1")}
              </Button>
              <Button onClick={handleWhatsAppDemo} size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-500/10 font-bold px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("about.final.button2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
