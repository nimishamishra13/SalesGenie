export default function DetailCard() {
  return (

    <div className="bg-white rounded-xl border shadow-sm p-6">

      <div className="flex justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Microsoft
          </h2>

          <p className="text-gray-500">
            Technology
          </p>

        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full h-fit">

          Qualified

        </span>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div>

          <p className="text-gray-500 text-sm">
            Contact Person
          </p>

          <h4 className="font-medium">
            John Doe
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Email
          </p>

          <h4 className="font-medium">
            john@microsoft.com
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Phone
          </p>

          <h4 className="font-medium">
            +91 9876543210
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Website
          </p>

          <h4 className="font-medium">
            microsoft.com
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Location
          </p>

          <h4 className="font-medium">
            Bengaluru
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Lead Source
          </p>

          <h4 className="font-medium">
            LinkedIn
          </h4>

        </div>

      </div>

    </div>

  );
}