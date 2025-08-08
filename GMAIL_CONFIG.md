# Configuração Gmail SMTP Simples

## Passos para configurar:

### 1. Ativar autenticação de 2 fatores no Gmail
- Acesse sua conta Google > Segurança
- Ative a "Verificação em duas etapas"

### 2. Gerar senha de aplicativo
- Em Segurança > Senhas de aplicativo
- Selecione "Outro (nome personalizado)"
- Digite "Holy Appli"
- Copie a senha gerada (16 caracteres)

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```
GMAIL_USER=seu-email@gmail.com
GMAIL_APP_PASSWORD=sua-senha-app-16-caracteres
```

### 4. Para produção
Configure as mesmas variáveis no seu servidor/hosting.

## Testando
Após configurar, o formulário de contato enviará emails diretamente para seu Gmail.

## Segurança
- A senha de aplicativo só funciona para esta aplicação
- Pode ser revogada a qualquer momento
- Mais seguro que usar sua senha principal
