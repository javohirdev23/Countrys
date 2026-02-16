import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Image, Text } from "@chakra-ui/react";
import "./information.css";
import Loader from "./Loader";
import { useColorMode } from "../ui/color-mode";
export default function Information() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  if (!country)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <>
      <div className="button">
        <Button
          color={colorMode === "dark" ? "white" : "black"}
          onClick={() => navigate("/")}
        >
          ← Back
        </Button>
      </div>
      <div className="info-container">
        <div className="info-img">
          <Image
            width={560}
            height={401}
            borderRadius={"10px"}
            src={country.flags.svg}
            alt={country.name.common}
          />
        </div>
        <div className="info-text">
          <h1>{country.name.common}</h1>

          <Text paddingTop={"30px"}>
            <b>Native Name:</b>
            {country.name.official}
          </Text>
          <Text>
            <b>Population:</b> {country.population.toLocaleString()}
          </Text>
          <Text>
            <b>Region:</b> {country.region}
          </Text>
          <Text>
            <b>Sub Region:</b> {country.subregion}
          </Text>
          <Text>
            <b>Capital:</b> {country.capital}
          </Text>
        </div>
      </div>
    </>
  );
}
