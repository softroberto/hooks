import { useRef } from "react";

const UseRef = () => {
  //
  const ref = useRef();
  const inputRef = useRef();
  //
  const click = () => {
    console.log(ref.current);
    console.log(ref.current.clientHeight);
  };
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}> Focus</button>
      <div onClick={click} ref={ref}>
        chingoon
      </div>
    </div>
  );
};
export default UseRef;
