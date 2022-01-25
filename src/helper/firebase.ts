import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const projectId = publicRuntimeConfig.firebaseProjectId;
const messagingSenderId = publicRuntimeConfig.firebaseMessagingSenderId;
const appId = publicRuntimeConfig.firebaseAppId;

const firebaseConfig = {
    apiKey: publicRuntimeConfig.firebaseApiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}-default-rtdb.europe-west1.firebasedatabase.app`,
    projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId,
    appId
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
