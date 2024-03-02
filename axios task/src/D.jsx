// import React, { useState, useRef } from 'react';

// const YourComponent = () => {
//   const inputRef = useRef(null);
//   const [items, setItems] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddItem = () => {
//     const value = inputRef.current.value;
//     if (value.trim() !== '') {
//       if (editIndex !== null) {
//         // Update existing item
//         const updatedItems = items.map((item, index) =>
//           index === editIndex ? value : item
//         );
//         setItems(updatedItems);
//         setEditIndex(null);
//       } else {
//         // Add new item
//         setItems([...items, value]);
//       }
//       inputRef.current.value = '';
//     }
//   };

//   const handleEditItem = (index) => {
//     setEditIndex(index);
//   };

//   const handleSaveItem = () => {
//     const value = inputRef.current.value;
//     if (value.trim() !== '') {
//       const updatedItems = items.map((item, index) =>
//         index === editIndex ? value : item
//       );
//       setItems(updatedItems);
//       setEditIndex(null);
//     }
//   };

//   const handleDeleteItem = (index) => {
//     const updatedItems = items.filter((item, i) => i !== index);
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleAddItem}>{editIndex !== null ? 'Update Item' : 'Add Item'}</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {editIndex === index ? (
//               <>
//                 <input type="text" value={item} onChange={(e) => handleEditItem(index)} />
//                 <button onClick={handleSaveItem}>Save</button>
//               </>
//             ) : (
//               <>
//                 <span>{item}</span>
//                 <button onClick={() => handleEditItem(index)}>Edit</button>
//                 <button onClick={() => handleDeleteItem(index)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourComponent;



import React, { useState } from 'react';

const ListEditExample = () => {
    const [items, setItems] = useState([
        { id: 1, value: 'Value 1', isEditing: false },
        { id: 2, value: 'Value 2', isEditing: false }
    ]);

    const handleEdit = (id) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return { ...item, isEditing: true };
            }
            return item;
        }));
    };

    const handleSave = (id, updatedValue) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return { ...item, value: updatedValue, isEditing: false };
            }
            return item;
        }));
    };

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <span>Item {item.id}:</span>
                    {item.isEditing ? (
                        <input type="text" value={item.value} onChange={(e) => handleSave(item.id, e.target.value)} />
                    ) : (
                        <span>{item.value}</span>
                    )}
                    <button onClick={() => handleEdit(item.id)}>{item.isEditing ? 'Save' : 'Edit'}</button>
                </div>
            ))}
        </div>
    );
};

export default ListEditExample;
