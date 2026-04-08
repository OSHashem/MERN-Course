function Footer() {
  return (
    // To type javaScript expressions in JSX, we use curly braces {}.
    // This allows us to embed JavaScript code within our JSX markup.
    <footer>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
