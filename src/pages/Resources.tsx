import React from 'react';
import Editable from '../components/ui/Editable';
import { useContent } from '../hooks/useContent';

const Resources = () => {
  const { content } = useContent();

  return (
    <div>
      <Editable path="resources.title" as="h1" className="text-4xl font-bold mb-4" />
      <Editable path="resources.description" as="p" className="text-lg text-muted-foreground mb-8" />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
            <h2 className="text-2xl font-semibold mb-4">External Platforms</h2>
            <ul className="space-y-3">
                {content.resources.links.map((link, i) => (
                    <li key={i}><a href={link.url} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">{link.text}</a></li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className="text-2xl font-semibold mb-4">Downloads</h2>
            <ul className="space-y-3">
                 {content.resources.downloadables.map((item, i) => (
                    <li key={i}><a href={item.url} className="text-secondary hover:underline" download>{item.text}</a></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;