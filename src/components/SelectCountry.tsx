import React, { useEffect, useState } from "react";
import Select from "react-select";

const SelectCountry = (props: any) => {
  const countryUrl = "https://www.universal-tutorial.com/api/countries/";
  const [countries, setCountries] = useState([]);

  const headers = {
    Accept: "application/json",
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJwcmFiaGF0dGFtYmUxMEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJCM2EtdElJaVQ2cjJZNmdZaW51S0ZzNEk3c2FTelFOMGg5cEo2ZUUtLUMyZ0NCZGNvOGZJMTRjLXcxdDFHZzg2T2swIn0sImV4cCI6MTcwMDk3NzYzM30.f91VbXmIr1BKoDrYCPw88IQDDR1tF2dCriyZblthRg0`,
  };
  const getCountries = async () => {
    const response = await fetch(countryUrl, { headers });
    const result = await response.json();

    setCountries(result);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const options = countries?.map((country) => ({
    label: country?.country_name,
    value: country?.country_name,
  }));

  return (
    <>
      {/* SELCT COUNTRY  */}
      <Select
        {...props}
        options={options}
        // onChange={(option) => setSelectedCountry(option?.value)}
      />
    </>
  );
};

export default SelectCountry;
