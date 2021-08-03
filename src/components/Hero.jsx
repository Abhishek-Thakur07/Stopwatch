import { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

export const Hero = () => {
  const [timer, setTimer] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [interv, setInterv] = useState("");
  const [status, setStatus] = useState(0);
  var updatedMs = timer.ms,
    updatedH = timer.h,
    updatedM = timer.m,
    updatedS = timer.s;

  const run = () => {
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    updatedMs++;
    return setTimer({ h: updatedH, m: updatedM, s: updatedS, ms: updatedMs });
  };
  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  };
  const pause = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTimer({ h: 0, m: 0, s: 0, ms: 0 });
  };
  const resume = () => start();

  return (
    <div>
      <Display time={timer} />
      <Button
        start={start}
        status={status}
        interv={pause}
        reset={reset}
        resume={resume}
      />
    </div>
  );
};
