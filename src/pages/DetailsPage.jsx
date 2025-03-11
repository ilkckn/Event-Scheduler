import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const id = user.id;
  const name = user.name;

  const { eventid } = useParams();
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];
    const entry = storedEntries.find((entry) => entry.id === eventid);
    setSelectedEntry(entry);
  }, [eventid]);

  if (!selectedEntry) {
    return (
      <p className="text-center text-lg text-[#005172] my-8">
        Entry not found.
      </p>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-4">
      <div className="box flex flex-col gap-8">
        <Link
          to={`/home/${id}/${name}`}
          className="text-white bg-blue-500 w-[10rem] h-[2.5rem] inline-flex items-center justify-center rounded-md cursor-pointer"
        >
          Back to Events
        </Link>
        <div className="content flex flex-col items-start gap-2 px-4">
          <h2 className="text-center text-[2rem] uppercase font-medium text-white tracking-[1px]">
            {selectedEntry.title}
          </h2>
          <p className="text-sm text-white text-[1rem]">
            {new Date(selectedEntry.date).toLocaleDateString()}
          </p>
          <div className="w-[60rem] flex justify-start">
            <img
              className="w-full h-auto mx-auto rounded-md border-1 shadow-md"
              src={selectedEntry.image}
              alt={selectedEntry.title}
            />
          </div>
          <p className="text-justify text-white">{selectedEntry.content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
