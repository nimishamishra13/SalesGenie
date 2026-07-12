import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm h-20 px-8 flex items-center justify-between">

      {/* Left */}

      <div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          Welcome back!
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-72 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Notification */}

        <button className="relative">

          <Bell
            size={24}
            className="text-gray-700"
          />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <img
            src="https://ui-avatars.com/api/?name=Sales+User"
            alt="profile"
            className="h-11 w-11 rounded-full"
          />

          <div>

            <p className="font-medium">
              Sales Manager
            </p>

            <p className="text-sm text-gray-500">
              Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}