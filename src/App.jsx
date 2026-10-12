import CardContainer from "./components/CardContainer";
import AddDestination from "./components/AddDestination";
import { useState } from "react";

function App() {
  const data = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGLxuiYzsQuYOGDLgW6delttAXobyQJpbEilHGJhQcw&s=10",
      title: "woodland forests",
      description: "Explore the beauty of nature and discover amazing places.",
      available: false,
    },
  ];
  const [users, setUsers] = useState([]);

  const handleSubmitData=(data) => {
    setUsers((prevUsers => [...prevUsers, data]));
  }
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <CardContainer users={users} destinationData = {data}/>

        <AddDestination users={users} handleSubmitData = {handleSubmitData} />
      </div>
    </main>
  );
}

export default App;
