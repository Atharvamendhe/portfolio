export default function InterviewMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <i /><i /><i />
        <span>Live Session</span>
      </div>
      <div className="mock-body">
        <div className="mock-q">
          <b>Question 04</b>
          Describe a time you optimized a slow database query. What was your approach?
        </div>
        <div className="mock-a">
          I started by profiling the query with EXPLAIN ANALYZE to find the bottleneck,
          then added a composite index on the filtered columns…
          <span className="caret" />
        </div>
        <div className="mock-score">
          <div className="score-ring"><b>87</b></div>
          <div className="score-label">
            <strong>Strong answer</strong>
            Clear structure · Good specifics
          </div>
        </div>
      </div>
    </div>
  );
}