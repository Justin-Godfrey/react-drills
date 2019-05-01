import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjC4p3i1_jhAhXuGTQIHXOpAkEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeS2c0UG6NNk&psig=AOvVaw3vmuTrqc8uPUWJNQJdWIQg&ust=1556743534218083"} />
      </div>
    );
  }
}

export default App;


// import React, {Component} from 'react';
// import "./App.css";
// import Image from "./Image";

// class App extends Component {
//   render () {
//     return (
//       <div className="App">
//       <Image myImage={heres my image}>
//       </div>
//     )
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import "./App.css";
// import Image from "./Image";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Image myImage={blah blah blah}>
//       </div>
//     );
//   }
// }

// export default App;