import classes from "../../styles/pages/layout/mypage.module.css";
import {useEffect, useRef, useState} from "react";
import {skillSet} from "../../common/Menus";
import arrowTop from "../../asset/images/arrowtop.png";
import arrowBtm from "../../asset/images/arrowbottom.png";
import {useSelector} from "react-redux";

const InputSkillBox = (props) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const myMenuRef = useRef(null);
  const myMenuRef2 = useRef(null);
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const tmpArr = [];

  if(isLogin.userJobSkill != null) {
    for (let i = 0; i < isLogin.userJobSkill.split(",").length; i++) {
      tmpArr.push(isLogin.userJobSkill.split(",")[i])
    }
  }


  const [skillItems, setSkillItems] = useState(tmpArr);

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (myMenuRef.current && !myMenuRef.current.contains(e.target) && !myMenuRef2.current.contains(e.target)) {
        setIsOpenDropDown(false);
      }

    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [myMenuRef]);

  useEffect(() => {
    const formattedString = skillItems.join(',');
    props.settingSkills(formattedString);
  }, [skillItems]);

  const dropDownMenuShow = () => {
    setIsOpenDropDown(!isOpenDropDown);
  }

  const skillItemClick =  (e) => {
    const text = e.target.innerText;
    // 이미 해당 요소가 배열에 있는 경우, 제거합니다.
    if (skillItems.includes(text)) {
      const updatedItems = skillItems.filter(item => item !== text);
      setSkillItems(updatedItems);
      e.target.style.backgroundColor = '';
      e.target.style.color = '#3A3E41';
    } else {
      // 배열에 요소를 추가합니다. (최대 3개까지)
      if (skillItems.length < 3) {
        setSkillItems(prevItems => [...prevItems, text]);
        e.target.style.backgroundColor = '#0062df';
        e.target.style.color = '#fff';
      }
    }
  }

  return (
    <div className={classes.selectSectionSkill}>
      <div className={classes.selectText}>
        <p>{props.label}</p>
      </div>
      <div className={classes.dropSkillMenuWrap}>
        <div className={classes.skillsWrap} onClick={dropDownMenuShow} ref={myMenuRef2}>
          <div className={classes.skillsWrap2}>
            {skillItems.length === 0 && <p className={classes.skillPlaceHolde}>선택</p>}
            {skillItems.map((item, idx) => (
              <div key={idx} className={classes.skill}>
                {item}
              </div>
            ))}
          </div>
          <div className={classes.arrowSection}>
            {isOpenDropDown && <img className={classes.arrowSize} src={arrowTop} />}
            {!isOpenDropDown && <img className={classes.arrowSize} src={arrowBtm} />}
          </div>
        </div>
        {isOpenDropDown && <div className={classes.dropDownMenu} ref={myMenuRef}>
          <div className={classes.itemWrap}>

            {/*{skillSet.map((item, idx) => (*/}
            {/*  <div key={idx} onClick={skillItemClick} className={classes.skillSelect}>{item.menuName}</div>*/}
            {/*))}*/}
            {skillSet.map((item, idx) => {

              const isSelected = skillItems.includes(item.menuName) || (item.menuName === skillItems[0]) || (item.menuName === skillItems[1]) || (item.menuName === skillItems[2]);// 항목이 선택되었는지 확인

              return (
                <div
                  key={idx}
                  onClick={skillItemClick}
                  className={`${classes.skillSelect} ${isSelected ? 'selected' : ''}`} // 선택된 항목에 'selected' 클래스 추가
                  style={{
                    backgroundColor: isSelected ? '#0062df' : '', // 선택된 항목에 배경색 적용
                    color: isSelected ? '#fff' : '#3A3E41', // 선택된 항목에 글자색 적용
                  }}
                >
                  {item.menuName}
                </div>
              );
            })}


          </div>
        </div>}

      </div>
    </div>
  );
}

export default InputSkillBox;