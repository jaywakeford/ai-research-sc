# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the app source code
COPY . .

# Expose the port for Fly.io
EXPOSE 8080

# Start the application with explicitly resolved PORT
CMD ["sh", "-c", "npm run start -- -H 0.0.0.0 -p ${PORT:-8080}"]
