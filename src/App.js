import "./App.css";
import Comment from "./components/Comment";

const comment = [ 
  {
  date: new Date(),
  text: "I hope you enjoy learning React",
  id: 1,
  author: {
    name: "Hello Kitty",
    avatarUrl:
      "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
  },
},  {
  date: new Date(),
  text: "I hope you enjoy learning React",
  id: 2,
  author: {
    name: "Hello Kitty",
    avatarUrl:
      "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
  },
},{
  date: new Date(),
  text: "I hope you enjoy learning React",
  id: 3,
  author: {
    name: "Hello Kitty",
    avatarUrl:
      "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
  },
}
]

function App() {
  return (
    <div className="App">
      {/* <Comment data={comment} /> */}
      {comment.map((el) => {
        return (
          <Comment key={el.id}
            date={el.date}
            text={el.text}
            author={el.author}
          />
        );
      })}
    </div>
  );
}

export default App;
