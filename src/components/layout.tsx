'use client';

import Link from 'next/link';
import { useUIStore } from '@/stores/ui-store';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href}>
      <span className={className}>{children}</span>
    </Link>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>
            <NavLink href="/" className="text-xl font-bold text-gray-800">
              Cashalyze
            </NavLink>
          </div>
          <nav className="space-x-4">
            <NavLink href="/dashboard" className="text-gray-600 hover:text-gray-800">
              Dashboard
            </NavLink>
            <NavLink href="/upload" className="text-gray-600 hover:text-gray-800">
              Upload
            </NavLink>
            <NavLink href="/categories" className="text-gray-600 hover:text-gray-800">
              Categories
            </NavLink>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        <aside
          className={cn(
            'fixed lg:sticky top-0 h-screen w-64 bg-white border-r transform transition-transform duration-200 ease-in-out',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
            'lg:translate-x-0',
          )}
        >
          {/* Sidebar content */}
        </aside>

        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      </div>

      <footer className="bg-gray-50 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Cashalyze. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
