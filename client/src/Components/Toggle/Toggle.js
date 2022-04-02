import React, { useEffect } from 'react';

const Toggle = ({ toggle, setToggle }) => {
  //Component will unmount
  useEffect(() => {
    return () => {
      console.log('conponent will unmount');
    };
  }, []);

  return (
    <div>
      <button onClick={() => setToggle(true)}>True</button>
      <button onClick={() => setToggle(false)}>False</button>
      {toggle ? <div>Ibrahi</div> : <div>Ibrahim</div>}
    </div>
  );
};

export default Toggle;
