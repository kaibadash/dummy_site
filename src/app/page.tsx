'use client'
import Login from "./components/Login";
import TextForm from "./components/TextForm";
import ImageForm from "./components/ImageForm";
import { useState } from 'react';
import CurrentTime from "./components/CurrentTime";
import Logo from './resources/satoutyouzu_bg_black.png';

export default function Home() {
  const [showTextForm, setShowTextForm] = useState(false);
  const [showImageForm, setShowImageForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setShowTextForm(true);
    setShowImageForm(true);
    setIsLoggedIn(true);
  };
  return (
    <div className="bg-green-100 text-green-800 p-6">
      <main className="space-y-4">
        <img 
          src={Logo.src}
          alt="Logo" 
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-green-900 text-center">Dummy Site</h1>
        <p>You can log in using an ID and password that start with test.</p>
        {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
        {isLoggedIn && <CurrentTime />}
        {showTextForm && <TextForm />}
        {showImageForm && <ImageForm />}
      </main>
      <footer className="text-center">
        <a href="https://github.com/kaibadash/dummy_site">GitHub</a>
      </footer>
    </div>
  );
}
