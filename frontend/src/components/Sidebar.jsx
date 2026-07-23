import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Leads",
    icon: Users,
    path: "/leads",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#13294B] text-white flex flex-col">

      {/* Logo */}

      <div className="px-6 py-8">

        <h1 className="text-2xl font-bold">
          SalesGenie
        </h1>

        <p className="text-sm text-gray-300 mt-1">
          AI Sales Assistant
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition
                ${
                  isActive
                    ? "bg-white text-[#13294B] font-semibold"
                    : "hover:bg-[#20395F]"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom */}

      <div className="p-4 border-t border-slate-700">

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-[#20395F]">

          <Settings size={20} />
          Settings

        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-600 mt-2">

          <LogOut size={20} />
          Logout

        </button>

      </div>

    </aside>
  );
}