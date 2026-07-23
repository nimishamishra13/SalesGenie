import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import LeadTable from "../components/LeadTable";
import AddLeadModal from "../components/AddLeadModal";

import { Search } from "lucide-react";
export default function Leads() {
    const [open, setOpen] = useState(false);
  return (
    <DashboardLayout>

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Leads & Prospects
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all your sales prospects
          </p>

        </div>

        <button
            onClick={() => setOpen(true)}
            className="bg-[#13294B] text-white px-6 py-3 rounded-lg"
            >

            + Add Prospect

        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow-sm border p-5 mb-6">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search company..."
            className="border rounded-lg pl-10 pr-4 py-3 w-full"
          />

        </div>

      </div>

      {/* Status Filters */}

      <div className="flex gap-4 mb-6">

        <button className="px-5 py-2 rounded-lg bg-[#13294B] text-white">
          All
        </button>

        <button className="px-5 py-2 rounded-lg bg-white border">
          New
        </button>

        <button className="px-5 py-2 rounded-lg bg-white border">
          Contacted
        </button>

        <button className="px-5 py-2 rounded-lg bg-white border">
          Qualified
        </button>

        <button className="px-5 py-2 rounded-lg bg-white border">
          Closed
        </button>

      </div>

      {/* Table */}

      <LeadTable />
        <AddLeadModal
        open={open}
        onClose={() => setOpen(false)}
        />
    </DashboardLayout>
  );
}