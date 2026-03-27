const fs = require('fs');
const path = require('path');

// Manually load .env.local because Next.js standalone doesn't do it automatically
const envPath = path.join(__dirname, '.env.local');
const defaultEnvPath = path.join(__dirname, '.env');

const loadEnv = (filePath) => {
  if (fs.existsSync(filePath)) {
    const envContent = fs.readFileSync(filePath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
        if (!process.env[key]) process.env[key] = value;
      }
    });
  }
};

loadEnv(defaultEnvPath);
loadEnv(envPath);

// Proxy file for Phusion Passenger on Hostinger Shared Hosting
process.env.NODE_ENV = 'production';
require('./.next/standalone/server.js');
