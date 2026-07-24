import officeImage from "./office.jpeg";

function App() {

  const office = {
    Name: "DBS",
    Rent: 55000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS",
      Rent: 55000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p>
        <b>Rent:</b>
        <span
          style={{
            color: office.Rent < 60000 ? "red" : "green"
          }}
        >
          {" "}
          {office.Rent}
        </span>
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h3>{item.Name}</h3>

            <p>
              <b>Rent:</b>

              <span
                style={{
                  color: item.Rent < 60000 ? "red" : "green"
                }}
              >
                {" "}
                {item.Rent}
              </span>

            </p>

            <p>
              <b>Address:</b> {item.Address}
            </p>

            <hr />

          </div>

        ))
      }

    </div>
  );
}

export default App;