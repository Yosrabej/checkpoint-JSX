import "./App.css";
import tree from "./treeimg.png";
import "./style.css";
function App() {
    return (
        <div className="App">
            <div style={{ border: "solid 1px black", maxwidth: "100vw" }}>
                <h1 className="title red">Your name here</h1>

                <br />

                <img src={tree} />

                <br />

                <img src="/images.jpg" />
            </div>

            <video width="320" height="240" controls>
                <source src="/myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
