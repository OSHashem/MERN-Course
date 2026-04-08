// Conditional rendering = allows you to control what gets rendered in your application based on certain conditions. (ex. show, hide, or change components)

function UserGreeting({ username = "Guest", isLoggedIn = false }) {
  // If-else statements are not allowed in JSX, but we can use them outside of the return statement to determine what to render based on the condition. For example:
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.username}</h2>;
  //   }
  //   else{
  //     return <h2>Please Log In to continue </h2>
  //   }

  const welcomeMsg = <h2 className="welcome-msg">Welcome {username}</h2>;
  const loginPrompt = (
    <h2 className="login-prompt">Please Log In to continue </h2>
  );

  return isLoggedIn ? welcomeMsg : loginPrompt;
}

export default UserGreeting;
