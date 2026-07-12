import { Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function LeadRow({ lead }) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">

      <td className="px-6 py-4 font-medium">
        {lead.company}
      </td>

      <td className="px-6 py-4">
        {lead.contact}
      </td>

      <td className="px-6 py-4">
        {lead.email}
      </td>

      <td className="px-6 py-4">
        {lead.phone}
      </td>

      <td className="px-6 py-4">
        {lead.industry}
      </td>

      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium
          ${
            lead.status === "New"
              ? "bg-blue-100 text-blue-700"
              : lead.status === "Qualified"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {lead.status}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex gap-3">

          <Link to={`/lead/${lead.id}`}>
            <Eye
              size={18}
              className="text-gray-600 hover:text-blue-600"
            />
          </Link>

          <button>
            <Pencil
              size={18}
              className="text-gray-600 hover:text-green-600"
            />
          </button>

          <button>
            <Trash2
              size={18}
              className="text-gray-600 hover:text-red-600"
            />
          </button>

        </div>
      </td>

    </tr>
  );
}