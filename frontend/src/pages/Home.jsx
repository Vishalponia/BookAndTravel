import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/experiences")
      .then((res) => {
        setExperiences(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading experiences...</p>;

  return (
    <div className="grid md:grid-cols-3  gap-6 mt-6">
      {experiences.length === 0 ? (
        <p>No experiences found.</p>
      ) : (
        experiences.map((exp) => (
          <div
            key={exp._id}
            className="bg-gradient-to-red from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{exp.title}</h2>
              <p className="text-black mt-2 text-sm">{exp.description}</p>
              <p className="font-bold mt-2">₹{exp.price}</p>
              <Link
                to={`/details/${exp._id}`}
                className="mt-3 inline-block bg-blue-600 text-white px-3 py-1 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}




