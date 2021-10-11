import { useEffect, useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guestList, setGuestList] = useState<string[]>([]);

  const onClick = () => {
    setGuestList([...guestList, name]);
  };

  useEffect(() => {}, [guestList]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
      <ul>
        {guestList.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
