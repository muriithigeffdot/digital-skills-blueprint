import React from 'react';
import { Link } from 'react-router-dom';
import Editable from '../components/ui/Editable';

const Modules = () => {
  const modulesData = [
    {
      title: 'Module 1: Microsoft Word',
      description: 'Learn to create, edit, and format documents with Microsoft Word. This module covers everything from basic text editing to advanced features like mail merge.',
      goal: 'Master the essentials of Microsoft Word for personal and professional use.',
      resources: 'Official Microsoft Word documentation, tutorials, and templates.',
      link: '/module1',
      status: 'active',
    },
    {
      title: 'Module 2: Internet and online safety',
      description: 'Understand how the internet works, how to search effectively, use email, and stay safe online.',
      goal: 'Equip learners to communicate, research and protect their privacy on the internet.',
      resources: 'YouTube: Internet Basics for Beginners, Cyber Safety Guide (pdf), Practical Email Activity ( google form)',
      link: '/module2',
      status: 'active',
    },
    {
      title: 'Module 3: Microsoft PowerPoint',
      description: 'Discover how to create compelling and professional presentations. Learn about slide design, animations, and delivering your message effectively.',
      goal: 'Learn to design and deliver impactful presentations.',
      resources: 'Coming Soon',
      link: '/module3',
      status: 'active',
    },
    {
      title: 'Module 4: Microsoft Publisher',
      description: 'Design professional-looking publications, including brochures, newsletters, and flyers for print and digital distribution.',
      goal: 'Create marketing materials like brochures, newsletters, and flyers.',
      resources: 'Coming Soon',
      link: '/module4',
      status: 'active',
    },
    {
      title: 'Module 5: Microsoft Outlook',
      description: 'Manage your email, calendar, and contacts efficiently. This module helps you organize your digital communication and schedule.',
      goal: 'Organize your digital communication effectively.',
      resources: 'Coming Soon',
      link: '/module5',
      status: 'active',
    },
    {
      title: 'Google Drive',
      description: 'Store, share, and collaborate on files and folders from any mobile device, tablet, or computer.',
      goal: 'Learn cloud storage and collaboration with Google Drive.',
      resources: 'Coming Soon',
      status: 'inactive',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Editable path='modules.title' as='h1' className='text-4xl font-bold mb-4 text-center' />
      <Editable path='modules.description' as='p' className='text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {modulesData.map((module, index) => {
          const cardContent = (
            <div className='bg-card p-6 rounded-lg shadow-lg flex flex-col h-full border border-border transition-transform transform hover:-translate-y-1 hover:shadow-xl'>
              <div className="flex-grow">
                <h3 className='text-xl font-bold mb-3 text-primary'>{module.title}</h3>
                <p className='text-sm text-muted-foreground mb-4 h-24 overflow-auto'>{module.description}</p>
                <div className='mb-4 space-y-2'>
                    <h4 className='font-semibold text-sm'>Goal:</h4>
                    <p className='text-sm text-muted-foreground'>{module.goal}</p>
                </div>
                <div>
                    <h4 className='font-semibold text-sm'>Learning Resources:</h4>
                    <p className='text-sm text-muted-foreground break-words'>{module.resources}</p>
                </div>
              </div>
              <button className={`mt-6 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:bg-primary/90 w-full transition-colors ${module.status !== 'active' ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400' : ''}`} disabled={module.status !== 'active'}>
                {module.status === 'active' ? 'View Module' : 'Coming Soon'}
              </button>
            </div>
          );

          if (module.status === 'active' && module.link) {
            return <Link to={module.link} key={index} className='h-full flex flex-col'>{cardContent}</Link>;
          }

          return <div key={index} className='h-full flex flex-col'>{cardContent}</div>;
        })}
      </div>
    </div>
  );
};

export default Modules;
