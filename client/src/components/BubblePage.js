import React, { useState, useEffect } from "react";
// import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import {axiosWithAuth} from '../util/axiosWithAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColors = () => (

    axiosWithAuth()
    .get('/api/colors')

    .then(res => setColorList(res.data))

    .catch(err => console.log(err))
  )

  useEffect(() => {getColors() }, [])

  return (
    <>
      <ColorList 
      colors={colorList} 
      updateColors={setColorList} 
      getcolors={getColors}
      />
      <Bubbles 
      colors={colorList} 
      />
    </>
  );
};

export default BubblePage;


// const BubblePage = () => {
//   const [colorList, setColorList] = useState([]);
//   // fetch your colors data from the server when the component mounts
//   // set that data to the colorList state property
//   const getColors = () => (

//     axiosWithAuth()
//       .get('/api/colors')
//       .then(res => setColorList(res.data))
//       .catch(err => console.log(err))

//   )

//   useEffect(() => { getColors() }, []);

//   return (
//     <>
//       <ColorList 
//         colors={colorList} updateColors={setColorList}
//         getColors={getColors}
//         />
//       <Bubbles colors={colorList} />
//     </>
//   );
// };

// export default BubblePage;