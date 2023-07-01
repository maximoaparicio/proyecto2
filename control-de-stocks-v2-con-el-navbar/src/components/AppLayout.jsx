import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import { AuthProvider } from "../context/AuthContext";

const AppLayout = () => {
  return (
    <AuthProvider>
      <div className="app-layout">
        <Navbar />
        <div className="main-content">
          <Header />
          <Content />
        </div>
      </div>
    </AuthProvider>
  );
};

export default AppLayout;
