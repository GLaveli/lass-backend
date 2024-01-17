# Base image
FROM node:14

# Crie um diretório para o aplicativo
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto
COPY . .

# Compile o projeto, se necessário
RUN npm run compile

# Expõe a porta que seu app utiliza
EXPOSE 3000

# Comando para rodar o aplicativo
CMD ["node", "dist/server.js"]
