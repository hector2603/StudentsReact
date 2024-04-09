import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function CreateStudent({ onStudentCreated }) {
  // HOOKS

  //USE STATE

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateString(name) &&
      !validateString(lastname) &&
      validatePhoto(photo)
    ) {
        onStudentCreated({ name, lastname, photo });
        setName("");
        setLastname("");
        setPhoto("");
    } else {
      alert("Por favor, rellene todos los campos correctamente");
    }
  };

  const validateString = (string) => {
    return string != "" && string.length < 5;
  };

  const validatePhoto = (photo) => {
    try {
      if (photo == "") return true;
      new URL(photo);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <form className="form-create-student" onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        style={{ margin: 10 }}
        onChange={handleName}
        value={name}
      />
      <TextField
        id="lastname"
        label="Apellido"
        variant="outlined"
        style={{ margin: 10 }}
        onChange={handleLastname}
        value={lastname}
      />
      <TextField
        id="photo"
        label="Url de la foto"
        variant="outlined"
        style={{ margin: 10 }}
        onChange={handlePhoto}
        value={photo}
      />

      <Button variant="contained" type="submit" style={{ margin: 10 }}>
        Crear
      </Button>
    </form>
  );
}
