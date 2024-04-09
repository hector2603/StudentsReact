import StudentInfo from "./studentInfo";
import CreateStudent from "./createStudent";
import StudentService from "./studentService";
import { useState, useEffect } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);

  // USE EFFECT
  useEffect(() => {
    StudentService.getStudents().then(setStudents).then(console.log(students));
  }, []);

  const onStudentCreated = (student) => {
    setStudents( (prevStudent) => [...prevStudent, student])
  };

  return (
    <div className="home-container">
      <div className="half">
        <h1>Crear Estudiante</h1>
        <CreateStudent onStudentCreated={onStudentCreated}/>
      </div>
      <div className="half">
        <h1>Lista de estudiantes</h1>
        {students.map((student, index) => (
          <StudentInfo
            name={student.name}
            lastname={student.lastname}
            photo={student.photo}
          />
        ))}
      </div>
    </div>
  );
}
