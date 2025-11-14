import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Target } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import { Editable } from '../components/ui/Editable';

export default function Module2() {
  const { content, handleUpdate } = useContent();
  const moduleContent = content.module2;

  if (!moduleContent) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading module content...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-8 sm:p-10">
          <Editable
            id="module2.title"
            content={moduleContent.title}
            onSave={handleUpdate}
            className="hover:bg-purple-50 dark:hover:bg-purple-900/50 rounded-md -m-2 p-2"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-600 dark:text-purple-400 leading-tight">
              {moduleContent.title}
            </h1>
          </Editable>
          
          <Editable
            id="module2.description"
            content={moduleContent.description}
            onSave={handleUpdate}
            className="hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md -m-2 p-2 mt-4"
          >
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {moduleContent.description}
            </p>
          </Editable>

          <div className="mt-10 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 dark:border-green-400 p-6 rounded-r-lg">
             <div className="flex items-start">
                <Target className="h-8 w-8 text-green-600 dark:text-green-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                    <Editable
                        id="module2.goalTitle"
                        content={moduleContent.goalTitle}
                        onSave={handleUpdate}
                        className="hover:bg-green-100 dark:hover:bg-green-800/50 rounded-md -m-1 p-1"
                    >
                        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">
                            {moduleContent.goalTitle}
                        </h2>
                    </Editable>
                    <Editable
                        id="module2.goal"
                        content={moduleContent.goal}
                        onSave={handleUpdate}
                        className="hover:bg-green-100 dark:hover:bg-green-800/50 rounded-md -m-1 p-1 mt-2"
                    >
                        <p className="mt-2 text-green-700 dark:text-green-300">
                            {moduleContent.goal}
                        </p>
                    </Editable>
                </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-6">
              <BookOpen className="h-7 w-7 text-purple-500 dark:text-purple-400 mr-3" />
              <Editable
                id="module2.resources.title"
                content={moduleContent.resources.title}
                onSave={handleUpdate}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md -m-2 p-2"
              >
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  {moduleContent.resources.title}
                </h3>
              </Editable>
            </div>
            <ul className="space-y-4">
              {moduleContent.resources.list.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <Editable
                    id={`module2.resources.list.${index}`}
                    content={item}
                    onSave={handleUpdate}
                    className="w-full hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md -ml-1 p-1"
                  >
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                  </Editable>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 px-8 py-6 flex justify-between items-center">
          <Link
            to="/modules"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            All Modules
          </Link>
          <Link
            to="/modules/3"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Next Module
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
