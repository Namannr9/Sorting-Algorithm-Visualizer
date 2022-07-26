import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./VisualizerController.css";
class VisualizerController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingAlgorithm: "Bubble Sort",
      speed: "Normal",
      size: "20",
      barColor: "Blue",
      pointerColor: "Cyan",
      sortedColor: "Green",
      message: "Feeling lazy ? its OK , just click Sort ! ",
    };
    this.onSelectingSortingAlgorithm = this.onSelectingSortingAlgorithm.bind(this);
    this.onSelectingSpeed = this.onSelectingSpeed.bind(this);
    this.onSelectingSize = this.onSelectingSize.bind(this);
    this.onSelectingBarColor = this.onSelectingBarColor.bind(this);
    this.onSelectingPointerColor = this.onSelectingPointerColor.bind(this);
    this.onSelectingSortedColor = this.onSelectingSortedColor.bind(this);
    this.randomize = this.randomize.bind(this);
    this.sort = this.sort.bind(this);
    this.randomizeRef = React.createRef();
    this.sortRef = React.createRef();
  }
  componentDidUpdate() {
    if (this.props.visualizerData === true) {
      this.randomizeRef.current.textContent = "Randomize Array";
    }
  }
  onSelectingSortingAlgorithm(eventKey, event) {
    this.setState({
      sortingAlgorithm: eventKey,
    });
    //console.log(eventKey);
    let item=document.getElementsByClassName('inf');
    item[0].innerHTML=this.someInfo(eventKey);
    //console.log(item)
    
  }
  someInfo(eventKey)
  {
    console.log(eventKey)
    switch(eventKey)
    {
      case "Bubble Sort" :
        return "Bubble Sort <br> Time Complexcity : O(n^2) <br> Space Complexcity O(1)";
        

      case "Linear Sort" :
        return "Linear Sort <br> Time Complexcity : O(n^2) <br> Space Complexcity O(1)"
      
      case "Selection Sort" :
        return "Selection Sort <br> Time Complexcity : O(n^2) <br> Space Complexcity O(1)"
      case "Insertion Sort" :
        return "Insertion Sort <br> Time Complexcity : O(n^2) <br> Space Complexcity O(1)"
      case "Heap Sort" :
        return "Heap Sort <br> Time Complexcity : O(nlog(n)) <br> Space Complexcity O(1)"
      case "Merge Sort" :
        return "Merge Sort <br> Time Complexcity : O(nlog(n)) <br> Space Complexcity O(n)"
      case "Quick Sort":
        return "Quick Sort <br> Time Complexcity : O(n^2) <br> Space Complexcity O(log(n))"
    }
  }
  onSelectingSpeed(eventKey, event) {
    this.setState({
      speed: eventKey,
    });
  }
  onSelectingSize(eventKey, event) {
    let temp = this.update();
    temp["sort"] = false;
    temp["randomize"] = true;
    temp["size"] = eventKey;
    this.setState(temp, function () {
      this.props.controllerDataHandler(this.state);
    });
  }
  onSelectingBarColor(eventKey, event) {
    let temp = this.update();
    temp["sort"] = false;
    temp["randomize"] = false;
    temp["barColor"] = eventKey;
    this.setState(temp, function () {
      this.props.controllerDataHandler(this.state);
    });
  }
  onSelectingPointerColor(eventKey, event) {
    this.setState({
      pointerColor: eventKey,
    });
  }
  onSelectingSortedColor(eventKey, event) {
    this.setState({
      sortedColor: eventKey,
    });
  }
  update() {
    var temp = {
      sortingAlgorithm: "",
      speed: "",
      size: "",
      barColor: "",
      pointerColor: "",
      sortedColor: "",
    };
    temp.sortingAlgorithm = this.state.sortingAlgorithm;
    temp.size = this.state.size;
    temp.speed = this.state.speed;
    temp.barColor = this.state.barColor;
    temp.pointerColor = this.state.pointerColor;
    temp.sortedColor = this.state.sortedColor;
    return temp;
  }
  randomize() {
    this.randomizeRef.current.textContent = "Randomize Array";
    this.sortRef.current.disabled = false;
    document.getElementById("speed").disabled = false;
    document.getElementById("size").disabled = false;
    document.getElementById("sortingAlogrithm").disabled = false;
    document.getElementById("barColor").disabled = false;
    //document.getElementById("pointerColor").disabled = false;
    //document.getElementById("sortedColor").disabled = false;
    let temp = this.update();
    temp["sort"] = false;
    temp["randomize"] = true;
    this.setState(temp, function () {
      this.props.controllerDataHandler(this.state);
    });
  }
  sort() {
    this.randomizeRef.current.textContent = "Stop & Randomize Array";
    this.sortRef.current.disabled = true;
    document.getElementById("speed").disabled = true;
    document.getElementById("size").disabled = true;
    document.getElementById("sortingAlogrithm").disabled = true;
    document.getElementById("barColor").disabled = true;
    //document.getElementById("pointerColor").disabled = true;
    //document.getElementById("sortedColor").disabled = true;
    let temp = this.update();
    temp["sort"] = true;
    temp["randomize"] = false;
    temp["sorted"] = false;
    this.setState(temp, function () {
      this.props.controllerDataHandler(this.state);
    });
  }
  render() {
    return (
      <div className="VisualizerController">
        <Container>
            <SplitButton
              title={this.state.sortingAlgorithm}
              id="sortingAlogrithm"
              variant="light"
              onSelect={this.onSelectingSortingAlgorithm}
            >
              <Dropdown.Item disabled>Sorting Algorithms</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Bubble Sort">
                Bubble Sort (Default)
            </Dropdown.Item>
              <Dropdown.Item eventKey="Linear Sort">Linear Sort</Dropdown.Item>
              
            <Dropdown.Item eventKey="Selection Sort">
              Selection Sort
            </Dropdown.Item>

            <Dropdown.Item eventKey="Insertion Sort">
              Insertion Sort
            </Dropdown.Item>

              <Dropdown.Item eventKey="Heap Sort">Heap Sort</Dropdown.Item>
              
              <Dropdown.Item eventKey="Merge Sort">Merge Sort</Dropdown.Item>
              <Dropdown.Item eventKey="Quick Sort">Quick Sort</Dropdown.Item>
            </SplitButton>
            &nbsp;&nbsp;&nbsp;
            <SplitButton
              title={this.state.speed}
              id="speed"
              variant="light"
              onSelect={this.onSelectingSpeed}
            >
              <Dropdown.Item disabled>Speed Of Visualization</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Very Fast">Very fast</Dropdown.Item>
              <Dropdown.Item eventKey="Fast">Fast</Dropdown.Item>
              <Dropdown.Item eventKey="Normal">Normal (Default)</Dropdown.Item>
              <Dropdown.Item eventKey="Slow">Slow</Dropdown.Item>
              <Dropdown.Item eventKey="Very Slow">Very Slow</Dropdown.Item>
            </SplitButton>
            &nbsp;&nbsp;&nbsp;
            <SplitButton
              title={this.state.size}
              id="size"
              variant="light"
              onSelect={this.onSelectingSize}
            >
              <Dropdown.Item disabled>Size Of Array</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="10">10</Dropdown.Item>
              <Dropdown.Item eventKey="15">15</Dropdown.Item>
              <Dropdown.Item eventKey="20">20 (Default)</Dropdown.Item>
              <Dropdown.Item eventKey="25">25</Dropdown.Item>
              <Dropdown.Item eventKey="30">30</Dropdown.Item>
              <Dropdown.Item eventKey="35">35</Dropdown.Item>
              
            </SplitButton>
            &nbsp;&nbsp;&nbsp;
            <SplitButton
              title={this.state.barColor}
              id="barColor"
              variant="light"
              onSelect={this.onSelectingBarColor}
            >
              <Dropdown.Item disabled>Color Of Bar</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
              <Dropdown.Item eventKey="Blue">Blue (Default)</Dropdown.Item>


              <Dropdown.Item eventKey="Pink">Pink</Dropdown.Item>

              <Dropdown.Item eventKey="Grey">Grey</Dropdown.Item>
            </SplitButton>
            &nbsp;&nbsp;&nbsp;
            {/* <SplitButton
              title={this.state.pointerColor}
              id="pointerColor"
              variant="light"
              onSelect={this.onSelectingPointerColor}
            >
              <Dropdown.Item disabled>Color Of Comparisions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
              <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
              <Dropdown.Item eventKey="Cyan">Cyan</Dropdown.Item>
              <Dropdown.Item eventKey="Green">Green</Dropdown.Item>
              <Dropdown.Item eventKey="Pink">Pink</Dropdown.Item>
              <Dropdown.Item eventKey="Red">Red (Default)</Dropdown.Item>
              <Dropdown.Item eventKey="Yellow">Yellow</Dropdown.Item>
            </SplitButton>
            &nbsp;&nbsp;&nbsp;
            <SplitButton
              title={this.state.sortedColor}
              id="sortedColor"
              variant="light"
              onSelect={this.onSelectingSortedColor}
            >
              <Dropdown.Item disabled>Color Of Sorted Elements</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
              <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
              <Dropdown.Item eventKey="Cyan">Cyan</Dropdown.Item>
              <Dropdown.Item eventKey="Green">Green (Default)</Dropdown.Item>
              <Dropdown.Item eventKey="Pink">Pink</Dropdown.Item>
              <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
              <Dropdown.Item eventKey="Yellow">Yellow</Dropdown.Item>
            </SplitButton>
            &nbsp;&nbsp;&nbsp; */}
            <Button
              ref={this.randomizeRef}
              size="lg"
              variant="danger"
              onClick={this.randomize}
            >
              Randomize Array
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              ref={this.sortRef}
              size="lg"
              variant="success"
              onClick={this.sort}
            >
              Sort !
            </Button>
          
        </Container>
      </div>
    );
  }
}
export default VisualizerController;
