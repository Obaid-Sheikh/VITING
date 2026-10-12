import DestinationCard from "./DestinationCard";

function CardContainer({ users ,destinationData}) {
  const { image, title, description, available } = destinationData[0];
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Destinations
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((item, index) => (
          <DestinationCard key={index} destination={item} />
        ))}
      </div>
    </section>
  );
}

export default CardContainer;