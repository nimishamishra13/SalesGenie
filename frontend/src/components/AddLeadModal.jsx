import { useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  location: "",
  leadStatus: "New",
  notes: "",
};

export default function AddLeadModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // API Call will come here later

    onClose();

    setForm(initialForm);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[700px] max-h-[90vh] overflow-y-auto">
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b">

          <div>

            <h2 className="text-2xl font-semibold">
              Add New Prospect
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Enter the prospect information below.
            </p>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-6"
        >

          <div className="grid grid-cols-2 gap-5">

            <div>

              <label className="block mb-2 font-medium">
                Company Name
              </label>

              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Contact Name
              </label>

              <input
                name="contactName"
                value={form.contactName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Website
              </label>

              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Industry
              </label>

              <input
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Location
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Lead Status
              </label>

              <select
                name="leadStatus"
                value={form.leadStatus}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Proposal</option>
                <option>Negotiation</option>
                <option>Closed Won</option>
                <option>Closed Lost</option>
              </select>

            </div>

          </div>

          <div className="mt-5">

            <label className="block mb-2 font-medium">
              Notes
            </label>

            <textarea
              rows="4"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg border"
            >
              Cancel
            </button>

            <button
              className="bg-[#13294B] text-white px-6 py-3 rounded-lg"
            >
              Create Prospect
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}