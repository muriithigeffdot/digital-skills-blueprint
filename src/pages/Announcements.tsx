import React from 'react';
import Editable from '../components/ui/Editable';

const Announcements = () => {
  return (
    <div className="text-center">
      <Editable path="announcements.title" as="h1" className="text-4xl font-bold mb-4" />
      <Editable path="announcements.description" as="p" className="text-lg text-muted-foreground" />
    </div>
  );
};

export default Announcements;