#!/bin/bash

# Ministry of Agriculture Deployment Script
# This script deploys the application to EC2 using Docker

set -e

# Configuration
APP_NAME="ministry-of-agriculture"
DOCKER_IMAGE="$APP_NAME:latest"
CONTAINER_NAME="$APP_NAME-container"
NGINX_CONTAINER="$APP_NAME-nginx"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
    print_status "Docker is running"
}

# Build the Docker image
build_image() {
    print_status "Building Docker image..."
    docker build -t $DOCKER_IMAGE .
    print_status "Docker image built successfully"
}

# Stop existing containers
stop_containers() {
    print_status "Stopping existing containers..."
    
    if docker ps -q -f name=$CONTAINER_NAME | grep -q .; then
        docker stop $CONTAINER_NAME
        docker rm $CONTAINER_NAME
        print_status "Stopped and removed existing app container"
    fi
    
    if docker ps -q -f name=$NGINX_CONTAINER | grep -q .; then
        docker stop $NGINX_CONTAINER
        docker rm $NGINX_CONTAINER
        print_status "Stopped and removed existing nginx container"
    fi
}

# Start the application
start_application() {
    print_status "Starting application..."
    
    # Start the main application container
    docker run -d \
        --name $CONTAINER_NAME \
        --restart unless-stopped \
        -p 3000:3000 \
        -e NODE_ENV=production \
        -e NEXT_TELEMETRY_DISABLED=1 \
        $DOCKER_IMAGE
    
    print_status "Application container started"
    
    # Start Nginx container
    docker run -d \
        --name $NGINX_CONTAINER \
        --restart unless-stopped \
        -p 80:80 \
        -p 443:443 \
        --link $CONTAINER_NAME:ministry-app \
        -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
        nginx:alpine
    
    print_status "Nginx container started"
}

# Health check
health_check() {
    print_status "Performing health check..."
    
    # Wait for application to start
    sleep 10
    
    # Check if the application is responding
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        print_status "Application is healthy and responding"
    else
        print_error "Application health check failed"
        exit 1
    fi
    
    # Check if Nginx is responding
    if curl -f http://localhost > /dev/null 2>&1; then
        print_status "Nginx is healthy and responding"
    else
        print_error "Nginx health check failed"
        exit 1
    fi
}

# Clean up old images
cleanup() {
    print_status "Cleaning up old Docker images..."
    docker image prune -f
    print_status "Cleanup completed"
}

# Main deployment function
deploy() {
    print_status "Starting deployment of $APP_NAME..."
    
    check_docker
    build_image
    stop_containers
    start_application
    health_check
    cleanup
    
    print_status "Deployment completed successfully!"
    print_status "Application is available at: http://localhost"
    print_status "Direct app access: http://localhost:3000"
}

# Show usage
usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  deploy    Deploy the application"
    echo "  stop      Stop the application"
    echo "  restart   Restart the application"
    echo "  logs      Show application logs"
    echo "  status    Show application status"
    echo "  help      Show this help message"
}

# Stop application
stop_app() {
    print_status "Stopping application..."
    stop_containers
    print_status "Application stopped"
}

# Restart application
restart_app() {
    print_status "Restarting application..."
    stop_containers
    start_application
    health_check
    print_status "Application restarted successfully"
}

# Show logs
show_logs() {
    print_status "Showing application logs..."
    docker logs -f $CONTAINER_NAME
}

# Show status
show_status() {
    print_status "Application Status:"
    echo ""
    docker ps --filter "name=$CONTAINER_NAME" --filter "name=$NGINX_CONTAINER"
    echo ""
    print_status "Docker images:"
    docker images | grep $APP_NAME
}

# Main script logic
case "${1:-deploy}" in
    deploy)
        deploy
        ;;
    stop)
        stop_app
        ;;
    restart)
        restart_app
        ;;
    logs)
        show_logs
        ;;
    status)
        show_status
        ;;
    help|--help|-h)
        usage
        ;;
    *)
        print_error "Unknown option: $1"
        usage
        exit 1
        ;;
esac
