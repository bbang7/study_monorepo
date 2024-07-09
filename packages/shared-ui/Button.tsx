export function Button(props: any) {
  console.log("my feature");
  console.log("hello my feature!");

  return <button onClick={() => props.onClick()}>{props.children}</button>;
}

export default Button;
