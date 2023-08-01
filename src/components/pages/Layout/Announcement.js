import Layout from "../../blocks/Layout";
import {findUserJobInfo, test1, updateUserJobProfile} from "../../../common/api/ApiPostService";
import {useState} from "react";
import axios from "axios";

const Announcement = () => {
  const [mySkills, setMySkills] = useState(['Flutter', 'Kotlin']);

  const testM = () => {





  }

  return (
      <>
        <Layout >
          <p>채용 공고 페이지</p>
          <button onClick={testM}>test</button>
        </Layout>
      </>
  );
}

export default Announcement;