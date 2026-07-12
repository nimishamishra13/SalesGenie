const stages = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Negotiation",
  "Closed Won",
];

export default function LeadProgress({
  current = "Qualified",
}) {
  const activeIndex = stages.indexOf(current);

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h3 className="text-lg font-semibold mb-6">
        Sales Progress
      </h3>

      <div className="flex justify-between items-center">

        {stages.map((stage, index) => (

          <div
            key={stage}
            className="flex flex-col items-center flex-1"
          >

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center
              ${
                index <= activeIndex
                  ? "bg-[#13294B] text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>

            <p className="text-sm mt-2 text-center">
              {stage}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}