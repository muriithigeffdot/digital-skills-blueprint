import { createContext, useContext, useState, ReactNode } from "react";

interface Student {
  name: string;
  phone: string;
  email: string;
  selectedCourses: string[];
  progress: string;
  feedback: string;
}

interface AppContextType {
  students: Student[];
  addStudent: (student: Student) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <AppContext.Provider value={{ students, addStudent }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
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
