import "./App.scss";
import { Clients } from "./components";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Required for side-effects
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfGwev-rnNYez6hd0t4shyOpnASa96Sqs",
  authDomain: "clientscrud-557b0.firebaseapp.com",
  projectId: "clientscrud-557b0",
  storageBucket: "clientscrud-557b0.appspot.com",
  messagingSenderId: "358271348002",
  appId: "1:358271348002:web:ba8a1bb08e43227b3b897b",
  measurementId: "G-KBBJRD5N94"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {
    return (
        <>
            <Clients />
        </>
    );
}

export default App;