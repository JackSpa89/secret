module.exports = {
    productionBrowserSourceMaps: true,
    publicRuntimeConfig: {
        productionBrowserSourceMaps: true,
        firebaseApiKey: process.env.FIREBASE_API_KEY,
        firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
        firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.FIREBASE_APP_ID
    }
};
