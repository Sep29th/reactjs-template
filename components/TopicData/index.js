import { Link } from "react-router-dom";

function TopicData(props) {
  const { item } = props;
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>
          <Link className="btn btn-outline-secondary" to={"/quiz/" + item.id}>
            Làm bài
          </Link>
        </td>
      </tr>
    </>
  );
}
export default TopicData;
