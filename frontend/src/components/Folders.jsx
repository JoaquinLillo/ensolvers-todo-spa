// import React, { useState, useEffect } from "react";
// import { Folder } from "./Folder";

// export const Folders = () => {
//   const [folder, setFolder] = useState("");
//   const [folders, setFolders] = useState([]);

//   const handleAdd = (e) => {
//     e.preventDefault();
//     const newFolder = { title: folder, tasks: null };
//     setFolder("");
//     fetch("http://localhost:8080/api/folder/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newFolder),
//     })
//       .then((res) => res.json())
//       .then(function (data) {
//         folders.push(data);
//         console.log(folders);
//         setFolders(folders);
//       });
//   };

//   const a = function () {
//     folders.forEach(function (folder) {
//       fetch(`http://localhost:8080/api/folder/${folder.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(folder),
//       });
//     });
//   };

//   useEffect(function () {
//     fetch("http://localhost:8080/api/folder")
//       .then((res) => res.json())
//       .then(function (result) {
//         setFolders(result);
//         console.log(result);
//       });
//   }, []);

//   return (
//     <div>
//       <div>
//         <ul className="list-unstyled">
//           <li className="ms-3">
//             <form onSubmit={handleAdd}>
//               <i className="fa fa-plus me-3" aria-hidden="true"></i>
//               <input
//                 type="text"
//                 className="input-box"
//                 placeholder="Add new folder..."
//                 value={folder}
//                 onChange={(e) => setFolder(e.target.value)}
//               />
//             </form>
//           </li>
//         </ul>
//       </div>

//       {folders.map((folder) => (
//         <Folder
//           handleFolders={setFolders}
//           folders={folders}
//           folder={folder}
//           key={folder.id}
//         />
//       ))}
//     </div>
//   );
// };
