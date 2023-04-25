import { useState } from "react";

const Table = ({ contacts }) => {
  const [isRowEditable, setIsRowEditable] = useState(false);
  const handleClick = () => {
    setIsRowEditable(true);
  };

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      {contacts.map((item) => {
        if (!isRowEditable) {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.num}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={handleClick}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          );
        } else {
          return (
            <>
              <tr>
                <input
                  type="text"
                  placeholder="Name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </tr>
              <tr>
                <input
                  type="text"
                  placeholder="Address"
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </tr>
              <tr>
                <input
                  type="number"
                  placeholder="Contact"
                  // value={num}
                  // onChange={(e) => setNum(e.target.value)}
                />
              </tr>
              <tr>
                <input
                  type="text"
                  placeholder="Email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </tr>
            </>
          );
          setIsRowEditable(false);
        }
      })}
    </table>
  );
};

export default Table;
