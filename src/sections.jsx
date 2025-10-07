import Form from "./Form.jsx";
import Secondform from "./Secondform.jsx";

export default function Section({
  bill,
  setBill,
  tippercent,
  setTipPercent,
  tipAmount,
  setTotalPerson,
  totalPerson,
  totalPeople,
  setTipAmount,
  tipPerPerson,
  onReset,
}) {
  return (
    <div className="sections" style={{ padding: "6.5%", gap: "2rem" }}>
      <div className=" w-[100%] md:w-[22rem] h-[24rem]">
        <Form
          bill={bill}
          setBill={setBill}
          tippercent={tippercent}
          setTipPercent={setTipPercent}
          tipAmount={tipAmount}
          totalPerson={totalPerson}
          setTotalPerson={setTotalPerson}
          totalPeople={totalPeople}
          setTipAmount={setTipAmount}
        />
      </div>
      <div
        className="w-[100%] h-[20rem] md:w-[23rem] md:h-[23rem] shadow-lg mt-5 md:mt-0"
        style={{
          borderRadius: "10px",
          backgroundColor: "hsl(183, 100%, 15%)",
        }}
      >
        <Secondform
          tipAmount={tipPerPerson}
          totalPeople={totalPeople}
          onReset={onReset}
        />
      </div>
    </div>
  );
}
