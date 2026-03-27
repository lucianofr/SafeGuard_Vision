// Proxy file for Phusion Passenger on Hostinger Shared Hosting
process.env.NODE_ENV = 'production';
require('./.next/standalone/server.js');
