export default function Form({
  bill,
  setBill,
  tippercent,
  setTipPercent,
  setTipAmount,
  setTotalPerson,
  totalPerson,
}) {
  return (
    <div>
      <h3
        className="font-bold"
        style={{ letterSpacing: "2px", marginBottom: "10px" }}
      >
        Bill
      </h3>

      <form>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <img
              src="./images/icon-dollar.svg"
              alt="dollar"
              className="w-4 h-4"
            />
          </span>

          <input
            type="text"
            className="input w-full h-11 text-transparent"
            style={{
              paddingLeft: "2rem",
              backgroundColor: "hsl(189, 41%, 96%)",
              fontSize: "24px",
            }}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
          <span className="absolute top-1/2 right-3 -translate-y-1/2 font-bold">
            <p style={{ color: "hsl(189, 41%, 73%)" }}>{bill || null}</p>
          </span>
        </div>

        <h3
          style={{ marginBottom: "14px", marginTop: "24px" }}
          className="font-semibold"
        >
          Select Tip %
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4">
          <Button
            onClick={() => {
              setTipPercent(5);
              setTipAmount((Number(bill) * 5) / 100);
            }}
          >
            5%
          </Button>

          <Button
            onClick={() => {
              setTipPercent(10);
              setTipAmount((Number(bill) * 10) / 100);
            }}
          >
            10%
          </Button>

          <Button
            onClick={() => {
              setTipPercent(15);
              setTipAmount((Number(bill) * 15) / 100);
            }}
          >
            15%
          </Button>

          <Button
            onClick={() => {
              setTipPercent(25);
              setTipAmount((Number(bill) * 25) / 100);
            }}
          >
            25%
          </Button>

          <Button
            onClick={() => {
              setTipPercent(50);
              setTipAmount((Number(bill) * 50) / 100);
            }}
          >
            50%
          </Button>

          <input
            type="text"
            placeholder="Custom"
            style={{
              backgroundColor: "hsl(189, 41%, 96%)",
              borderRadius: "4px",
            }}
            className="custom transition-all duration-200 hover:-translate-x-2 text-[#808080] font-bold text-center"
            value={tippercent}
            onChange={(e) => {
              const customTip = e.target.value;
              setTipPercent(customTip);
              setTipAmount((Number(bill) * customTip) / 100);
            }}
          />
        </div>

        <h3 className="mt-5 mb-3 md:mt-8 font-bold">Number of people</h3>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <img
              src="./images/icon-person.svg"
              alt="person"
              className="w-4 h-4"
            />
          </span>

          <input
            type="text"
            className="w-full h-11 focus:outline-0 input text-transparent"
            style={{
              paddingLeft: "2rem",
              backgroundColor: "hsl(189, 41%, 92%)",
            }}
            value={totalPerson}
            onChange={(e) => setTotalPerson(e.target.value)}
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold">
            <p style={{ color: "hsl(189, 41%, 73%)" }}>{totalPerson || 0}</p>
          </span>
        </div>
      </form>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <div>
      <button
        className="buttons transition-all duration-200 hover:-translate-x-2 font-bold cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
}
