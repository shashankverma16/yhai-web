// src/config.js
export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://yhai-server.vercel.app' // deployed backend
    : 'http://localhost:5000';          // local dev
