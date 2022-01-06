// import React from "react";
// import { Tasks } from "./Tasks";
// import { useState } from "react";
// import { Folders } from './Folders';

// export const Folder = ({ handleFolders, folders, folder }) => {
//   const [folderTitle, setFolderTitle] = useState(folder.title);

//   const handleEdit = (e) => {
//     console.log(folders);
//     console.log(folder);
//     console.log(folderTitle)
    
//     e.preventDefault();    
//     let updatedFolder = folders.map(function (item) {
//       if (item == folder) {
//         item.title = folderTitle;
//       }
//       return item;
//     });
//     handleFolders(updatedFolder)
//   };

//   return (
//     <div>
//       <div className="d-flex">
//         <form onSubmit={handleEdit}>
//           <input
//             className="input-box me-auto"
//             value={folderTitle}
//             onChange={(e) => setFolderTitle(e.target.value)}
//           ></input>
//         </form>
//         <button
//           className="btn btn-danger rounded-circle ms-3"
//           // onClick={handleRemove}
//         >
//           <i className="fa fa-trash" aria-hidden="true"></i>
//         </button>
//       </div>
// {/* 
//       <Tasks
//         handleFolders={handleFolders}
//         folders={folders}
//         folder={folder}
//         key={folder.title}
//       /> */}
//     </div>
//   );
// };
