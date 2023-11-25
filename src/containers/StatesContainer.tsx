import React, { useEffect, useState } from "react";
import SelectCountry from "../components/SelectCountry";

const StatesContainer = () => {
  const headers = {
    Accept: "application/json",
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJwcmFiaGF0dGFtYmUxMEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJCM2EtdElJaVQ2cjJZNmdZaW51S0ZzNEk3c2FTelFOMGg5cEo2ZUUtLUMyZ0NCZGNvOGZJMTRjLXcxdDFHZzg2T2swIn0sImV4cCI6MTcwMDk3NzYzM30.f91VbXmIr1BKoDrYCPw88IQDDR1tF2dCriyZblthRg0`,
  };
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const getStates = async (countryId: string) => {
    const response = await fetch(
      `https://www.universal-tutorial.com/api/states/${countryId}`,
      { headers }
    );
    const result = await response.json();
    setStates(result);
  };
  useEffect(() => {
    if (selectedCountry) {
      getStates(selectedCountry);
    }
  }, [selectedCountry]);

  return (
    <>
      <SelectCountry onChange={(option) => setSelectedCountry(option?.value)} />
      {states?.length ? (
        <div>
          <h1>States</h1>

          <ul>
            {states.map((state) => {
              return <li>{state.state_name ?? "NA"}</li>;
            })}
          </ul>
        </div>
      ) : (
        <p>Please Select Country</p>
      )}
    </>
  );
};

export default StatesContainer;
