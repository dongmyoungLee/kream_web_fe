import React, { useState, useEffect } from "react";
import Layout from "../../blocks/Layout";
import axios from "axios";
import {mbtiResult} from "../../../common/api/ApiGetService";
import "../../../styles/pages/layout/mbti.css";

const Mbti = () => {
  const [questions, setQuestions] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [mbti, setMbti] = useState('');

  useEffect(() => {
    //
    mbtiResult().then((res) => {
      setQuestions(res.data.questions);
    }).catch((err) => {

    })
  }, []);

  // user select method..
  const handleChoiceSelect = (choice) => {
    // 1번 골랐는지 2번 골랐는지
    setSelectedChoice(choice);

    // 선택한 카테고리
    const currentCategory = questions[currentCategoryIndex];

    // 선택한 카테고리의 질문
    const currentQuestion = currentCategory.questions[currentQuestionIndex];

    axios.post(`http://localhost:8080/questions/${currentCategoryIndex}/${currentQuestionIndex}/${choice}`)
      .then((response) => {
        // 질문의 번호가 (카테고리의 개수 - 1)와 같다면 .. ?
        if (currentQuestionIndex === currentCategory.questions.length - 1) {

          // 카테고리의 번호가 (질문의 개수 - 1)와 같다면 .. ? ( 마지막 질문이 마치고 난 후 )
          if (currentCategoryIndex === questions.length - 1) {

            // mbti 결과받기
            fetchMbtiResult();

            // 카테고리의 개수를 질문의 개수랑 같게 맞춰주면.. 결과값이 보여주게 해놨음..
            setCurrentCategoryIndex(currentCategoryIndex + 1);
          } else {
            // 카테고리가 변경될 때.
            mbtiResult().then((res) => {
              setQuestions(res.data.questions);
              setCurrentCategoryIndex(currentCategoryIndex + 1);
              setCurrentQuestionIndex(0);
            }).catch((err) => {
              // Handle error
            });
          }
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  const fetchMbtiResult = () => {

    mbtiResult()
      .then((res) => {
        console.log(res);
        setMbti(res.data.type);
      })
      .catch((err) => {
        // Handle error
      });
  };


  const cleanQuestionHeader = (question) => {
    const headerEndIndex = question.indexOf("1.") !== -1 ? question.indexOf("1.") : question.indexOf("2.");
    return question.substring(0, headerEndIndex).trim();
  };

  const cleanQuestionText = (question) => {
    const headerEndIndex = question.indexOf("1.") !== -1 ? question.indexOf("1.") : question.indexOf("2.");
    return question.substring(headerEndIndex).trim();
  };

  const reloadPage = async () => {

    const data = await axios.post('http://localhost:8080/questions/clear');

    window.location.reload();
  }


  return (
    <>
      <Layout>
        {questions.length > 0 &&
          questions.map((category, categoryIndex) => (
            // 카테고리의 index 가  map 의 idx 와 같으면 "active" 를 줌으로써 css controling..
            <div key={categoryIndex} className={`category ${currentCategoryIndex === categoryIndex ? "active" : ""}`}>
              {category.questions.map((question, questionIndex) => (

                // 질문의 index 가  map 의 idx 와 같으면 "active" 를 줌으로써 css controling..
                <div key={questionIndex} className={`question ${currentQuestionIndex === questionIndex ? "active" : ""}`}>
                  <div className="question-header">
                    <p style={{fontSize : '22px', textAlign : 'center', marginBottom : '20px'}}>{cleanQuestionHeader(question.question)}</p>
                  </div>
                  <div className="question-text">
                    <p style={{fontSize : '22px', textAlign : 'center', marginBottom : '20px'}}>{cleanQuestionText(question.question)}</p>
                  </div>
                  <div className="button-group">
                    <button className="choice-button" onClick={() => handleChoiceSelect(1)}>
                      Choice 1
                    </button>
                    <button className="choice-button" onClick={() => handleChoiceSelect(2)}>
                      Choice 2
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        <div style={{ display: currentCategoryIndex === questions.length ? "block" : "none" }}>
          <h1 className="mbti-result">Your MBTI: {mbti}</h1>
          <button onClick={reloadPage}>다시하기</button>
        </div>
      </Layout>
    </>
  );
};

export default Mbti;