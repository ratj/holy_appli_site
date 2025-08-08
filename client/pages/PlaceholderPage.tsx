import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">
            Cette section est en cours de développement. 
            Contactez-nous pour plus d'informations sur nos fonctionnalités.
          </p>
        </div>

        <Card className="border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-green-800">Page en construction</CardTitle>
            <CardDescription>
              Nous travaillons activement sur cette section pour vous offrir la meilleure expérience possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              En attendant, n'hésitez pas à découvrir nos autres fonctionnalités ou à demander une démonstration 
              personnalisée de Holy Appli.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                💬 Demander une démonstration
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Nous contacter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Fonctionnalités principales de Holy Appli
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">🚁 Surveillance par Drone</h3>
              <p className="text-sm text-gray-600">Cartographie multispectrale automatisée</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">🌱 Suivi Phénologique</h3>
              <p className="text-sm text-gray-600">Calendrier de croissance BBCH intelligent</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">🌿 Agriculture Bio</h3>
              <p className="text-sm text-gray-600">Gestion optimisée des intrants biologiques</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">📱 App Mobile</h3>
              <p className="text-sm text-gray-600">Interface terrain et back-office complets</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">📡 Capteurs IoT</h3>
              <p className="text-sm text-gray-600">Surveillance continue des conditions</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">📊 Analytics</h3>
              <p className="text-sm text-gray-600">Modélisation prédictive des rendements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
