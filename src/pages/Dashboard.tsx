import { useAppContext } from "../context/AppContext";

export default function Dashboard() {
  const { students } = useAppContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Courses</th>
              <th className="border px-4 py-2">Progress</th>
              <th className="border px-4 py-2">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{s.name}</td>
                <td className="border px-4 py-2">{s.phone}</td>
                <td className="border px-4 py-2">{s.email}</td>
                <td className="border px-4 py-2">{s.selectedCourses.join(", ")}</td>
                <td className="border px-4 py-2">{s.progress}</td>
                <td className="border px-4 py-2">{s.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { toast } from 'sonner';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error('Please fill in all fields.');
      return;
    }
    console.log({ name, email });
    toast.success(`Welcome, ${name}! Your registration is successful.`);
    setName('');
    setEmail('');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-primary mb-8'>Learner Dashboard</h1>

      <div className='grid md:grid-cols-2 gap-12'>
        {/* New Learner Registration */}
        <div className='bg-card p-8 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-6'>New Learner Registration</h2>
          <form onSubmit={handleRegister}>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>Full Name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary'
                placeholder='e.g. Juma Adebayo'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>Email Address</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary'
                placeholder='e.g. juma.adebayo@example.com'
              />
            </div>
            <button type='submit' className='w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-colors'>
              Register
            </button>
          </form>
        </div>

        {/* Progress Tracking */}
        <div className='bg-card p-8 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-6'>Your Progress</h2>
          <div className='space-y-6'>
            <div>
              <div className='flex justify-between mb-1'>
                <span className='font-medium'>Introduction to Digital Skills</span>
                <span className='text-sm font-medium text-primary'>75%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-primary h-2.5 rounded-full' style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-1'>
                <span className='font-medium'>Social Media Marketing</span>
                <span className='text-sm font-medium text-green-500'>45%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-secondary h-2.5 rounded-full' style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-1'>
                <span className='font-medium'>Web Development Basics</span>
                <span className='text-sm font-medium text-primary'>20%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-primary h-2.5 rounded-full' style={{ width: '20%' }}></div>
              </div>
            </div>
             <p className='text-center text-gray-500 mt-6'>More progress details will be available soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
