import LeadRow from "./LeadRow";

const leads = [

  {
    id: 1,
    company: "Microsoft",
    contact: "John Doe",
    email: "john@microsoft.com",
    phone: "+91 9876543210",
    industry: "Technology",
    status: "New",
  },

  {
    id: 2,
    company: "Amazon",
    contact: "Sarah Lee",
    email: "sarah@amazon.com",
    phone: "+91 9123456789",
    industry: "E-Commerce",
    status: "Qualified",
  },

  {
    id: 3,
    company: "Google",
    contact: "David Kim",
    email: "david@google.com",
    phone: "+91 9988776655",
    industry: "Technology",
    status: "Contacted",
  },

];

export default function LeadTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Company
            </th>

            <th className="px-6 py-4 text-left">
              Contact
            </th>

            <th className="px-6 py-4 text-left">
              Email
            </th>

            <th className="px-6 py-4 text-left">
              Phone
            </th>

            <th className="px-6 py-4 text-left">
              Industry
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead) => (
            <LeadRow
              key={lead.id}
              lead={lead}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}