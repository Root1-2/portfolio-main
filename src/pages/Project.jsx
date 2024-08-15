import { useParams } from "react-router-dom";

function Project() {
  let { id } = useParams();
  return <div>Project with ID</div>;
}

export default Project;
