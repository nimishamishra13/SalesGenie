import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/StatCard";
import RecentActivity from "../components/RecentActivity";

export default function Dashboard() {

  return (

    <DashboardLayout>

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">

            Overview

          </h1>

          <p className="text-gray-500 mt-1">

            Manage your prospects and sales pipeline

          </p>

        </div>

        <button
          className="bg-[#13294B] hover:bg-[#1B3A66]
          text-white px-6 py-3 rounded-lg
          font-medium"
        >

          + Manage Prospects

        </button>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-4 gap-6 mb-8">

        <StatCard
          title="Total Prospects"
          value="156"
          color="bg-blue-500"
        />

        <StatCard
          title="New Leads"
          value="42"
          color="bg-green-500"
        />

        <StatCard
          title="Qualified Leads"
          value="38"
          color="bg-yellow-500"
        />

        <StatCard
          title="Closed Leads"
          value="17"
          color="bg-purple-500"
        />

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-3 gap-6">

        {/* Left */}

        <div className="col-span-2 bg-white rounded-xl shadow-sm border p-6">

          <h2 className="text-xl font-semibold mb-5">

            Welcome to SalesGenie

          </h2>

          <p className="text-gray-600 leading-8">

            This dashboard helps sales teams manage prospects,
            organize lead information, track lead lifecycle,
            and prepare for future AI-powered sales intelligence
            modules.

            <br /><br />

            Use the sidebar to navigate through the application
            and manage all your customer records efficiently.

          </p>

        </div>

        {/* Right */}

        <RecentActivity />

      </div>

    </DashboardLayout>

  );

}