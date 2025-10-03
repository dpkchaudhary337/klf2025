import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./mainLayout";
import { Hero } from "./components/HeroPage/HeroSection";
import { ContactUs } from "./components/ContactUs/ContactUs";

import KLF2024 from "./components/KLFPage/KLF2024";
import Programme from "./components/KLFPage/Programme";
import Brochure from "./components/KLFPage/Brochure";
import Archive from "./components/KLFPage/Archive";
import SpeakerDetail from "./components/KLFPage/SpeakerDetail";
import ScrollToTop from "./components/KLFPage/ScrollToTop";
import { Gallery2024 } from "./Pages/Gallery/Gallery2024";
import Speakers2024 from "./Pages/Speakers/Speakers2024";
import Speakers2025 from "./Pages/Speakers/Speakers2025";
import { Partners2024 } from "./Pages/Partners/Partners2024";
import { Partners2025 } from "./Pages/Partners/Partners2025";
import { Books2025 } from "./Pages/Books/Books2025";

import { ShrikulaDonation } from "./components/Donate/DonatePage";
import { ThankYou } from "./components/Donate/ThankYou";
import { AboutHeroSection } from "./components/AboutUs/AboutHeroSection";
import AboutKLF25 from "./components/AboutUs/About";

import Registration from "./components/Registration/Registration";
import AttendeeDetails from "./components/Registration/AttendeeDetails";
import PaymentSuccess from "./components/Registration/PaymentSuccess";
import VerifyTicket from "./components/Registration/VerifyTicket";

import NotFound from "./Pages/NotFound";
import Privacy from "./Pages/privacypolicy";
import RefundPolicy from "./Pages/refundpolicy";
import Terms from "./Pages/terms";


export default function App() {
  // 🔹 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // 1 second animation
      once: true, // ek bar hi chale
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Hero />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/klf2024" element={<KLF2024 />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/speakers/2024" element={<Speakers2024 />} />
          <Route path="/speaker/:id" element={<SpeakerDetail />} />
          <Route path="/speakers/2025" element={<Speakers2025 />} />
          <Route path="/gallery/2024" element={<Gallery2024 />} />
          <Route path="/partners/2024" element={<Partners2024 />} />
          <Route path="/partners/2025" element={<Partners2025 />} />
          <Route path="/donation" element={<ShrikulaDonation />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about" element={<AboutHeroSection />} />
          <Route path="/aboutklf25" element={<AboutKLF25 />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/books/2025" element={<Books2025 />} />
          {/* Booking flow */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/attendee-details" element={<AttendeeDetails />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/verify-ticket" element={<VerifyTicket />} />
        </Route>

        {/* Agar galat URL ho */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
