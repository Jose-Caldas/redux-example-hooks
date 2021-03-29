import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function addCourseAction(title) {
  return { type: "ADD_COURSE", title };
}

function CourseList() {
  const courses = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction(Title));
  }

  const [Title, setTitle] = useState("");
  const submitHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Add Course
      </button>
      <input onChange={submitHandler} type="text"></input>
    </>
  );
}

export default CourseList;
