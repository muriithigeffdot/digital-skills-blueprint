import React from 'react';
import { useContent } from '../../hooks/useContent';

const Editable = ({ path, as: Component = 'span', className, elementType = 'input' }) => {
  const { isEditing, content, updateContent } = useContent();

  const value = path.split('.').reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : '', content);

  if (isEditing) {
    const commonProps = {
      value,
      onChange: (e) => updateContent(path, e.target.value),
      className: 'bg-yellow-200 text-black p-1 rounded w-full',
    };

    if (elementType === 'textarea') {
      return <textarea {...commonProps} rows={4} />;
    } 
    return <input type="text" {...commonProps} />;
  }

  return <Component className={className}>{value}</Component>;
};

export default Editable;