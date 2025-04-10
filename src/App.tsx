import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./page/homePage";
import ContactPage from "./page/contactPage";
import Footer from "./components/footer";
import ProfilePage from "./page/profilePage";
import ProducePage from "./page/producePage";
import ServicePage from "./page/servicePage";
// import SolutionPage from "./page/solutionPage";
import Icons from "./components/icon"

const App: React.FC = () => {
    return (
        //<BrowserRouter> {/* Thêm BrowserRouter để bọc toàn bộ ứng dụng */}
            <>
                <Navbar />
                <Icons/>
                <Routes>
                    <Route path="/" element={<HomePage />} /> 
                    <Route path="/profilePage" element={<ProfilePage />} />
                    <Route path="/producePage" element={<ProducePage />} />
                    <Route path="/servicePage" element={<ServicePage />} />
                    {/* <Route path="/solutionPage" element={<SolutionPage />} /> */}
                    <Route path="/contactPage" element={<ContactPage />} />
                    <Route path="*" element={<div>NotFoundPage</div>} /> 
                </Routes>
                <Footer />
            </>
    //    </BrowserRouter>
    );
};

export default App;
