import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const menuItems = [
  { title: "Margherita Pizza", desc: "Classic cheese & tomato", price: 250 },
  { title: "Pasta Alfredo", desc: "Creamy pasta delight", price: 300 },
  { title: "Tiramisu", desc: "Italian dessert", price: 200 },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Café Italian</h1>
        <nav>
          <span>Home</span>
          <span>Menu</span>
          <span>Contact</span>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Café Italian</h2>
        <p>Experience authentic Italian flavors!</p>
      </section>

      <section className="menu-grid">
        {menuItems.map((item, idx) => (
          <div className="card" key={idx}>
            <img
              src={`https://via.placeholder.com/150?text=${item.title.replace(
                " ",
                "+"
              )}`}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>₹{item.price}</span>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2025 Café Italian. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

// Render if using Play.js or CodeSandbox
ReactDOM.render(<App />, document.getElementById("root"));
