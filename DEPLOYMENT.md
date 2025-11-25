# Ministry of Agriculture - Deployment Guide

This guide covers deploying the Ministry of Agriculture Next.js application to both Docker and EC2.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Docker Deployment](#docker-deployment)
3. [EC2 Deployment](#ec2-deployment)
4. [PM2 Deployment](#pm2-deployment)
5. [Monitoring and Maintenance](#monitoring-and-maintenance)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js 18+ installed
- Docker and Docker Compose installed
- Git repository access
- EC2 instance with Ubuntu 20.04+ (for EC2 deployment)
- SSH access to EC2 instance

## Docker Deployment

### Local Development with Docker

1. **Build and run the application:**
   ```bash
   # Build the Docker image
   docker build -t ministry-of-agriculture .

   # Run with docker-compose
   docker-compose up -d
   ```

2. **Access the application:**
   - Application: http://localhost:3000
   - Nginx proxy: http://localhost

3. **View logs:**
   ```bash
   docker-compose logs -f
   ```

### Production Docker Deployment

1. **Deploy using the deployment script:**
   ```bash
   ./deploy.sh deploy
   ```

2. **Available commands:**
   ```bash
   ./deploy.sh deploy    # Deploy the application
   ./deploy.sh stop      # Stop the application
   ./deploy.sh restart   # Restart the application
   ./deploy.sh logs      # View application logs
   ./deploy.sh status    # Check application status
   ```

## EC2 Deployment

### Initial EC2 Setup

1. **Launch an EC2 instance:**
   - Instance type: t3.medium or larger
   - OS: Ubuntu 20.04 LTS
   - Security groups: Allow SSH (22), HTTP (80), HTTPS (443), and custom port 3000

2. **Connect to your EC2 instance:**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```

3. **Run the setup script:**
   ```bash
   # Upload the setup script to your EC2 instance
   scp -i your-key.pem ec2-setup.sh ubuntu@your-ec2-ip:~/
   
   # Connect to EC2 and run setup
   ssh -i your-key.pem ubuntu@your-ec2-ip
   chmod +x ec2-setup.sh
   ./ec2-setup.sh
   ```

4. **Log out and log back in** for Docker group changes to take effect.

### Deploy Application to EC2

#### Option 1: Using Docker (Recommended)

1. **Clone your repository:**
   ```bash
   git clone https://github.com/IDCLofficial/ministry_of_agriculture.git
   cd ministry_of_agriculture
   ```

2. **Deploy using Docker:**
   ```bash
   ./deploy.sh deploy
   ```

#### Option 2: Using PM2

1. **Clone and setup:**
   ```bash
   git clone https://github.com/IDCLofficial/ministry_of_agriculture.git
   cd ministry_of_agriculture
   npm install
   npm run build
   ```

2. **Deploy with PM2:**
   ```bash
   pm2 start ecosystem.config.js --env production
   pm2 save
   pm2 startup
   ```

## PM2 Deployment

### Using PM2 Deploy (Automated)

1. **Configure your SSH key:**
   ```bash
   # Make sure your SSH key is in ~/.ssh/
   chmod 600 ~/.ssh/newa.pem
   ```

2. **Deploy:**
   ```bash
   pm2 deploy production
   ```

3. **Update deployment:**
   ```bash
   pm2 deploy production update
   ```

### PM2 Management Commands

```bash
# View running processes
pm2 list

# View logs
pm2 logs ministry-of-agriculture

# Restart application
pm2 restart ministry-of-agriculture

# Stop application
pm2 stop ministry-of-agriculture

# Delete application
pm2 delete ministry-of-agriculture

# Monitor
pm2 monit
```

## Monitoring and Maintenance

### Health Checks

1. **Application health:**
   ```bash
   curl http://localhost:3000
   ```

2. **Nginx health:**
   ```bash
   curl http://localhost/health
   ```

### Log Management

1. **Docker logs:**
   ```bash
   docker logs ministry-of-agriculture-container
   ```

2. **PM2 logs:**
   ```bash
   pm2 logs ministry-of-agriculture
   ```

3. **Nginx logs:**
   ```bash
   sudo tail -f /var/log/nginx/access.log
   sudo tail -f /var/log/nginx/error.log
   ```

### Performance Monitoring

1. **System resources:**
   ```bash
   htop
   ```

2. **Docker stats:**
   ```bash
   docker stats
   ```

3. **PM2 monitoring:**
   ```bash
   pm2 monit
   ```

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Find process using port 3000
   sudo lsof -i :3000
   
   # Kill the process
   sudo kill -9 <PID>
   ```

2. **Docker permission denied:**
   ```bash
   # Add user to docker group
   sudo usermod -aG docker $USER
   # Log out and log back in
   ```

3. **PM2 not starting on boot:**
   ```bash
   pm2 startup
   pm2 save
   ```

4. **Nginx not starting:**
   ```bash
   sudo systemctl status nginx
   sudo nginx -t
   ```

### Environment Variables

Create a `.env.production` file for production environment variables:

```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Add your Contentful or other API keys here
```

### SSL Certificate Setup (Optional)

1. **Install Certbot:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Get SSL certificate:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

3. **Update nginx.conf** to include SSL configuration.

## Security Considerations

1. **Firewall configuration:**
   ```bash
   sudo ufw allow ssh
   sudo ufw allow 80
   sudo ufw allow 443
   sudo ufw enable
   ```

2. **Regular updates:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Monitor logs regularly:**
   ```bash
   sudo tail -f /var/log/auth.log
   ```

## Backup Strategy

1. **Application data:**
   ```bash
   # Backup application files
   tar -czf ministry-backup-$(date +%Y%m%d).tar.gz /var/www/ministry-of-agriculture
   ```

2. **Database backups** (if applicable):
   ```bash
   # Add database backup commands here
   ```

## Scaling Considerations

1. **Horizontal scaling with Docker Swarm:**
   ```bash
   docker swarm init
   docker stack deploy -c docker-compose.yml ministry-stack
   ```

2. **Load balancing with multiple instances:**
   - Deploy multiple EC2 instances
   - Use Application Load Balancer (ALB)
   - Configure health checks

## Support

For issues and support:
- Check application logs first
- Review this documentation
- Contact the development team

---

**Last updated:** $(date)
**Version:** 1.0.0
