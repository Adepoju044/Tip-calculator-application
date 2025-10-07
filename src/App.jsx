import { useState } from "react";
import Header from "./header.jsx";
import Section from "./sections.jsx";

function App() {
  const [bill, setBill] = useState("");
  const [tippercent, setTipPercent] = useState(0);
  const [totalPerson, setTotalPerson] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const totalPeople =
    totalPerson > 0 ? (Number(bill) + tipAmount) / Number(totalPerson) : 0;
  const tipPerPerson =
    Number(totalPeople) > 0 ? tipAmount / Number(totalPerson) : 0;
  function handleReset() {
    setBill("");
    setTotalPerson("");
    setTipPercent(0);
    setTipAmount(0);
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Header />
      <div
        className="bg-[#fff] w-[24rem] md:w-[53rem] gap-1 md:h-[29rem] shadow-2xl p-3"
        style={{ borderRadius: "10px" }}
      >
        <Section
          bill={bill}
          setBill={setBill}
          tippercent={tippercent}
          setTipPercent={setTipPercent}
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          totalPerson={totalPerson}
          setTotalPerson={setTotalPerson}
          totalPeople={totalPeople}
          tipPerPerson={tipPerPerson}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
