import { ReactNode } from 'react';

interface ExampleBoxProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ExampleBox({ title, description, children }: ExampleBoxProps) {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-300 dark:border-gray-600 mb-12 transition-all duration-200 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-400">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      {children}
    </section>
  );
} 