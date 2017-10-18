FROM node:boron

# Create app directory
WORKDIR /src

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . /src

EXPOSE 3000
CMD [ "npm", "start" ]
