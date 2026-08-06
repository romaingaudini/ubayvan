// CONFIGURATION UNIQUE FIREBASE
const firebaseConfig = { 
  apiKey: "AIzaSyAYBpV95meCzCoLZWGBhbflqLFiqR0mToc", 
  authDomain: "lastone-2ef2f.firebaseapp.com", 
  projectId: "lastone-2ef2f", 
  storageBucket: "lastone-2ef2f.firebasestorage.app", 
  messagingSenderId: "983919060318", 
  appId: "1:983919060318:web:2708d4b4a0ca3e2d7d5bcf" 
};

// Initialisation globale
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// SECURITE : Vérification de la session
const currentUserId = localStorage.getItem('currentUserId');
if (!currentUserId && !window.location.pathname.includes('index.html')) {
  window.location.href = "index.html";
}

// ==========================================
// CONFIGURATION DE LA DEVISE (CURRENCY)
// ==========================================
// Modifie simplement ces deux variables pour changer la devise sur tout le site !
const CONFIG_CURRENCY = 'EUR'; // Ex: 'XOF', 'CAD', 'GBP', 'EUR', 'USD'
const CONFIG_LOCALE = 'fr-FR';   // Ex: 'fr-FR' (pour EUR/XOF), 'en-CA' (pour CAD), 'en-GB' (pour GBP)

/**
 * Fonction globale pour formater les montants sur toutes les pages
 * @param {number} amount - Le montant à formater
 * @returns {string} - Le montant formaté avec la bonne devise
 */
function formatMoney(amount) {
  // Option spéciale pour le XOF (Franc CFA) qui n'aime pas les centimes en affichage standard
  const options = {
    style: 'currency',
    currency: CONFIG_CURRENCY
  };
  
  if (CONFIG_CURRENCY === 'XOF') {
    options.maximumFractionDigits = 0; // Pas de virgule pour le CFA
  }

  return new Intl.NumberFormat(CONFIG_LOCALE, options).format(amount);
}

// Fonction de déconnexion globale
function logout() { 
  localStorage.removeItem('currentUserId'); 
  window.location.href = "index.html"; 
}