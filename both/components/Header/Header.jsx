Header = React.createClass({
  getInitialState() {
      return {
          isLoggedIn: User.isLoggedIn()
      };
  },
  logout() {
    Meteor.logout((er)=>{
      if(er) {
        Materialize.toast(er.reason, 4000);
      } else {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
        FlowRouter.go('/');
      }
    }.bind(this));
  },
  render() {
    var navStyle = {
      backgroundColor: "#3f51b5",
      paddingLeft: "12px"
    };
     var navOptions = User.isLoggedIn() ? <LoggedInNav logout={this.logout} /> : <LoggedOutNav />;
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Mitratech Administration System</a>
           {navOptions}
        </div>
      </nav>
    );
  }
});
