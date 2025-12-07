
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-neutral-800 selection:bg-amber-200 selection:text-neutral-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
