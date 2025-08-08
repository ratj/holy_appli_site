import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, TrendingUp, Users, Leaf, Award, Star, Quote, ArrowRight, Target, Globe, DollarSign, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Impact() {
  const navigate = useNavigate();

  const handleWhatsAppDemo = () => {
    const whatsappNumber = "+33662110445";
    const message = "Bonjour ! Je viens de la page Impact de Holy Appli et suis impressionné par vos résultats. Je souhaite rejoindre vos producteurs partenaires. Pouvez-vous me présenter votre programme ?";
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

  const madagascarStats = [
    { metric: "500+", label: "Hectares sous surveillance", icon: MapPin, color: "text-green-400", impact: "+40% rendements moyens" },
    { metric: "50+", label: "Producteurs partenaires", icon: Users, color: "text-blue-400", impact: "Revenus x2.5 en moyenne" },
    { metric: "35%", label: "Amélioration rendements", icon: TrendingUp, color: "text-emerald-400", impact: "Prix export premium +85%" },
    { metric: "25%", label: "Réduction pertes post-récolte", icon: Target, color: "text-orange-400", impact: "Économies 150k Ar/ha" }
  ];

  const economicImpact = [
    { region: "Région Atsinanana", hectares: 180, producteurs: 25, revenus: "+45%", export: "UE certifié" },
    { region: "Région SAVA", hectares: 120, producteurs: 15, revenus: "+38%", export: "Premium vanille" },
    { region: "Région Analamanga", hectares: 90, producteurs: 8, revenus: "+42%", export: "Bio certifié" },
    { region: "Région Boeny", hectares: 110, producteurs: 12, revenus: "+40%", export: "Export mangue" }
  ];

  const testimonials = [
    {
      name: "Rakoto Andrianina",
      role: "Producteur de litchi, Tamatave",
      avatar: "RA",
      quote: "Holy Appli a révolutionné ma plantation. Mes revenus ont triplé grâce à l'export Europe. Je vends maintenant 8000 Ar/kg contre 2500 Ar avant !",
      rating: 5,
      benefits: ["Export Europe certifié", "Prix premium x3", "Revenus 2.8M Ar/mois"],
      revenue: "+285% revenus"
    },
    {
      name: "Marie Razafy",
      role: "Coopérative SAVA Vanilla",
      avatar: "MR",
      quote: "Avec la traçabilité blockchain Holy Appli, notre vanille se vend 120€/kg en Europe contre 45€ avant. Un game-changer total !",
      rating: 5,
      benefits: ["Blockchain traçabilité", "Contrats sécurisés UE", "Vanille premium +167%"],
      revenue: "+167% prix vanille"
    },
    {
      name: "Jean-Pierre Randria",
      role: "Agronome, Ministère Agriculture",
      avatar: "JP",
      quote: "Holy Appli transforme l'agriculture malgache. Nos exportations bio ont augmenté de 340% en 18 mois. C'est la révolution qu'on attendait !",
      rating: 5,
      benefits: ["Politique nationale adoptée", "Formation 500+ agents", "Export +340%"],
      revenue: "Impact national"
    }
  ];

  const africaOpportunities = [
    { country: "Côte d'Ivoire", crop: "Cacao", potential: "2M+ hectares", status: "Pilote lancé", revenue: "+60% prix cacao" },
    { country: "Kenya", crop: "Café", potential: "600K hectares", status: "Étude en cours", revenue: "Premium café +120%" },
    { country: "Ghana", crop: "Mangue", potential: "400K hectares", status: "Partenariat signé", revenue: "Export UE +200%" },
    { country: "Sénégal", crop: "Arachide", potential: "800K hectares", status: "Négociation", revenue: "Bio premium +80%" }
  ];

  const sustainabilityMetrics = [
    { metric: "65%", label: "Réduction pesticides chimiques", progress: 65, impact: "Santé sols +80%" },
    { metric: "80%", label: "Adoption pratiques bio", progress: 80, impact: "Biodiversité +300%" },
    { metric: "45%", label: "Économie d'eau irrigation", progress: 45, impact: "Coûts -150k Ar/ha" },
    { metric: "90%", label: "Satisfaction utilisateurs", progress: 90, impact: "Renouvellement 95%" }
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
              📊 Impact Positif Mesuré
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              <span className="text-green-400">Impact</span> qui <span className="text-cyan-400">Transforme</span> Madagascar
            </h1>
            
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-green-400 font-bold">+revenus moyens</span>, 
              <span className="text-emerald-400 font-bold"> +producteurs enrichis</span>, 
              <span className="text-cyan-400 font-bold"> normes internationales</span>. 
              Découvrez les résultats concrets de nos partenaires agriculteurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Madagascar Statistics */}
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
              Résultats <span className="text-green-400">Mesurés</span> à Madagascar
            </h2>
            <p className="text-lg text-green-200">
              <span className="text-green-400 font-bold">Depuis 2023</span>, Holy Appli génère des 
              <span className="text-emerald-400 font-bold"> impacts concrets</span> pour nos partenaires
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {madagascarStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-6 border-green-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.metric}
                  </div>
                  <div className="text-sm text-gray-300 font-medium mb-3">{stat.label}</div>
                  <div className="text-xs text-green-400 font-bold bg-green-500/10 rounded px-2 py-1">
                    {stat.impact}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Economic Impact by Region 
          <motion.div
            className="bg-slate-900/80 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <DollarSign className="mr-3 h-6 w-6 text-green-400" />
              Impact Économique par Région
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {economicImpact.map((region, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-green-500/10 rounded-lg border border-green-400/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-green-400 mb-3">{region.region}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Surface surveillée:</span>
                      <span className="font-medium text-white">{region.hectares} ha</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Producteurs:</span>
                      <span className="font-medium text-white">{region.producteurs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Augmentation revenus:</span>
                      <span className="font-bold text-green-400">{region.revenus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Export:</span>
                      <span className="font-bold text-cyan-400">{region.export}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>*/}
        </div>
      </section>

      {/* Testimonials 
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
              Témoignages de nos <span className="text-green-400">Partenaires </span>
            </h2>
            <p className="text-lg text-green-200">
              Écoutez ceux qui ont <span className="text-green-400 font-bold">multiplié leurs productions</span> avec Holy Appli
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-slate-900/80 backdrop-blur-xl shadow-xl border-green-400/30">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-green-500/20 text-green-400 font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <Badge className="text-xs bg-green-500/20 text-green-400 mt-1">
                          {testimonial.revenue}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-400/30" />
                      <p className="text-green-100 italic pl-6">{testimonial.quote}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-400 text-sm">Résultats concrets:</h4>
                      {testimonial.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          <span className="text-green-200">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Sustainability Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Impact <span className="text-emerald-400">Environnemental</span> Positif
            </h2>
            <p className="text-lg text-green-200">
              Holy Appli favorise <span className="text-emerald-400 font-bold">l'agriculture durable</span> avec 
              <span className="text-green-400 font-bold"> des résultats mesurables</span>
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {sustainabilityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-lg shadow-lg border border-emerald-400/30"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-white">{metric.label}</h3>
                  <span className="text-2xl font-bold text-emerald-400">{metric.metric}</span>
                </div>
                <Progress value={metric.progress} className="h-3 mb-3" />
                <div className="text-xs text-emerald-400 font-bold bg-emerald-500/10 rounded px-2 py-1">
                  {metric.impact}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Africa Expansion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Expansion <span className="text-blue-400">Afrique</span> en Cours
            </h2>
            {/* Africa Expansion 
            <p className="text-lg text-green-200">
              <span className="text-blue-400 font-bold">4 pays africains</span> adoptent déjà nos solutions avec 
              <span className="text-green-400 font-bold"> partenariats gouvernementaux</span>
            </p>*/}
          </motion.div>

          {/* Africa Opportunities 
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {africaOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-slate-900/80 backdrop-blur-xl shadow-lg border-blue-400/30">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-blue-400">{opportunity.country}</CardTitle>
                        <CardDescription className="text-gray-300">Culture: {opportunity.crop}</CardDescription>
                      </div>
                      <Badge 
                        className={`${
                          opportunity.status === 'Pilote lancé' ? 'bg-green-500/20 text-green-400' :
                          opportunity.status === 'Partenariat signé' ? 'bg-blue-500/20 text-blue-400' :
                          opportunity.status === 'Étude en cours' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {opportunity.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Potentiel marché:</span>
                        <span className="font-bold text-blue-400">{opportunity.potential}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Impact revenus:</span>
                        <span className="font-bold text-green-400">{opportunity.revenue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>*/}
        </div>
      </section>

      {/* Partnership Program */}
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
              <h2 className="text-3xl font-bold text-white mb-6">
                Formation & <span className="text-green-400">Accompagnement</span> Total
              </h2>
              <p className="text-lg text-green-200 mb-8">
                <span className="text-green-400 font-bold">100% de nos partenaires</span> atteignent 
                <span className="text-emerald-400 font-bold"> rapidement la rentabilité </span> grâce à notre 
                <span className="text-cyan-400 font-bold"> accompagnement personnalisé</span>.
              </p>
              
              <div className="space-y-4">
                {[
                  "Formation personalisée",
                  "Support 24/7 français/malgache/anglais",
                  "Mise à jour et nouvelles variétés",
                  "Assistance certification et bonnes pratiques",
                  "Réseau de partenaire & contrats sécurisés"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-green-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-xl text-white shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Programme Partenaire Elite</h3>
                <p className="text-green-100 mb-6">
                  Rejoignez nos <span className="font-bold"> producteurs partenaires</span> qui ont 
                  <span className="font-bold"> multiplié leurs productions</span>
                </p>
                
                <div className="space-y-3 text-left mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Augmentation de la production</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Augmentation des revenus</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Impact social</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Formation certification bio offerte</span>
                  </div>
                </div>
                
                <Button onClick={handlePartnerRedirect} className="bg-white text-green-600 hover:bg-green-50 w-full font-bold">
                  🚀 Candidater au programme
                </Button>
              </div>
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
              Rejoignez la <span className="text-green-400">Success Story</span> Holy Appli
            </h2>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsAppDemo} size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                🚀 Devenir partenaire elite
              </Button>
              <Button onClick={handlePartnerRedirect} size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-500/10 font-bold px-8 py-4">
                📊 Demander une étude complète
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
