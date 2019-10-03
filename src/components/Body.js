import React  from 'react'

import "./lf-style.css";

//
Date = () => {
  const date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let dateNum = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return (
    <nav
      style={{
        backgroundColor: "yellow",
        textAlign: "right",
        padding: "10px 10px"
      }}
    >
      {`${hours}:${minute}  ${days[day]}   ${dateNum}/${month}/${year}`}
    </nav>
  )
}
//   // }
//   render() {
//     return (
//       <div className="main">
//         <Header />
//       {/* <Date/> */}
//         <SideBar />
//         <Body />
//         <Footer/>
//         </div>
//     )
//   }
// }
export default Date;
// const Load = (props) => {
//   return (
//     <div>
//       <div style={{display:"flex"}}>
//         <h2>{props.awayName}</h2>
//         <h1>vs</h1>
//         <h2>{props.homeName}</h2>
// </div>
//     </div>
//   )
  
// }

// export default Load;
// let Strips = () => {
//   //   return (
//   //     <div className="strip">
//   //       <p className="tin">time</p>
//   //       <p className="tin">{props.homeName}</p>
//   //       <p className="tin"> 6</p>
//   //       <p className="tin">vs</p>
//   //       <p className="tin"> 0</p>
//   //       <p className="tin">{props.awayName}</p>
//   //       <p className="tin">FT</p>
//   //     </div>
//   //   );
//   // };

//   // let Country = () => {
//   //   return (
//   //     <div>
//   //       <h2 className="country">English Premier League</h2>
//   //       <Strips />
//   //       <Strips />
//   //       <Strips />
//   //       <Strips />
//   //       <Strips />
//   //       <Strips />
//   //       <Strips />
//   //       <Strips />
//   //     </div>
//   //   );
//   // };

//   // // componentDidUpdate(console.log('hello'))

 

//     return (
//       <div className="main">
//         <Header />
    
//         <div>
//           <SideBar />
//           <Country />
//           <Country />
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }
