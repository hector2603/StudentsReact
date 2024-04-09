import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function StudentInfo(props) {
  return (
    <div className="list-element">
      <img
        className="foto-perfil"
        src={props.photo}
        alt=" foto de warrent "
      />
      <div className="name-lastname-element">
        <h1>{props.name}</h1>
        <h2>{props.lastname}</h2>
      </div>
      <VisibilityOutlinedIcon />
    </div>
  );
}
