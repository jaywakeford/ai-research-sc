'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            AI Research & SC Analytics
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-white bg-blue-500' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/research"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/research') ? 'text-white bg-blue-500' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Research Papers
            </Link>
            <Link
              href="/supply-chain"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/supply-chain') ? 'text-white bg-blue-500' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Supply Chain
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 