import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}
export default auth;
