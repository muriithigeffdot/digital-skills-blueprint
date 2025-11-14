import React from 'react';
import { useContent } from '../hooks/useContent';

const EditorPanel = () => {
  const { isEditing, setIsEditing, content, updateContent } = useContent();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border dark:border-gray-700 z-50">
      <div className="flex items-center space-x-4">
        <label htmlFor="edit-mode-toggle" className="flex items-center cursor-pointer">
          <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Edit Mode</span>
          <div className="relative">
            <input type="checkbox" id="edit-mode-toggle" className="sr-only" checked={isEditing} onChange={() => setIsEditing(!isEditing)} />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isEditing ? 'transform translate-x-6 bg-primary' : ''}`}></div>
          </div>
        </label>
      </div>
      {isEditing && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-300">Theme Colors</h4>
          <div className="flex items-center space-x-2">
            <label className="text-xs">Primary</label>
            <input type="color" value={content.theme.primary} onChange={(e) => updateContent('theme.primary', e.target.value)} className="w-8 h-8" />
          </div>
           <div className="flex items-center space-x-2 mt-2">
            <label className="text-xs">Secondary</label>
            <input type="color" value={content.theme.secondary} onChange={(e) => updateContent('theme.secondary', e.target.value)} className="w-8 h-8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorPanel;