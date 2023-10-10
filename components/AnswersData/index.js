import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AnswerData(props) {
  const { item, topic } = props;
  const [topicName, setTopicName] = useState("");
  useEffect(() => {
    for (let index = 0; index < topic.length; index++) {
      if (topic[index].id === item.topicId) {
        setTopicName(topic[index].name);
        break;
      }
    }
  }, [item.topicId, topic]);
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{topicName}</td>
        <td>
          <Link className="btn btn-outline-secondary" to={"/result/" + item.id}>
            Xem chi tiết
          </Link>
        </td>
      </tr>
    </>
  );
}
export default AnswerData;
