import "./App.css";
import image_1 from "./assets/image_1.jpg";
import image_2 from "./assets/image_2.jpg";
import image_3 from "./assets/image_3.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "About Us" },
    { url: "#", title: "Contact" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={image_1} />
      <Slider
        imageSrc={image_2}
        title={"Teacher Assemble"}
        subtitle={
          "Sign Up"
        }
      />
      <Slider
        imageSrc={image_3}
        title={"Student Assemble"}
        subtitle={"Sign Up."}
        flipped={true}
      />
    </div>
  );
}

export default App;
