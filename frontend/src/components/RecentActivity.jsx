const activities = [

  {
    title: "Lead Created",
    company: "Microsoft",
    time: "10 mins ago",
  },

  {
    title: "Lead Updated",
    company: "Google",
    time: "45 mins ago",
  },

  {
    title: "Status Changed",
    company: "Amazon",
    time: "2 hours ago",
  },

  {
    title: "Lead Deleted",
    company: "IBM",
    time: "Yesterday",
  },

];

export default function RecentActivity() {

  return (

    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-5">

        Recent Activity

      </h2>

      <div className="space-y-5">

        {activities.map((item, index) => (

          <div
            key={index}
            className="border-b pb-4 last:border-none"
          >

            <p className="font-medium">

              {item.title}

            </p>

            <p className="text-gray-500 text-sm">

              {item.company}

            </p>

            <p className="text-xs text-gray-400 mt-1">

              {item.time}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}