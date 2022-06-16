import "./Card.css";

//This function component is created to generate a base card use instead of div wrapping others components.

function Card(props) {
  //Under classes allow that others className in others components are accepted as well.
  const classes = "card " + props.className;
  //props.children allows to display others children components using (in this case) Card as a wrapper.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
