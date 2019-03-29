module.exports = {
  apps: [{
    name: 'Super Secret Santa',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-222-126-155.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/SuperSecretSanta.pem.txt',
      ref: 'origin/master',
      repo: 'git@github.com:munchur/SuperSecretSanta.git',
      path: '/home/ubuntu/SuperSecretSanta',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
