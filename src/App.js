import "./App.css"
export default function App() {
  return (
    <div className="App">
      <Details
        span1="$0"
        title="FREE"
        access="✔"
        ride="✔"
        goal="×"
        strong=" Single user"
        Storage="5GB Storage"
        ul="Unlimited Public Projects"
        p="Community Access"
        Unlimited="Unlimited Private Projects"
        phone="Dedicated Phone Support"
        sub="Free Subdomain"
        reports="Monthly Status Reports"
        button="BUTTON"
        hr="hr"
      />
      <Details
        span2="$9"
        title="PLUS"
        access="✔"
        rope="✔"
        ride2="×"
        li="5 User"
        Storage="50GB Storage"
        ul="Unlimited Public Projects"
        p="Community Access"
        private="Unlimited Private Projects"
        dedicated="Dedicated Phone Support"
        free="Free Subdomain"
        status="Monthly Status Reports"
        button="BUTTON"
        hr="hr"
      />
      <Details
        span3="$49"
        title="PRO"
        ride3="✔"
        access="✔"
        li=" Unlimited User"
        Storage="150GB Storage"
        ul="Unlimited Public Projects"
        p="Community Access"
        projects="Unlimited Private Projects"
        support="Dedicated Phone Support"
        unlimited="Unlimited" free=" Free Subdomain"
        monthly="Monthly Status Reports"
        button="BUTTON"
        hr="hr"
      />
    </div>
  );
}
function Details(props) {
  return (
    <div className="card">
      <h3 className="title">{props.title}</h3>
      <span className="card-title">{props.span1}</span>
      <span className="card-time">{props.span2}</span>
      <span className="card-role">{props.span3}</span>
      <span className="period">/month</span>
      <hr></hr>
      <ul>
        <b>{props.rope}</b>
        <b>{props.ride}</b>
        <b>{props.ride3}</b>
        <span className="num"> {props.li}</span>
        {props.strong}
      </ul>
      <ul>
        <b>{props.access}</b>
        {props.Storage}
      </ul>
      <ul>
        <b>{props.access}</b>
        {props.ul}
      </ul>
      <ul>
        <b>{props.access}</b>
        {props.p}
      </ul>
      <ul>
        <span><b>{props.ride3}</b></span>
        <span><b>{props.rope}</b></span>
        <span id="disable"><b class="bold">{props.goal}</b></span>
        <span id="disable"> {props.Unlimited}</span>
        <span> {props.private}</span>
        <span> {props.projects}</span>
      </ul>
      <ul>
        <span><b>{props.rope}</b></span>
        <span><b>{props.ride3}</b></span>
        <span> {props.support}</span>
        <span> {props.dedicated}</span>
        <span id="disable"><b className="bold">{props.goal}</b></span>
        <span id="disable"> {props.phone}</span>
      </ul>
      <ul>
        <span><b>{props.ride3}</b></span>
        <span><b> {props.unlimited}</b></span>
        <span><b>{props.rope}</b></span>
        <span> {props.free}</span>
        <span id="disable"><b className="bold">{props.goal}</b></span>
        <span id="disable"> {props.sub}</span>
      </ul>
      <ul>
        <span className="cont">{props.access2}</span>
        <span><b>{props.ride3}</b></span>
        <span id="disable"><b className="bold">{props.goal}</b></span>
        <span> {props.monthly}</span>
        <span id="disable"> {props.reports}</span>
        <span id="disable"><b className="bold">{props.ride2}</b></span>
        <span id="disable"> {props.status}</span>
      </ul>
      <button className="submit">{props.button}</button>
    </div>

  );
}