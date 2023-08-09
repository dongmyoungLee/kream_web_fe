import classes from "../../styles/pages/layout/humanResources.module.css";
import arrow from "../../asset/images/arrowbottom.png";
import search from "../../asset/images/search.png";
import {humanResourcesCategory} from "../../common/Menus";
import {useEffect, useRef, useState} from "react";

const CategorySection = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('Nike');
  const [isDetailMenuShow, setIsDetailMenuShow] = useState(false);
  const myMenuRef = useRef(null);
  const myMenuRef2 = useRef(null);

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (myMenuRef.current && !myMenuRef.current.contains(e.target) && !myMenuRef2.current.contains(e.target)) {
        setIsDetailMenuShow(false);
      }

    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [myMenuRef]);



  const categoryMenuClickHandler = (e) => {
    setSelectedCategory(e.target.innerText);
    props.setCategory(e.target.innerText);
    setIsDetailMenuShow(!isDetailMenuShow);
  }
  const detailMenuShow = (e) => {
    setIsDetailMenuShow(!isDetailMenuShow);
  }


  const detailMenu = isDetailMenuShow ? <div className={classes.categoryDetailMenu} ref={myMenuRef}>
                                                  <ul>
                                                    {humanResourcesCategory.map((item, idx) => (
                                                      <div key={idx} className={classes.filterFlex} onClick={categoryMenuClickHandler}>
                                                        <div className={classes.flexCommon}>
                                                          <div style={{color : selectedCategory == item.menuName ? '#0062df' : ''}}  className={classes.labelOption}>{item.menuName}</div>
                                                        </div>
                                                      </div>
                                                    ))}
                                                  </ul>
                                                </div>
                                                : null;
  const handleSearchInputKeyPress = (e) => {
    // Check if the key pressed is the Enter key (key code 13)
    e.preventDefault();
    if (e.key === "Enter") {
      // Trigger the search when the user presses Enter
      props.productList(e);
    }
  };

  return (
    <>
      <section className={classes.categorySection}>
        <article className={classes.jobCategory} onClick={detailMenuShow} ref={myMenuRef2}>
          <span className={classes.jobTitle}>{selectedCategory}</span>
          <div className={classes.circle}>
            <img src={arrow} className={classes.circle_imgOption} />
          </div>
        </article>
        <article className={classes.searchCategory}>
          <form className={classes.formStyle}>
            <img src={search} className={classes.imgOption} />
            <input onKeyDown={handleSearchInputKeyPress} className={classes.inputOption} type="search" placeholder="이름 검색" />
            <button className="btnClear"></button>
          </form>
        </article>
        {detailMenu}
      </section>
    </>
  );
}

export default CategorySection;