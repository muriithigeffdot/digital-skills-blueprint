import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { defaultContent } from '../content/content';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('appContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', content.theme.primary);
    document.documentElement.style.setProperty('--secondary', content.theme.secondary);
    localStorage.setItem('appContent', JSON.stringify(content));
  }, [content]);

  const updateContent = (path, value) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      let current = newContent;
      const keys = path.split('.');
      keys.slice(0, -1).forEach(key => {
        current = current[key] = { ...current[key] };
      });
      current[keys[keys.length - 1]] = value;
      return newContent;
    });
  };

  return (
    <AppContext.Provider value={{ content, isEditing, setIsEditing, updateContent }}>
      {children}
    </AppContext.Provider>
  );
};