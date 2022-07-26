import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VisualizerController from "./VisualizerController.js";
import SortingVisualizer from "./SortingVisualizer.js";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      default: {
        sortingAlgorithm: "Bubble Sort",
        size: "20",
        speed: "Normal",
        barColor: "Blue",
        pointerColor: "Cyan",
        sortedColor: "Green",
        sort: false,
        randomize: true,
      },
      sorted: false,
    };
  }
  controllerDataHandler = (e) => {
    this.setState(
      {
        default: {
          sortingAlgorithm: e["sortingAlgorithm"],
          size: e["size"],
          speed: e["speed"],
          barColor: e["barColor"],
          pointerColor: e["pointerColor"],
          sortedColor: e["sortedColor"],
          sort: e["sort"],
          randomize: e["randomize"],
        },
        sorted: false,
      },
      function () {
        if (e["sort"] === true) {
          var element = document.getElementById("sortingVisualizer");
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    );
  };
  visualizerDataHandler = (e) => {
    this.setState({ sorted: e });
  };
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <h2>Sorting Visualizer</h2>
              <VisualizerController controllerDataHandler={this.controllerDataHandler} visualizerData={this.state.sorted}>
                {this.state.sorted}
              </VisualizerController>
            </Col>
          </Row>

          <Row>
            <Col lg={9} id="sortingVisualizer">
              <SortingVisualizer visualizerDataHandler={this.visualizerDataHandler} controllerData={this.state.default}></SortingVisualizer>
            </Col>
            <Col lg={3}>
            <div className="inf">
                Bubble Sort
                <br></br>
                Time Complexcity : O(n^2)
                <br></br>
                Space Complexcity : O(1)
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>
              <h6>A Project by Naman Rathod</h6>
            </Col>
          </Row>
          
          
        </Container>
      </div>
    );
  }
}
export default App;
