
# Etapa de desarrollo
FROM node:16

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias y el package.json al directorio de trabajo
COPY package.json package-lock.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el código fuente del proyecto al directorio de trabajo
COPY . .

# Exponer el puerto 3000 para la aplicación React
EXPOSE 3000

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["npm", "start"]
