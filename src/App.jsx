import "./app.scss";
import rhcp from "./assets/rhcp.jpg";

function App() {
  return (
    <>
      <section className="carteAlbum">
        <div className="abovePart">
          <img className="img" src={rhcp} alt="Image album" />
          <ul className="descriptionImg">
            <h1>Red Hot Chilli Peppers</h1>
            <p>
              Californication
              <br />
              (1999)
            </p>
          </ul>
        </div>
        <div className="belowPart">
          <p>Rate this album</p>
          <p className="star">✩ ✩ ✩ ✩ ✩</p>
        </div>
      </section>
    </>
  );
}

export default App;
