'use client';

export default function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="mt-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm px-4 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      다크모드 토글
    </button>
  );
}