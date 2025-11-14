import React from 'react';
import { Link } from 'react-router-dom';
import Editable from '../components/ui/Editable';

const Home = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-full">
        <Editable path="home.heading" as="h1" className="text-5xl font-bold text-primary mb-4" />
        <Editable path="home.subheading" as="p" className="text-xl text-muted-foreground mb-6" />
        <Editable path="home.paragraph" as="p" className="max-w-2xl mx-auto mb-8" elementType="textarea" />
        <Link to="/modules" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            <Editable path="home.modulesButton" />
        </Link>
    </div>
  );
};

export default Home;