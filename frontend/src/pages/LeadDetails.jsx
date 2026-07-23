import DashboardLayout from "../layouts/DashboardLayout";

import DetailCard from "../components/DetailCard";
import LeadProgress from "../components/LeadProgress";
import NotesCard from "../components/NotesCard";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function LeadDetails() {

  return (

    <DashboardLayout>

      <div className="flex items-center justify-between mb-8">

        <div>

          <Link
            to="/leads"
            className="flex items-center gap-2 text-blue-600 mb-3"
          >

            <ArrowLeft size={18} />

            Back to Leads

          </Link>

          <h1 className="text-3xl font-bold">

            Lead Details

          </h1>

        </div>

        <div className="flex gap-3">

          <button className="border px-5 py-2 rounded-lg">

            Edit

          </button>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg">

            Delete

          </button>

        </div>

      </div>

      <DetailCard />

      <div className="mt-8">

        <LeadProgress current="Qualified" />

      </div>

      <div className="mt-8">

        <NotesCard />

      </div>

    </DashboardLayout>

  );

}