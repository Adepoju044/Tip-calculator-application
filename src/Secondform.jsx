export default function Secondform({ tipAmount, totalPeople, onReset }) {
  return (
    <div>
      <div className="flex justify-between p-5">
        <div>
          <h3 className="text-white font-bold">Tip Amount</h3>
          <p style={{ color: "hsl(189, 41%, 73%)" }}>/ person</p>
        </div>
        <div>
          <h1
            className="amount font-bold text-3xl"
            style={{ color: "hsl(172, 67%, 45%)" }}
          >
            ${tipAmount.toFixed(2)}
          </h1>
        </div>
      </div>
      <div className="flex justify-between p-5">
        <div>
          <h3 className="font-bold text-white">Total</h3>
          <p style={{ color: "hsl(189, 41%, 73%)" }}>/ person</p>
        </div>
        <div>
          <h1
            className="amount font-bold text-3xl"
            style={{ color: "hsl(172, 67%, 45%)" }}
          >
            ${totalPeople ? totalPeople.toFixed(2) : 0.0}
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button
          className="reset w-[85%] h-[40px] font-bold uppercase hover:-translate-y-3 transition-all duration-100"
          style={{ borderRadius: "5px" }}
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
