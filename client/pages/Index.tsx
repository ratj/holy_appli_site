import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Leaf, MapPin, Smartphone, BarChart3, Shield, MessageCircle, Mail, Satellite, TreePine, Camera, LineChart, Play, CheckCircle, Zap, Brain, Database, Wifi, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleWhatsAppDemo = () => {
    const whatsappNumber = "+261341234567";
    const message = "Bonjour ! Je viens de visiter le site Holy Appli et souhaite une démonstration de vos technologies agricoles révolutionnaires. Pouvez-vous me présenter vos solutions d'agriculture biologique intelligente ?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePartnerRedirect = () => {
    navigate('/contact');
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

  const features = [
    {
      icon: Plane,
      title: t("home.feature1.title"),
      description: t("home.feature1.desc"),
      details: [t("home.feature1.detail1"), t("home.feature1.detail2"), t("home.feature1.detail3"), t("home.feature1.detail4")],
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      techLevel: t("home.feature1.level")
    },
    {
      icon: Leaf,
      title: t("home.feature2.title"),
      description: t("home.feature2.desc"),
      details: [t("home.feature2.detail1"), t("home.feature2.detail2"), t("home.feature2.detail3"), t("home.feature2.detail4")],
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      techLevel: t("home.feature2.level")
    },
    {
      icon: TreePine,
      title: t("home.feature3.title"),
      description: t("home.feature3.desc"),
      details: [t("home.feature3.detail1"), t("home.feature3.detail2"), t("home.feature3.detail3"), t("home.feature3.detail4")],
      color: "bg-gradient-to-r from-emerald-500 to-green-600",
      techLevel: t("home.feature3.level")
    },
    {
      icon: Brain,
      title: t("home.feature4.title"),
      description: t("home.feature4.desc"),
      details: [t("home.feature4.detail1"), t("home.feature4.detail2"), t("home.feature4.detail3"), t("home.feature4.detail4")],
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      techLevel: t("home.feature4.level")
    },
    {
      icon: Satellite,
      title: t("home.feature5.title"),
      description: t("home.feature5.desc"),
      details: [t("home.feature5.detail1"), t("home.feature5.detail2"), t("home.feature5.detail3"), t("home.feature5.detail4")],
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      techLevel: t("home.feature5.level")
    },
    {
      icon: Database,
      title: t("home.feature6.title"),
      description: t("home.feature6.desc"),
      details: [t("home.feature6.detail1"), t("home.feature6.detail2"), t("home.feature6.detail3"), t("home.feature6.detail4")],
      color: "bg-gradient-to-r from-indigo-500 to-purple-600",
      techLevel: t("home.feature6.level")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Simple animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-green-400/30 via-blue-500/30 to-purple-500/30 animate-pulse" />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-lg px-8 py-3 shadow-2xl border-0">
                {t("home.hero.badge")}
              </Badge>
            </motion.div>
            
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                {t("home.hero.title1")}
              </span>
              <br />
              <span className="text-white">
                {t("home.hero.title2")}
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-green-100 mb-10 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t("home.hero.subtitle")}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={handleWhatsAppDemo}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-6 text-xl font-bold shadow-2xl border-0"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  {t("home.hero.cta1")}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handlePartnerRedirect}
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-10 py-6 text-xl font-bold shadow-2xl backdrop-blur-sm"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  {t("home.hero.cta2")}
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Tech Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { metric: "99.7%", label: t("home.demo.stats.ai.precision"), icon: Brain },
                { metric: "0%", label: t("home.demo.stats.chemical.residues"), icon: Leaf },
                { metric: "50+", label: t("home.demo.stats.active.drones"), icon: Plane },
                { metric: "24/7", label: t("home.demo.stats.bio.monitoring"), icon: Satellite }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-black text-white mb-1">{stat.metric}</div>
                  <div className="text-sm text-green-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bio-Technology Emphasis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-green-400/30">
              <Leaf className="h-8 w-8 text-green-400 mr-4" />
              <span className="text-2xl font-bold text-white">{t("home.bio.section.badge")}</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t("home.bio.section.title")}
            </h2>

            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              {t("home.bio.section.subtitle")}
            </p>
          </motion.div>

          {/* Biological Products Showcase */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: t("home.bio.product1.title"),
                description: t("home.bio.product1.desc"),
                benefits: [t("home.bio.product1.benefit1"), t("home.bio.product1.benefit2"), t("home.bio.product1.benefit3"), t("home.bio.product1.benefit4")],
                color: "from-emerald-500 to-green-600"
              },
              {
                title: t("home.bio.product2.title"),
                description: t("home.bio.product2.desc"),
                benefits: [t("home.bio.product2.benefit1"), t("home.bio.product2.benefit2"), t("home.bio.product2.benefit3"), t("home.bio.product2.benefit4")],
                color: "from-green-500 to-emerald-600"
              },
              {
                title: t("home.bio.product3.title"),
                description: t("home.bio.product3.desc"),
                benefits: [t("home.bio.product3.benefit1"), t("home.bio.product3.benefit2"), t("home.bio.product3.benefit3"), t("home.bio.product3.benefit4")],
                color: "from-cyan-500 to-green-500"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-gradient-to-br ${product.color} p-1 rounded-2xl group`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-green-100 mb-6">{product.description}</p>
                  <div className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        <span className="text-green-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certification Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[t("home.bio.cert1"), t("home.bio.cert2")].map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-green-400/30"
              >
                <span className="text-green-300 font-semibold">✓ {cert}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Drone Technology Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Drone Images */}
            <div className="space-y-8">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.pexels.com/photos/2164417/pexels-photo-2164417.jpeg"
                  alt={t("home.drone.alt")}
                  className="w-full h-80 object-cover rounded-2xl border border-cyan-400/30 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{t("home.drone.title")}</h3>
                    <p className="text-cyan-200 text-sm">{t("home.drone.subtitle")}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.pexels.com/photos/33326118/pexels-photo-33326118.jpeg"
                  alt={t("home.drone.analysis.alt")}
                  className="w-full h-64 object-cover rounded-2xl border border-green-400/30 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-2">{t("home.drone.analysis.title")}</h3>
                    <p className="text-green-200 text-sm">{t("home.drone.analysis.desc")}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Drone Technology Description */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-blue-400/30">
                  <Plane className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-blue-300 font-bold">{t("home.drone.section.badge")}</span>
                </div>

                <h2 className="text-4xl font-black text-white mb-6">
                  {t("home.drone.section.title")}
                </h2>

                <p className="text-xl text-blue-100 mb-8">
                  {t("home.drone.section.subtitle")}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, title: t("home.drone.spec1.title"), desc: t("home.drone.spec1.desc") },
                  { icon: Camera, title: t("home.drone.spec2.title"), desc: t("home.drone.spec2.desc") },
                  { icon: Satellite, title: t("home.drone.spec3.title"), desc: t("home.drone.spec3.desc") },
                  { icon: Zap, title: t("home.drone.spec4.title"), desc: t("home.drone.spec4.desc") }
                ].map((spec, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <spec.icon className="h-8 w-8 text-cyan-400 mb-3" />
                    <h3 className="font-bold text-white mb-1">{spec.title}</h3>
                    <p className="text-sm text-cyan-200">{spec.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t("home.features.section.title")}
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              {t("home.features.section.subtitle")}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-slate-900/90 backdrop-blur-xl border border-white/10 h-full shadow-2xl overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-xs font-bold">
                      {feature.techLevel}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-2xl"
                      style={{ background: feature.color }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-green-200">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-green-100">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: "2.5M+", label: t("home.big.stats.data.points"), color: "text-green-400", icon: Database },
                { number: "99.8%", label: t("home.big.stats.bio.detection"), color: "text-blue-400", icon: Brain },
                { number: "100%", label: t("home.big.stats.organic.agriculture"), color: "text-emerald-400", icon: Leaf },
                { number: "75%", label: t("home.big.stats.cost.reduction"), color: "text-cyan-400", icon: TrendingUp }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <div className={`text-4xl font-black ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-white font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("home.final.cta.title")}
          </motion.h2>

          <motion.p
            className="text-xl text-green-100 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("home.final.cta.subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleWhatsAppDemo}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 text-xl font-bold shadow-2xl border-0"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                {t("home.final.cta.button1")}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={handlePartnerRedirect}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-12 py-6 text-xl font-bold shadow-2xl backdrop-blur-sm"
              >
                <Mail className="mr-3 h-6 w-6" />
                {t("home.final.cta.button2")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
