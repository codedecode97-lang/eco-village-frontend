import FloatingWhatsApp from "../../components/common/FloatingWhatsApp";
import MasterPlan from "./components/MasterPlan";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
// import Amenities from "./components/Amenities";
import FlagshipProjects from "./components/FlagshipProjects";
import Legacy from "./components/Legacy";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import OurOffering from "./components/OurOffering";

const EcoUrbanDevelopersPage = () => (
  <>
    {/* ================= LEGACY SECTION ================= */}
    <Legacy />
    {/* ================= ABOUT US ================= */}
    <AboutUs />
    {/* ================= FLAGSHIP PROJECTS ================= */}
    <FlagshipProjects />
    {/* ================= FEATURES ================= */}
    {/* <Amenities /> */}
{/*==================Oure Offering ================= */}
<OurOffering />
    {/* ================= WHY CHOOSE US ================= */}
    <WhyChooseUs />
    {/* ================= TESTIMONIALS ================= */}
    <Testimonials />
    {/* ================= MASTER PLAN ================= */}
    <MasterPlan />
    {/* ================= CONTACT ================= */}
    <Contact />
    {/* ================= FLOATING WHATSAPP ================= */}
    <FloatingWhatsApp />
  </>
);

export default EcoUrbanDevelopersPage;
