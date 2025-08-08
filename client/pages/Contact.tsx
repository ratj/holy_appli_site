import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Users, Leaf, ArrowRight, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    region: "",
    subject: "",
    message: "",
    hectares: "",
    crops: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWhatsAppDirect = () => {
    const whatsappNumber = "+33662110445";
    const message = "Bonjour ! Je viens de la page Contact de Holy Appli et souhaite discuter de vos solutions agricoles. Pouvez-vous m'appeler ?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || result.error || 'Erreur lors de l\'envoi');
      }

      // Succès
      setIsSubmitted(true);

      // Reset du formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        region: "",
        subject: "",
        message: "",
        hectares: "",
        crops: ""
      });

    } catch (err) {
      console.error('Erreur envoi email:', err);
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi du message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Siège Madagascar",
      details: ["Antananarivo, Madagascar", "Immeuble BOCAM Ankorondrano"],
      color: "text-green-400"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+261 34 12 345 67", "Support 24/7 disponible"],
      color: "text-blue-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@holyappli.mg", "support@holyappli.mg"],
      color: "text-purple-400"
    },
    {
      icon: Clock,
      title: "Heures d'ouverture",
      details: ["Lun-Ven: 8h00 - 17h00", "WhatsApp 24/7"],
      color: "text-orange-400"
    }
  ];

  const serviceTypes = [
    { value: "demo", label: "💬 Demander une démonstration", icon: MessageCircle },
    { value: "pilot", label: "🚀 Devenir partenaire pilote", icon: Users },
    { value: "training", label: "📚 Formation équipe", icon: Calendar },
    { value: "support", label: "🛠️ Support technique", icon: Phone },
    { value: "partnership", label: "🤝 Partenariat commercial", icon: Leaf },
    { value: "other", label: "📞 Autre demande", icon: Mail }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-green-400/30 via-blue-500/30 to-purple-500/30 animate-pulse" />
        </div>

        <motion.div
          className="max-w-md mx-auto text-center relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Message <span className="text-green-400">Envoyé</span> !
          </h1>
          
          <p className="text-lg text-green-200 mb-8">
            Merci pour votre intérêt ! Votre demande a été envoyée avec succès. Notre équipe vous contactera dans les
            <span className="text-green-400 font-bold"> 2 heures</span> pour discuter de votre projet.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-green-600 hover:bg-green-700 w-full font-bold"
            >
              Envoyer un autre message
            </Button>
            
            <Button onClick={handleWhatsAppDirect} className="bg-blue-600 hover:bg-blue-700 w-full font-bold">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp immédiat
            </Button>
            
            <Link to="/">
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-500/10 w-full font-bold">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

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
              💬 Parlons de Votre Projet
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              <span className="text-green-400">Contactez</span> nos <span className="text-cyan-400">Experts</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-green-400 font-bold">Réponse garantie en 2h</span>. 
              Notre équipe d'experts agricoles est prête à 
              <span className="text-emerald-400 font-bold"> transformer votre exploitation</span> avec nos 
              <span className="text-cyan-400 font-bold"> technologies révolutionnaires</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Informations de <span className="text-green-400">Contact</span>
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 bg-slate-900/50 backdrop-blur-xl rounded-lg p-4 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-green-200 text-sm">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <motion.div
                className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-xl text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">Actions Rapides</h3>
                <div className="space-y-3">
                  <Button onClick={handleWhatsAppDirect} className="bg-white text-green-600 hover:bg-green-50 w-full justify-start font-bold">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp: +261 34 12 345 67
                  </Button>
                  <Button className="bg-white text-green-600 hover:bg-green-50 w-full justify-start font-bold">
                    <Calendar className="mr-2 h-4 w-4" />
                    Planifier un appel expert
                  </Button>
                  <Button className="bg-white text-green-600 hover:bg-green-50 w-full justify-start font-bold">
                    <Mail className="mr-2 h-4 w-4" />
                    Télécharger brochure complète
                  </Button>
                </div>
              </motion.div>

              {/* Success Stats */}
              <motion.div
                className="bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-lg font-bold text-white mb-4">Nos Résultats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-200">Réponse moyenne:</span>
                    <span className="font-bold text-green-400">&lt; 2 heures</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">Taux de satisfaction:</span>
                    <span className="font-bold text-green-400">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">Projets réussis:</span>
                    <span className="font-bold text-green-400">50+</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl border-green-400/30 bg-slate-900/80 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Parlez-nous de votre <span className="text-green-400">Projet Agricole</span>
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    Remplissez ce formulaire et recevez une <span className="text-green-400 font-bold">proposition personnalisée</span> sous 24h
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-green-200">Nom complet *</Label>
                        <Input
                          id="name"
                          placeholder="Votre nom et prénom"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="bg-slate-800/50 border-green-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-green-200">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="bg-slate-800/50 border-green-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-green-200">Téléphone</Label>
                        <Input
                          id="phone"
                          placeholder="+261 XX XX XX XXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-slate-800/50 border-green-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-green-200">Société/Exploitation</Label>
                        <Input
                          id="company"
                          placeholder="Nom de votre entreprise"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-slate-800/50 border-green-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="region" className="text-green-200">Région</Label>
                        <Select onValueChange={(value) => handleInputChange('region', value)}>
                          <SelectTrigger className="bg-slate-800/50 border-green-400/30 text-white">
                            <SelectValue placeholder="Sélectionnez votre région" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="antananarivo">Antananarivo</SelectItem>
                            <SelectItem value="atsinanana">Atsinanana (Tamatave)</SelectItem>
                            <SelectItem value="sava">SAVA (Sambava)</SelectItem>
                            <SelectItem value="boeny">Boeny (Mahajanga)</SelectItem>
                            <SelectItem value="diana">Diana (Antsiranana)</SelectItem>
                            <SelectItem value="other">Autre région</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hectares" className="text-green-200">Surface (hectares)</Label>
                        <Input
                          id="hectares"
                          placeholder="ex: 50 ha"
                          value={formData.hectares}
                          onChange={(e) => handleInputChange('hectares', e.target.value)}
                          className="bg-slate-800/50 border-green-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="crops" className="text-green-200">Cultures principales</Label>
                      <Input
                        id="crops"
                        placeholder="ex: Litchi, Vanille, Girofle..."
                        value={formData.crops}
                        onChange={(e) => handleInputChange('crops', e.target.value)}
                        className="bg-slate-800/50 border-green-400/30 text-white placeholder:text-gray-400"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-green-200">Type de demande *</Label>
                      <Select onValueChange={(value) => handleInputChange('subject', value)} required>
                        <SelectTrigger className="bg-slate-800/50 border-green-400/30 text-white">
                          <SelectValue placeholder="Choisissez le type de demande" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-green-200">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet, vos objectifs de revenus, vos questions..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        className="bg-slate-800/50 border-green-400/30 text-white placeholder:text-gray-400"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-400/30 rounded-lg p-4"
                      >
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="h-5 w-5 text-red-400" />
                          <p className="text-red-300 text-sm">{error}</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-600/50 text-white text-lg py-6 font-bold"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Envoyer ma demande
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-400/30">
                      <p className="text-xs text-green-300 text-center">
                        <span className="font-bold">Engagement Holy Appli:</span> Réponse garantie sous 2h en semaine. 
                        Vos données sont sécurisées et ne seront jamais partagées.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions <span className="text-green-400">Fréquentes</span>
            </h2>
            <p className="text-lg text-green-200">
              Réponses rapides à vos questions les plus courantes
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                q: "Quel investissement pour commencer ?",
                a: "À partir de 2M Ar pour 10 hectares. ROI garanti 250% en 18 mois ou remboursement."
              },
              {
                q: "Formation nécessaire ?",
                a: "Formation complète 5 jours sur site incluse + certification. Support 24/7 ensuite."
              },
              {
                q: "Fonctionne sans internet ?",
                a: "Oui, mode offline complet. Synchronisation automatique dès connexion disponible."
              },
              {
                q: "Support en malgache ?",
                a: "Équipe trilingue français/malgache/anglais. Support technique 24/7 garanti."
              },
              {
                q: "Compatible toutes cultures ?",
                a: "Litchi, vanille, girofle optimisés. Café, mangue en développement 2024."
              },
              {
                q: "Délai pour résultats ?",
                a: "Premiers résultats en 3 mois. Revenus doublés garantis en 18 mois maximum."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-4 border-green-400/30 bg-slate-900/80 backdrop-blur-xl">
                  <h3 className="font-bold text-green-400 mb-2">{faq.q}</h3>
                  <p className="text-sm text-green-200">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
