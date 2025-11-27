import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const courseOptions = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Microsoft Access",
  "Email & Communication",
  "Digital Literacy Basics",
];

export default function StudentRegistration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [progress, setProgress] = useState("Not Started");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCourseSelect = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const handleSubmit = () => {
    const studentData = {
      name,
      phone,
      email,
      selectedCourses,
      progress,
      feedback,
    };
    
    addStudent(studentData);

    setSubmitted(true);

    // Clear form
    setName("");
    setPhone("");
    setEmail("");
    setSelectedCourses([]);
    setProgress("Not Started");
    setFeedback("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-4">Student Registration</h1>

      {submitted && (
        <div className="p-3 mb-4 bg-green-200 text-green-800 rounded">
          Student Registered Successfully!
        </div>
      )}

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email (optional)"
          className="w-full p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <p className="font-semibold mb-2">Select Courses:</p>
          <div className="grid grid-cols-1 gap-2">
            {courseOptions.map((course) => (
              <label key={course} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(course)}
                  onChange={() => handleCourseSelect(course)}
                />
                {course}
              </label>
            ))}
          </div>
        </div>

        <select
          className="w-full p-3 border rounded-lg"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <textarea
          placeholder="Student Feedback"
          className="w-full p-3 border rounded-lg"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Submit Registration
        </button>
      </div>
    </div>
  );
}
