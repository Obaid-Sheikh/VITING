
function DestinationCard({ destination }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
      <img
        src={destination.image}
        alt={destination.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-gray-900">
          {destination.title}
        </h3>

        <p className="mb-5 leading-7 text-gray-600">
          {destination.description}
        </p>

        <button
          disabled={!destination.available}
          className={`rounded-lg px-5 py-3 font-medium text-white transition-colors ${
            destination.available
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-gray-600"
          }`}
        >
          {destination.available ? "Explore" : "Coming Soon"}
        </button>
      </div>
    </article>
  );
}

export default DestinationCard;
