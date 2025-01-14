# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables for production
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_PATH=""

# Build the application
RUN npm run build

# The static files will be in the /app/out directory
# Expose the port that will serve the static files
EXPOSE 3000

# Start the static file server
CMD ["npm", "run", "start"]
