import React from 'react';
import Editable from '../components/ui/Editable';

const Feedback = () => {
  return (
    <div className="max-w-lg mx-auto">
      <Editable path="feedback.title" as="h1" className="text-4xl font-bold mb-4 text-center" />
      <Editable path="feedback.description" as="p" className="text-lg text-muted-foreground mb-8 text-center" />
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1"><Editable path="feedback.nameLabel" /></label>
          <input type="text" className="w-full p-2 border rounded-md bg-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1"><Editable path="feedback.emailLabel" /></label>
          <input type="email" className="w-full p-2 border rounded-md bg-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1"><Editable path="feedback.messageLabel" /></label>
          <textarea rows={5} className="w-full p-2 border rounded-md bg-input"></textarea>
        </div>
        <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:opacity-90">
           <Editable path="feedback.submitButton" />
        </button>
      </form>
    </div>
  );
};

export default Feedback;