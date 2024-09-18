import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { timeRemaining, targetTime, onReset },
  ref
) {
  let result;
  const timeLeft = (timeRemaining / 1000).toFixed(2);
  const youLost = timeRemaining <= 0;
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {youLost && <h2>You lost</h2>}
      {!youLost && <h2>YOUR SCORE:{score}</h2>}
      <p>
        the target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the time with <strong>{timeLeft}</strong> seconds left.{" "}
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close!</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
