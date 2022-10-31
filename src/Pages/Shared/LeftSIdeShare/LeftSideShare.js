import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideShare = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`https://master-study-server-henna.vercel.app/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="bg-success rounded p-2 text-white">
      <h4>All Courses : {courses.length}</h4>
      {courses.map((course) => (
        <p key={course.id}>
          <Link className="text-white" to={`/courses/${course.id}`}>
            {course.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideShare;
