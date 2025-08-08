import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Leaf, TreePine, Smartphone, Satellite, BarChart3, Camera, Map, Wifi, Database, Shield, Clock, ArrowRight, CheckCircle, Play, Brain, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  const handleWhatsAppDemo = () => {
    const whatsappNumber = "+33662110445";
    const message = "Bonjour ! Je viens de la page Fonctionnalités de Holy Appli et souhaite une démonstration de vos technologies. Pouvez-vous me montrer vos drones IA et intrants biologiques ?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
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

  const modules = [
    {
      id: "drone",
      title: "Module Drone Multispectral",
      icon: Plane,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      description: "Surveillance aérienne intelligente avec drones professionnels",
      features: [
        "Compatible DJI Mavic 3 Multispectral",
        "Cartographie orthomosaïque haute résolution",
        "Planification de vol automatisée",
        "Captures multi-temporelles programmées"
      ],
      capabilities: [
        { name: "Indices NDVI", desc: "+40% précision détection stress" },
        { name: "Indices NDRE", desc: "Alerte précoce 15 jours avant" },
        { name: "Imagerie NIR", desc: "Vision nocturne des maladies" },
        { name: "Export SIG", desc: "Intégration Google Earth Pro" }
      ]
    },
    {
      id: "phenology",
      title: "Suivi Phénologique",
      icon: Leaf,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      description: "Automatisation du calendrier de développement des cultures",
      features: [
        "Reconnaissance automatique des stades BBCH",
        "Modèles IA spécialisés par culture",
        "Prédictions basées sur données fiables",
        "Alertes personnalisées par stade"
      ],
      capabilities: [
        { name: "Floraison", desc: "Optimisation +25% pollinisation" },
        { name: "Nouaison", desc: "Prédiction charge fructifère" },
        { name: "Maturation", desc: "Timing récolte optimal" },
        { name: "Dormance", desc: "Planification interventions" }
      ]
    },
    {
      id: "bio",
      title: "Agriculture Biologique",
      icon: TreePine,
      color: "bg-gradient-to-r from-emerald-500 to-green-600",
      description: "Gestion optimisée des pratiques biologiques et durables",
      features: [
        "Base de données biopesticides certifiés",
        "Calcul optimisé",
        "Suivi rotation des cultures",
        "Certification"
      ],
      capabilities: [
        { name: "Compostage", desc: "ROI +180% vs chimique" },
        { name: "Biopesticides", desc: "-80% résidus toxiques" },
        { name: "Biodiversité", desc: "+300% insectes auxiliaires" },
        { name: "Traçabilité", desc: "Export Europe certifié" }
      ]
    }
  ];

  const mobileFeatures = [
    {
      icon: Camera,
      title: "Capture Multimédia",
      description: "Photos 4K, vidéos HD avec géolocalisation automatique"
    },
    {
      icon: Map,
      title: "Cartographie Terrain",
      description: "Création de cartes parcellaires temps réel"
    },
    {
      icon: Wifi,
      title: "Mode Offline",
      description: "Fonctionnement sans réseau, sync différée"
    },
    {
      icon: Database,
      title: "OCR Intelligent",
      description: "Numérisation automatique documents papier"
    }
  ];

  const iotSensors = [
    {
      type: "Température",
      range: "-20°C à +80°C",
      precision: "±0.1°C",
      impact: "+30% qualité conservation"
    },
    {
      type: "Humidité",
      range: "0-100% RH",
      precision: "±2%",
      impact: "-45% pertes post-récolte"
    },
    {
      type: "Vibration",
      range: "0-16G",
      precision: "±0.01G",
      impact: "Transport optimal fruits"
    },
    {
      type: "GPS",
      range: "Global",
      precision: "±1m",
      impact: "Traçabilité blockchain"
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
              🚀 Technologies de Pointe
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              <span className="text-green-400">Technologies</span> qui <span className="text-cyan-400">Transforment</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-green-400 font-bold">6 modules révolutionnaires</span> qui génèrent 
              <span className="text-emerald-400 font-bold"> +250% de ROI</span> pour nos partenaires agriculteurs.
              Découvrez les technologies qui révolutionnent l'agriculture à Madagascar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <Tabs defaultValue="drone" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TabsList className="w-full h-auto bg-transparent border-0 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-0">
                {modules.map((module) => (
                  <TabsTrigger
                    key={module.id}
                    value={module.id}
                    className="relative group h-auto p-6 bg-slate-900/80 backdrop-blur-xl border border-green-400/30 rounded-xl hover:border-green-400/60 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:border-green-400 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:scale-105 text-green-200 hover:text-green-100 data-[state=inactive]:shadow-none"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <motion.div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${module.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <module.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-sm leading-tight mb-1">{module.title}</h3>
                        <p className="text-xs opacity-70">Cliquez pour découvrir</p>
                      </div>
                    </div>

                    {/* Active glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300" />
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Module Description */}
                  <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <div className={`w-16 h-16 ${module.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <module.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {module.title}
                    </h2>
                    
                    <p className="text-lg text-green-200 mb-8">
                      {module.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {module.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          <span className="text-green-100">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button onClick={handleWhatsAppDemo} className="bg-green-600 hover:bg-green-700 text-white">
                      <Play className="mr-2 h-4 w-4" />
                      Voir en action
                    </Button>
                  </div>

                  {/* Capabilities Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {module.capabilities.map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card className="border-green-400/30 bg-slate-900/80 backdrop-blur-xl">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-green-400">
                              {capability.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-green-200">{capability.desc}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Application Mobile <span className="text-purple-400">Terrain</span>
            </h2>
            <p className="text-lg text-green-200 max-w-3xl mx-auto">
              <span className="text-purple-400 font-bold">Fonctionnant offline</span>, 
              <span className="text-cyan-400 font-bold"> synchronisation automatique</span>, 
              interface optimisée pour le terrain malgache.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {mobileFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center p-6 border-purple-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-purple-200">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IoT Sensors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Satellite className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Capteurs IoT <span className="text-orange-400">Connectés</span>
            </h2>
            <p className="text-lg text-green-200 max-w-3xl mx-auto">
              <span className="text-orange-400 font-bold">Surveillance 24/7</span> de vos cultures avec 
              <span className="text-cyan-400 font-bold"> transmission des données à temps réel</span> et 
              <span className="text-green-400 font-bold"> autonomie 3 mois</span>.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {iotSensors.map((sensor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 border-orange-400/30 bg-slate-900/80 backdrop-blur-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-orange-400">
                      {sensor.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-300">Plage:</span>
                      <span className="text-sm font-medium text-white">{sensor.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-300">Précision:</span>
                      <span className="text-sm font-medium text-white">{sensor.precision}</span>
                    </div>
                    <div className="mt-3 p-2 bg-green-500/10 rounded">
                      <span className="text-xs text-green-400 font-bold">Impact: {sensor.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Analytics & <span className="text-indigo-400">Intelligence Artificielle</span>
              </h2>
              
              <p className="text-lg text-green-200 mb-8">
                <span className="text-indigo-400 font-bold">Prédiction 99.8%</span> de précision pour 
                <span className="text-green-400 font-bold"> optimiser vos rendements</span> et 
                <span className="text-cyan-400 font-bold"> maximiser vos profits</span>.
              </p>
              
              <div className="space-y-4">
                {[
                  "Estimation automatique charge fructifère (+15% précision)",
                  "Modélisation prédictive rendements (ROI +250%)",
                  "Détection précoce maladies (-70% pertes)",
                  "Optimisation calendriers interventions",
                  "Rapports personnalisés exportation Europe"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-400 mr-3" />
                    <span className="text-green-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { metric: "99.8%", label: "Précision IA", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
                { metric: "2.5x", label: "ROI moyen", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
                { metric: "+40%", label: "Gain rendement", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
                { metric: "24/7", label: "Monitoring", color: "bg-gradient-to-r from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`${stat.color} text-white p-6 rounded-lg text-center shadow-lg`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold mb-2">{stat.metric}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à <span className="text-green-400">Multiplier vos Revenus</span> ?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Rejoignez nos <span className="text-green-400 font-bold">producteurs partenaires</span> qui 
              <span className="text-emerald-400 font-bold"> produisent</span> en quantité et en qualité tout en  répondant aux 
              <span className="text-cyan-400 font-bold"> normes internationales</span>.
            </p>
            <Button onClick={handleWhatsAppDemo} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              📞 Planifier une démonstration
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
