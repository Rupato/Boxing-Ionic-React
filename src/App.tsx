import { IonApp, setupIonicReact } from "@ionic/react";
import Header from "./pages/header";
import Video from "./pages/video";
import SignIn from "./pages/signIn";
import "./App.css";

/* Theme variables */
import "./theme/variables.css";
import PasswordReset from "./pages/passwordReset";
import SignUp from "./pages/signUp";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <section className="banner">
      <div className="overlay"></div>
      <Header />
      <Video />
      {/* <SignIn /> */}
      {/* <PasswordReset /> */}
      <SignUp />
    </section>
  </IonApp>
);

export default App;
