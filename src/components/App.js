import Card from "./Card.js";
function App() {
  const movies = [
    {
      id:0,
      movieName: "RRR",
      src: "https://www.telugubulletin.com/wp-content/uploads/2022/02/images-48-497x616.jpeg",
      desc: "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who wrote the film with V. Vijayendra."
    },
    {
      id:1,
      movieName: "KGF Chapter 2",
      src: "https://pbs.twimg.com/media/FIjGGeaVkAAj989?format=jpg&name=900x900",
      desc:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him."
    },
    {
      id:2,
      movieName: "Pushpa The Rise",
      src: "https://static.toiimg.com/photo/88334935/88334935.jpg?v=3",
      desc:"A labourer rises through ranks of a smuggling syndicate, infuriating some powerful forces in the process."
    }
  ]
  return (
    <div className="d-flex gap-4 justify-content-center">
      {
        movies.map((movie) => {
          return <Card detail={movie}/>
        })
      }
    </div>
  );
}

export default App;
