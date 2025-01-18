import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Cashalyze</h1>
        <p className="text-gray-600 mb-8">
          Your AI-powered cashflow analysis tool. Upload your bank statements to get started.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Upload Statements</h2>
            <p className="text-gray-600 mb-4">
              Upload your bank statements in PDF format to begin analysis.
            </p>
            <Link
              href="/upload"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Upload Now
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">View Dashboard</h2>
            <p className="text-gray-600 mb-4">
              Explore your financial insights and visualizations.
            </p>
            <Link
              href="/dashboard"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Go to Dashboard
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Manage Categories</h2>
            <p className="text-gray-600 mb-4">
              Customize your transaction categories for better insights.
            </p>
            <Link
              href="/categories"
              className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Manage Categories
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
