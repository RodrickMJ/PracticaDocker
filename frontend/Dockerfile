FROM node:14
WORKDIR /PracticaDocker/frontend/frontend
COPY . .
RUN npm install
RUN npm run build
EXPOSE 80
CMD ["npm", "start"]