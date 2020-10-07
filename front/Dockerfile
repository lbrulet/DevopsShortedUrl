# pull official base image
FROM node:10

# set working directory
WORKDIR /usr/src/www/

# install app dependencies
COPY package*.json ./
RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]