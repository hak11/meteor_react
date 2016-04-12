Header = React.createClass({
  render() {
    var navStyle = {
      backgroundColor: "#3f51b5",
      paddingLeft: "12px"
    };
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Mitratech Administration System</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
