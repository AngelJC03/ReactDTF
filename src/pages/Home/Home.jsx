// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
// import Sidebar from '../../components/navbar/Sidebar.jsx';
// import Footer from '../../components/footer/Footer.jsx';
// import FadeIn from '../../components/fadeinsection/FadeIn.jsx';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar />
      {/* <FadeIn>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      </FadeIn> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
