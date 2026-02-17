import { useEffect, useState, type FunctionComponent } from "react";

export const SlowComponent: FunctionComponent = () => {
  const [result, setResult] = useState(0);

  const heavyComputation = () => {
    const init = Math.round(Math.random() * 10);
    let comp = 0;
    for (let i = init; i < 1_000_000_000; i++) {
      comp += Math.sqrt(i);
    }
    return comp;
  };

  useEffect(() => {
    setResult(heavyComputation());
  });

  return (
    <p>
      <span>This is a very slow component</span>
      <br />
      <span>The result is: {result}</span>
    </p>
  );
};
