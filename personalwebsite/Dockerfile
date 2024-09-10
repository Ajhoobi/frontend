# Stage 1: Build the React Application
FROM node:20-alpine as build

ENV REACT_IP=192.168.1.4:5000
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup the Nginx Server to serve the React Application
FROM nginx:1.25.0-alpine as production

# Copy the built React application
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx config template and entrypoint script
COPY nginx.conf /etc/nginx/conf.d/default.conf.template


# Set environment variables for Nginx
ENV API_URL=api.example.com  

# Expose port 80
EXPOSE 80

# Use the custom entrypoint script to replace env vars and start Nginx
CMD ["/bin/sh", "-c", "envsubst '${API_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
