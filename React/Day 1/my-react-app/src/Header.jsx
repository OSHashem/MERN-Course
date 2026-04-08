// We can write a combination of JavaScript and HTML in JSX
function Header() {
  // Within the return statement, we can only write HTML.
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
