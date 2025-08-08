# Configuration Gmail pour Holy Appli

## Étapes de configuration

### 1. Activation de l'authentification à 2 facteurs
- Connectez-vous à votre compte Gmail
- Allez dans "Gérer votre compte Google" > "Sécurité"
- Activez la "Validation en deux étapes" si ce n'est pas déjà fait

### 2. Génération d'un mot de passe d'application
- Dans "Sécurité", cliquez sur "Mots de passe des applications"
- Sélectionnez "Autre (nom personnalisé)" 
- Tapez "Holy Appli Website"
- Notez le mot de passe généré (16 caractères)

### 3. Configuration des variables d'environnement
Remplacez les valeurs par défaut dans les variables d'environnement :

- `GMAIL_USER` : votre-email@gmail.com
- `GMAIL_APP_PASSWORD` : le mot de passe d'application généré (16 caractères sans espaces)

### 4. Dans Netlify (pour la production)
- Allez dans les paramètres de votre site Netlify
- Section "Environment variables"
- Ajoutez les deux variables :
  - `GMAIL_USER` : votre adresse Gmail complète
  - `GMAIL_APP_PASSWORD` : le mot de passe d'application

## Test de l'envoi d'emails
Une fois configuré, le formulaire de contact enverra automatiquement les demandes à votre Gmail.

## Sécurité
- Ne partagez jamais le mot de passe d'application
- Vous pouvez révoquer et régénérer ce mot de passe à tout moment
- Le mot de passe d'application n'est utilisé que pour Holy Appli

## Format des emails reçus
Vous recevrez des emails formatés avec :
- Informations de contact complètes
- Détails du projet agricole  
- Type de demande (démo, partenariat, etc.)
- Message du client
- Horodatage automatique
