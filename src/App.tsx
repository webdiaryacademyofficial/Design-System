import "./App.css";
import Typography from "./components/atom/typography/Typography";

function App() {
  return (
    <>
      <Typography
        tag="h1"
        text="Welcome to Web Diary"
        classes="title text-center"
        style={{ fontSize: "50px" }}
        role="heading"
        ariaLabel="Welcome to Web Diary"
        ariaLabelledBy="title"
      >
        <span>&nbsp;Nice to meet you!</span>
      </Typography>
      <Typography tag="h2" text="Let's Share Our Knowledge" />
      <Typography
        tag="p"
        text="Web Diary is a web application that allows you to write your diary entries and share them with your friends."
      />
    </>
  );
}

export default App;
