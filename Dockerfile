FROM node

WORKDIR usr/app

COPY . .
RUN npm i
RUN cd client
RUN npm i
RUN cd ..

CMD ["npm","start"]