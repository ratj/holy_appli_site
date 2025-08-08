import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

// Interface pour les données du formulaire
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  region: string;
  subject: string;
  message: string;
  hectares: string;
  crops: string;
}

// Configuration du transporteur Gmail
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application
    },
  });
};

// Mapping des types de demande
const subjectMap: Record<string, string> = {
  demo: "💬 Demander une démonstration",
  pilot: "🚀 Devenir partenaire pilote", 
  training: "📚 Formation équipe",
  support: "🛠️ Support technique",
  partnership: "🤝 Partenariat commercial",
  other: "📞 Autre demande"
};

// Formatage du message HTML
const formatEmailContent = (data: ContactFormData): string => {
  const subjectLabel = subjectMap[data.subject] || data.subject;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #065f46, #059669); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #065f46; }
        .value { margin-left: 10px; }
        .highlight { background: #ecfdf5; padding: 15px; border-left: 4px solid #059669; margin: 20px 0; }
        .footer { background: #1f2937; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🌱 Nouvelle Demande - Holy Appli</h1>
        <p>Demande reçue le ${new Date().toLocaleString('fr-FR')}</p>
      </div>
      
      <div class="content">
        <div class="highlight">
          <strong>Type de demande :</strong> ${subjectLabel}
        </div>
        
        <h3>👤 Informations Contact</h3>
        <div class="field"><span class="label">Nom :</span><span class="value">${data.name}</span></div>
        <div class="field"><span class="label">Email :</span><span class="value">${data.email}</span></div>
        ${data.phone ? `<div class="field"><span class="label">Téléphone :</span><span class="value">${data.phone}</span></div>` : ''}
        ${data.company ? `<div class="field"><span class="label">Société :</span><span class="value">${data.company}</span></div>` : ''}
        
        <h3>🌾 Informations Projet</h3>
        ${data.region ? `<div class="field"><span class="label">Région :</span><span class="value">${data.region}</span></div>` : ''}
        ${data.hectares ? `<div class="field"><span class="label">Surface :</span><span class="value">${data.hectares}</span></div>` : ''}
        ${data.crops ? `<div class="field"><span class="label">Cultures :</span><span class="value">${data.crops}</span></div>` : ''}
        
        <h3>💬 Message</h3>
        <div style="background: white; padding: 15px; border: 1px solid #d1d5db; border-radius: 8px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        
        <div class="highlight">
          <strong>⚡ Action Recommandée :</strong> Répondre dans les 2 heures pour maintenir notre engagement qualité.
        </div>
      </div>
      
      <div class="footer">
        <p>Holy Appli - Plateforme Agricole Intelligente Madagascar</p>
        <p>Cette demande a été envoyée automatiquement depuis le site web.</p>
      </div>
    </body>
    </html>
  `;
};

// Handler principal de la fonction
export const handler: Handler = async (event, context) => {
  // Gestion CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Gestion des requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Vérification de la méthode HTTP
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Méthode non autorisée' }),
    };
  }

  try {
    // Vérification des variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Variables d\'environnement Gmail manquantes');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Configuration email manquante',
          details: 'Les variables d\'environnement Gmail ne sont pas configurées' 
        }),
      };
    }

    // Parse des données du formulaire
    const formData: ContactFormData = JSON.parse(event.body || '{}');
    
    // Validation des données requises
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Données manquantes',
          details: 'Les champs nom, email, message et type de demande sont requis'
        }),
      };
    }

    // Création du transporteur
    const transporter = createTransporter();

    // Vérification de la connexion
    await transporter.verify();

    // Configuration de l'email à envoyer
    const mailOptions = {
      from: `"Holy Appli Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Votre email Gmail
      replyTo: formData.email,
      subject: `[Holy Appli] ${subjectMap[formData.subject] || formData.subject} - ${formData.name}`,
      html: formatEmailContent(formData),
      text: `
Nouvelle demande Holy Appli
Type: ${subjectMap[formData.subject] || formData.subject}

Contact:
- Nom: ${formData.name}
- Email: ${formData.email}
- Téléphone: ${formData.phone || 'Non renseigné'}
- Société: ${formData.company || 'Non renseigné'}

Projet:
- Région: ${formData.region || 'Non renseigné'}
- Surface: ${formData.hectares || 'Non renseigné'}
- Cultures: ${formData.crops || 'Non renseigné'}

Message:
${formData.message}

Reçu le ${new Date().toLocaleString('fr-FR')}
      `,
    };

    // Envoi de l'email
    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email envoyé avec succès:', result.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Email envoyé avec succès',
        messageId: result.messageId 
      }),
    };

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      }),
    };
  }
};
