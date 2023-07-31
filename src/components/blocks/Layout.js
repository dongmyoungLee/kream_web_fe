import classes from '../../styles/blocks/layout.module.css';

const Layout = (props) => {
  return <div className={classes.layoutCenter}>{props.children}</div>
}

export default Layout;