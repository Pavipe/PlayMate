// Connectar Firebase
import { initializeApp } from 'firebase/app'

// Connectar Firestore
import { getFirestore } from 'firebase/firestore'

// Configuració del projecte PlayMate
const firebaseConfig = {
  apiKey: 'AIzaSyD_W30nR-9lExLb9LTEY3dQFR1kDe_o5sc',
  authDomain: 'playmate-700ee.firebaseapp.com',
  projectId: 'playmate-700ee',
  storageBucket: 'playmate-700ee.firebasestorage.app',
  messagingSenderId: '428146330760',
  appId: '1:428146330760:web:2156851d20491ef174e33d',
}

// Inicialitza l'aplicació Firebase
const app = initializeApp(firebaseConfig)

// Inicialitza Firestore i exporta la connexió
export const db = getFirestore(app)
