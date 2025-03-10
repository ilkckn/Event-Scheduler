import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DetailPage = () => {
 
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const id= user.id;
  const name= user.name;

  const { eventid } = useParams();
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    const entry = storedEntries.find((entry) => entry.id === eventid);
    setSelectedEntry(entry);
  }, [eventid]);

  if (!selectedEntry) {
    return <p className="text-center text-lg text-[#005172] my-8">Entry not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
     <Link to= {`/home/${id}/${name}`} className="text-blue-500 underline">Back to Events</Link>
      <h2 className="text-center text-2xl font-bold text-[#886300]">{selectedEntry.title}</h2>
      <p className="text-sm text-[#4d3800]">{new Date(selectedEntry.date).toLocaleDateString()}</p>
      <div className="m-3">
        <img
          className="max-w-full h-auto mx-auto rounded-md border-1 border-[#886300] shadow-md"
          src={selectedEntry.image}
          alt={selectedEntry.title}
        />
      </div>
      <p className="text-justify m-3 text-[#4d3800]">{selectedEntry.content}</p>
    </div>
  );
};

export default DetailPage;
