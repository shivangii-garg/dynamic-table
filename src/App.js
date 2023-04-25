import { useState } from "react";
import Footer from "./Footer";
import "./styles.css";
import Table from "./Table";

const data = [
  {
    name: "Shivi",
    address: "Indirapuram",
    num: 8860736226,
    email: "gargshivangi1998@gmail.com"
  },
  {
    name: "Siddi",
    address: "Bangalore",
    num: 837700.175,
    email: "bhardwajsiddhant6@gmail.com"
  }
];

export default function App() {
  const [contacts, setContacts] = useState(data);
  // const [isRowEditable, setIsRowEditable] = useState(false);
  return (
    <div className="App">
      <Table contacts={contacts} />
      <Footer setContacts={setContacts} contacts={contacts} />
    </div>
  );
}
