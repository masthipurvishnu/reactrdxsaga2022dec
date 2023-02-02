import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const StartFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCfANvjt4e5YBOPR3zRa9067kqExd-AGxk",
        authDomain: "stream-1a578.firebaseapp.com",
        databaseURL: "https://stream-1a578-default-rtdb.firebaseio.com",
        projectId: "stream-1a578",
        storageBucket: "stream-1a578.appspot.com",
        messagingSenderId: "276112504230",
        appId: "1:276112504230:web:3d20daf6769a666e690b67",
        measurementId: "G-3LL95V8SRX"
    };
    const app = initializeApp(firebaseConfig)
    return getDatabase(app)
}
export default StartFirebase