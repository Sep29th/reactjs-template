import { useEffect, useState } from "react";
import { getAllTopics } from "../../services/topics";
import TopicData from "../../components/TopicData";

function Topic() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const getTopic = async () => {
      const data = await getAllTopics();
      setTopics(data);
    };
    getTopic();
  }, []);
  return (
    <>
      <div className="topic">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="topic__title">Danh sách chủ đề ôn luyện</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="topic__table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Tên chủ đề</th>
                      <th scope="col">Thực hiện</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topics.length > 0 &&
                      topics.map((item) => (
                        <TopicData item={item} key={item.id} />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Topic;
