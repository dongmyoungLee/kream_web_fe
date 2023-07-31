import classes from "../../styles/pages/layout/humanResources.module.css";
import arrow from "../../asset/images/arrowbottom.png";
import {useEffect, useRef} from "react";

const FilterButton = (props) => {
  const myMenuRef = useRef(null);
  const myMenuRef2 = useRef(null);

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (myMenuRef.current && !myMenuRef.current.contains(e.target) && !myMenuRef2.current.contains(e.target)) {
        props.menuHide(false);
      }

    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [myMenuRef]);



  return (
    <>
      <button className={classes.filterOption} onClick={props.onClick} ref={myMenuRef2}>
        <div className={classes.marginfilter}>
          <span className={classes.filterText}>{props.value}</span>

          {props.count !== 0 && <span className={classes.filterNum}>{props.count}</span>}
        </div>
        <div className={classes.displayFilter}>
          <img src={arrow} className={classes.filterImgOption} />
        </div>
      </button>
      {props.isDetailMenuShow && <div style={{left : props.left}} className={classes.detailMenu} ref={myMenuRef}>
        <ul>
          {props.menuList.map((item, idx) => (
            <div className={classes.filterFlex} key={idx}>
              <div className={classes.flexCommon}>
                <input checked={props.userMemoryFilter.includes(item.menuName)} value={item.menuName} onChange={props.onChange} id={'filter' + idx} className={classes.checkBoxInput} type="checkbox" />
                <label htmlFor={'filter' + idx} className={classes.labelOption}>{item.menuName}</label>
              </div>
            </div>
          ))}
        </ul>
      </div>}

    </>
  );
}

export default FilterButton;