import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function FrontendLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
