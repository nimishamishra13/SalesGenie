export default function NotesCard() {

  return (

    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-5">

        Notes

      </h3>

      <div className="space-y-5">

        <div className="border-l-4 border-blue-500 pl-4">

          <p className="font-medium">
            Initial Contact
          </p>

          <p className="text-gray-500 text-sm mt-1">

            Introductory email sent to the prospect.

          </p>

        </div>

        <div className="border-l-4 border-green-500 pl-4">

          <p className="font-medium">

            Follow Up

          </p>

          <p className="text-gray-500 text-sm mt-1">

            Meeting scheduled for next week.

          </p>

        </div>

      </div>

    </div>

  );

}