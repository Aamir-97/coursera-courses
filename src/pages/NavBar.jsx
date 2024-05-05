import "./Navbar.css";

function NavBar(params) {
  return (
    <div>
      <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#formpage">Form page</a></li>
      <li><a href="./DialogBox.jsx">Dialog box page</a></li>
      </ul>
    </div>
  );
}

export default NavBar;