import React, {useState, Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  const [id, setId] = useState(1)
  return (
    <div className="wrapper">
      <button onClick={() => setId((id) => id + 1)}>+</button>
      <PlanetName id={id}/>
    </div>
    
  )
}
// ! ABOUT USE_STATE OF HOOKS
// const HookSwitcher = () => {
//   const [color, setColor] = useState('black')
//   const [fontSize, setFontSize] = useState(14)
//   return (
//     <div style={{ backgroundColor: color, padding: "10px", fontSize: `${fontSize}px` }}>
//       Hello world!
//       <button onClick={() => setColor('black')}>Dark</button>
//       <button onClick={() => setColor('white')}>Light</button>
//       <button onClick={() => setFontSize((size) => size + 2)}>+2px</button>
//     </div>
//   )
// }


// ! ABOUT USE_EFFECT OF HOOKS
// const Counter = () => {
//   const [value, setValue] = useState(0)
//   const [visible, setVisible] = useState(true)
//   if (visible) {
//     return (
//       <div style={{ display: "block" }}>
//         <button onClick={() => setValue((value) => value + 1)}>+</button>
//         <button onClick={() => setVisible(false)}>hide</button>
//         <HookCounter value={value}/>
//         <ClassCounter value={value}/>
//       </div>
//     )
//   } else {
//     return (
//       <button onClick={() => setVisible(true)}>show</button>
//     )
//   }
// }

// const HookCounter = ({value}) => {
//   useEffect(() => {
//     console.log('update component'); // ! WORKS EVERY TIME WHEN GET NEW _VALUE_
//     return console.log('clear effects'); // ! WORKS LIKE PREVIOUS ONE AND LIKE COMPONENT_DID_UNMOUNT
//   }, [value] ) // ! IF USE EMPTY ARRAY IT WORKS LIKE COMPONENT_DID_MOUNT
//   return (
//     <h1>{value}</h1> 
//   )
// }

// class ClassCounter extends Component {

//   componentDidMount(){
//     console.log('componentDidMount');
//   }
//   componentDidUpdate(){
//     console.log('componentDidUpdate');
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//   }

//   render() {
//     const {value} = this.props
//     return (
//       <h2>{value}</h2> 
//     )
//   }
// }

const PlanetName = ({id}) => {
  const [planet, setPlanet] = useState(0)    
    useEffect(() => {
      let canceled = false;
      fetch(`https://swapi.co/api/planets/${id}/`)
        .then((res) => res.json())
        .then((data) => {
          !canceled && setPlanet(data.name)
        })
        return () => canceled=true
    }, [id])
  return <h1>{planet}</h1>
}

ReactDOM.render(<App />, document.getElementById('root'));
