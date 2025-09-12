module.exports = {
  apps : [{
    name: 'ministry-of-agriculture',
    script: 'npm start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_TELEMETRY_DISABLED: 1
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }],

  deploy : {
    production : {
      key: 'newa.pem',
      user : 'ubuntu',
      host : 'agric',
      ref  : 'origin/main',
      repo : 'git@github.com:IDCLofficial/ministry_of_agriculture.git',
      path : '/home/ubuntu/ministry-of-agriculture',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'mkdir -p logs',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
