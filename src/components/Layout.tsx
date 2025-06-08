import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;