import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import LogIn from "./pages/public/LogIn";
import SignUp from "./pages/public/SignUp";
import Dashboard from "./pages/private/Dashboard";
import Chat from "./pages/private/Chat";
import Sheets from "./pages/private/Sheets";
import NotFound from "./pages/public/NotFound";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import AuthLayout from "./layout/AuthLayout";
import Search from "./pages/private/Search";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import Ficha from "./pages/private/Ficha";
import Profile from "./pages/private/Profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div style={{ backgroundColor: 'white', minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth/log-in" element={<LogIn />} />
              <Route path="/auth/sign-up" element={<SignUp />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/loged-in" element={<MainLayout />}>
                <Route path="/loged-in" element={<Dashboard />} />
                <Route path="/loged-in/search" element={<Search />} />
                <Route path="/loged-in/profile/:patientUid" element={<Profile />} />
                <Route path="/loged-in/chat" element={<Chat />} />
                <Route path="/loged-in/sheets/:patientUid" element={<Sheets />} />
                <Route path="/loged-in/ficha/:patientUid" element={<Ficha />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
