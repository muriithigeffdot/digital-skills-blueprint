import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { Editable } from '../components/ui/Editable';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Module3() {
    const { content } = useContent();
    const moduleKey = 'module3';
    const resources = [
        'Introduction to Cloud Computing (Google Drive, OneDrive)',
        'File sharing and permissions',
        'Using Google Docs and Sheets',
        'Collaborating with Microsoft Teams',
        'Introduction to project management tools (Trello, Asana)',
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="p-8 sm:p-10">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1aa22c' }}>
                        <Editable id={`${moduleKey}-title`} defaultText="Module 3: Cloud Computing and Online Collaboration" />
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        <Editable id={`${moduleKey}-description`} defaultText="Understanding cloud storage and using online tools for collaboration." />
                    </p>
                    
                    <div className="bg-green-50 border-l-4 p-6 rounded-r-lg mb-8" style={{ borderColor: '#1aa22c' }}>
                        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#bf0eae' }}>
                            Module Goal
                        </h2>
                        <p className="text-gray-800">
                            <Editable id={`${moduleKey}-goal`} defaultText="Learners will be able to use cloud services for file management and collaborate effectively using online tools." />
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#bf0eae' }}>
                            Learning Resources
                        </h2>
                        <ul className="list-disc list-inside space-y-3 text-lg">
                            {resources.map((resource, index) => (
                                <li key={index} className="text-gray-800">
                                    <Editable id={`${moduleKey}-resource-${index}`} defaultText={resource} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6 mt-8">
                        <Link to="/modules" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium mb-4 sm:mb-0">
                            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Modules
                        </Link>
                        <Link to="/module4" className="flex items-center px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300" style={{ backgroundColor: '#1aa22c' }}>
                            Next Module <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
