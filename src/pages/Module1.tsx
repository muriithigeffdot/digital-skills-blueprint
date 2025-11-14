import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Module1 = () => {
  return (
    <div className='container mx-auto px-4 py-8 text-foreground'>
      <h1 className='text-4xl font-bold text-primary mb-4' style={{ color: '#bf0eae' }}>Module 1: Basic IT Skills</h1>
      <p className='text-lg text-muted-foreground mb-6'>
        Learn how to use a computer confidently. This module introduces learners to computer hardware, software, file management, and essential tools like Microsoft Word, Excel, and PowerPoint.
      </p>
      <div className='bg-card p-8 rounded-lg shadow-lg mb-8'>
        <h2 className='text-2xl font-semibold mb-4' style={{ color: '#1aa22c' }}>Goal of this Module</h2>
        <p>Build a foundation in digital literacy and everyday computer use.</p>
      </div>

      <div className='bg-card p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4' style={{ color: '#1aa22c' }}>Learning Resources</h2>
        <ul className='space-y-4'>
          <li><a href='#' className='text-primary hover:underline' style={{ color: '#bf0eae' }}>YouTube Lesson: Introduction to Computers</a></li>
          <li><a href='#' className='text-primary hover:underline' style={{ color: '#bf0eae' }}>Workbook: Basic IT Skills Guide (Google Docs)</a></li>
          <li><a href='#' className='text-primary hover:underline' style={{ color: '#bf0eae' }}>Practice Files (Google Drive Folder)</a></li>
        </ul>
      </div>

      <div className='flex justify-between mt-12'>
        <Link to='/' className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700'>
          <ArrowLeft className='mr-2' />
          Back to Home
        </Link>
        <Link to='#' className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white' style={{ backgroundColor: '#1aa22c' }}>
          Next Module
          <ArrowRight className='ml-2' />
        </Link>
      </div>
    </div>
  );
};

export default Module1;