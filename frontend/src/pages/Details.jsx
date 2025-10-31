import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/experiences/${id}`)
      .then((res) => {
        setExperience(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading experience details...</p>;
  if (!experience) return <p>Experience not found.</p>;

  const handleBookNow = () => {
    if (!selectedSlot) {
      alert("Please select a slot before proceeding.");
      return;
    }
    navigate(`/checkout/${experience._id}`, {
      state: { experience, selectedSlot },
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-gray-400 rounded-lg shadow p-6">
      <img
        src={experience.image}
        alt={experience.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{experience.title}</h1>
      <p className="text-gray-600 mt-2">{experience.description}</p>
      <p className="font-bold text-lg mt-2">Price: ₹{experience.price}</p>

      <h3 className="font-semibold mt-4 mb-2">Available Slots:</h3>
      <div className="flex flex-wrap gap-2">
        {experience.slots.map((slot, index) => (
          <button
            key={index}
            onClick={() => setSelectedSlot(slot)}
            className={`px-3 py-1 border rounded ${
              selectedSlot === slot
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          to="/"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </Link>
        <button
          onClick={handleBookNow}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
