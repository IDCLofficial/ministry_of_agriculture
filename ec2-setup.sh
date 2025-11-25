#!/bin/bash

# EC2 Setup Script for Ministry of Agriculture
# This script sets up the EC2 instance for deployment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Update system packages
update_system() {
    print_header "Updating System Packages"
    sudo apt update && sudo apt upgrade -y
    print_status "System packages updated"
}

# Install Node.js using NVM
install_nodejs() {
    print_header "Installing Node.js"
    
    # Install NVM if not already installed
    if ! command -v nvm &> /dev/null; then
        print_status "Installing NVM..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    fi
    
    # Install Node.js 18
    print_status "Installing Node.js 18..."
    nvm install 18
    nvm use 18
    nvm alias default 18
    
    print_status "Node.js installed successfully"
    node --version
    npm --version
}

# Install PM2 globally
install_pm2() {
    print_header "Installing PM2"
    npm install -g pm2
    print_status "PM2 installed successfully"
}

# Install Docker
install_docker() {
    print_header "Installing Docker"
    
    # Remove old Docker installations
    sudo apt remove -y docker docker-engine docker.io containerd runc || true
    
    # Install Docker
    sudo apt update
    sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release
    
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
    sudo apt update
    sudo apt install -y docker-ce docker-ce-cli containerd.io
    
    # Add user to docker group
    sudo usermod -aG docker $USER
    
    # Start and enable Docker
    sudo systemctl start docker
    sudo systemctl enable docker
    
    print_status "Docker installed successfully"
    docker --version
}

# Install Docker Compose
install_docker_compose() {
    print_header "Installing Docker Compose"
    
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    
    print_status "Docker Compose installed successfully"
    docker-compose --version
}

# Install Nginx
install_nginx() {
    print_header "Installing Nginx"
    
    sudo apt install -y nginx
    
    # Start and enable Nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
    
    print_status "Nginx installed successfully"
}

# Configure firewall
configure_firewall() {
    print_header "Configuring Firewall"
    
    sudo ufw allow ssh
    sudo ufw allow 80
    sudo ufw allow 443
    sudo ufw allow 3000
    sudo ufw --force enable
    
    print_status "Firewall configured"
}

# Create application directory
create_app_directory() {
    print_header "Creating Application Directory"
    
    sudo mkdir -p /var/www/ministry-of-agriculture
    sudo chown -R $USER:$USER /var/www/ministry-of-agriculture
    
    print_status "Application directory created"
}

# Create logs directory
create_logs_directory() {
    print_header "Creating Logs Directory"
    
    mkdir -p /var/www/ministry-of-agriculture/logs
    sudo chown -R $USER:$USER /var/www/ministry-of-agriculture/logs
    
    print_status "Logs directory created"
}

# Install additional tools
install_tools() {
    print_header "Installing Additional Tools"
    
    sudo apt install -y git curl wget unzip htop tree
    
    print_status "Additional tools installed"
}

# Setup PM2 startup script
setup_pm2_startup() {
    print_header "Setting up PM2 Startup Script"
    
    pm2 startup
    print_warning "Please run the command shown above to enable PM2 startup"
    
    print_status "PM2 startup script configured"
}

# Create deployment user (optional)
create_deployment_user() {
    print_header "Creating Deployment User (Optional)"
    
    read -p "Do you want to create a dedicated deployment user? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sudo adduser deployment
        sudo usermod -aG docker deployment
        sudo usermod -aG sudo deployment
        print_status "Deployment user created"
    else
        print_status "Skipping deployment user creation"
    fi
}

# Main setup function
main() {
    print_header "EC2 Setup for Ministry of Agriculture"
    
    update_system
    install_tools
    install_nodejs
    install_pm2
    install_docker
    install_docker_compose
    install_nginx
    configure_firewall
    create_app_directory
    create_logs_directory
    setup_pm2_startup
    create_deployment_user
    
    print_header "Setup Complete!"
    print_status "Your EC2 instance is now ready for deployment"
    print_status "Next steps:"
    echo "1. Clone your repository: git clone <your-repo-url>"
    echo "2. Run deployment: ./deploy.sh deploy"
    echo "3. Or use PM2: pm2 deploy production"
    
    print_warning "Please log out and log back in for Docker group changes to take effect"
}

# Run main function
main "$@"
