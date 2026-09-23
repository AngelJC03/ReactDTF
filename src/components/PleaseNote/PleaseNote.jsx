import "./PleaseNote.css";

function PleaseNote() {
  return (
    <div className="wwf-warning">
      <div className="wwf-warning-icon" aria-hidden="true">
        !
      </div>

      <div className="wwf-warning-content">
        <h3>Please Note</h3>

        <p>
          The Davis-Tennon Foundation reviews all requests and inquiries
          closely; however, as a rule, we do not respond to solicitations that
          fall outside our areas of support.
        </p>

        <p>
          Only organizations selected to receive funding will be contacted.
        </p>
      </div>
    </div>
  );
}

export default PleaseNote;
