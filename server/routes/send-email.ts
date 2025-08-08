import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

// Interface para os dados do formulário
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

// Mapping dos tipos de demanda
const subjectMap: Record<string, string> = {
  demo: "💬 Demander une démonstration",
  pilot: "🚀 Devenir partenaire pilote", 
  training: "📚 Formation équipe",
  support: "🛠️ Support technique",
  partnership: "🤝 Partenariat commercial",
  other: "📞 Autre demande"
};

// Configuração do transportador Gmail
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Formatação do conteúdo do email
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

// Handler do endpoint
export const handleSendEmail = async (req: Request, res: Response) => {
  try {
    // Verificação das variáveis de ambiente
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Variáveis de ambiente Gmail não configuradas');
      return res.status(500).json({ 
        error: 'Configuração email não encontrada',
        details: 'Variáveis de ambiente GMAIL_USER e GMAIL_APP_PASSWORD devem estar configuradas' 
      });
    }

    const formData: ContactFormData = req.body;
    
    // Validação dos dados obrigatórios
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      return res.status(400).json({ 
        error: 'Dados obrigatórios não fornecidos',
        details: 'Os campos nome, email, mensagem e tipo de demanda são obrigatórios'
      });
    }

    // Criação do transportador
    const transporter = createTransporter();

    // Verificação da conexão
    await transporter.verify();

    // Configuração do email
    const mailOptions = {
      from: `"Holy Appli Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
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

    // Envio do email
    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email enviado com sucesso:', result.messageId);

    res.json({ 
      success: true,
      message: 'Email enviado com sucesso',
      messageId: result.messageId 
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
};
