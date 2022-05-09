FROM node:lts-alpine AS build-stage
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:lts-alpine AS production-stage

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm install --only=production
COPY --from=build-stage /dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]