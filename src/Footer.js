import { useState } from "react";

const Footer = ({ setContacts, contacts }) => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [num, setNum] = useState(null);
  const [email, setEmail] = useState(null);

  const handleClick = () => {
    const obj = {
      name: name,
      address: address,
      num: num,
      email: email
    };
    // setContacts(contacts.push(obj));
    setContacts([...contacts, obj]);
    console.log(contacts);
  };

  return (
    <>
      <h4>Add new Contact </h4>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Contact"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Footer;
