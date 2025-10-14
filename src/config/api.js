// API Configuration
// Update these URLs when you restart ngrok or deploy

export const API_CONFIG = {
  // For local development with ngrok
  BASE_URL: 'https://4269ead4b4e6.ngrok-free.app',
  
  // For production (when deployed)
  // BASE_URL: 'https://your-render-app.onrender.com',
  
  // For local development without ngrok
  // BASE_URL: 'http://localhost:8000',
};

export const API_ENDPOINTS = {
  UPLOAD: `${API_CONFIG.BASE_URL}/upload`,
  STATUS: `${API_CONFIG.BASE_URL}/status`,
  DOWNLOAD: `${API_CONFIG.BASE_URL}/download`,
};
