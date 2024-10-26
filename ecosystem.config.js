module.exports = {
  apps: [{
    name: 'crawler',
    script: 'backend/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      LOG_DIR: '/var/log/crawler',
      SAVE_PATH: '/var/lib/crawler/downloads',
      MAX_CONCURRENT: 5,
      RATE_LIMIT: 100,
      TIMEOUT: 30000
    }
  }]
}