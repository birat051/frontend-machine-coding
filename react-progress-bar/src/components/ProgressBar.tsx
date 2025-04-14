interface ProgressBarProps {
  progress: number;
}

function ProgressBar(props: ProgressBarProps) {
  const { progress } = props;

  return (
    <>
      <div className="progress-bar">
        <div style={{ width: `${progress * 3}px` }} className="progress" />
        <div
          style={{ width: `${300 - progress * 3}px` }}
          className="progress-element"
        />
      </div>
      <h3>{progress}</h3>
    </>
  );
}

export default ProgressBar;
