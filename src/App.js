import "./App.css";

function App() {
  const firstBook = {
    title: "The Very Hungry Caterpillar",
    img: "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL210_SR195,210_.jpg",
    author: "Eric Carle",
  };
  const secondBook = {
    title: "The Saints of Swallow Hill",
    img: "https://m.media-amazon.com/images/I/81qYyfUILxL._AC_UY327_FMwebp_QL65_.jpg",
    author: "Donna Everhart",
  };
  const thirdBook = {
    title: "Little Blue Truck's Halloween",
    img: "https://m.media-amazon.com/images/I/51YhD015-iL._SY446_BO1,204,203,200_.jpg",
    author: "Alice Schertle",
  };
  const Book = (props) => {
    return (
      <article className="book">
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <h4>{props.author}</h4>
      </article>
    );
  };

  return (
    <section className="book_list">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />

      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
      <Book
        img={thirdBook.img}
        author={thirdBook.author}
        title={thirdBook.title}
      />
    </section>
  );
}

export default App;
