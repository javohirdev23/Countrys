import { Button, Card, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./mainsec.css";
import Loader from "./Loader";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

export default function Mainsec({ selectedRegion }) {
  const [state, setState] = useState([]);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const { colorMode } = useColorMode();

  //   const [error, setError] = useState(false);

  if (loader) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,flags,region,subregion,name,population",
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setState(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  const filteredCountries =
    selectedRegion === "all"
      ? state
      : state.filter((country) => country.region === selectedRegion);
  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <div className="container">
          {filteredCountries.map((el) => {
            return (
              <div
                key={el.name.common}
                className="card-cont"
                onClick={() => navigate(`/country/${el.name.common}`)}
              >
                <Card.Root
                  maxW="sm"
                  overflow="hidden"
        
                >
                  <Image
                    width={260}
                    height={160}
                    src={el.flags.svg}
                    alt={el.name.common}
                  />
                  <Card.Body gap="2">
                    <Card.Title fontWeight={"bolder"}>
                      {el.name.common}
                    </Card.Title>
                    <Card.Description>
                      <span color={colorMode === "dark" ? "white" : "dakr"}>
                        Population:{" "}
                      </span>
                      {el.population.toLocaleString()}
                    </Card.Description>

                    <Card.Description>
                      <span color={colorMode === "dark" ? "white" : "dakr"}>
                        Region:{" "}
                      </span>
                      {el.region}
                    </Card.Description>
                    <Card.Description>
                      <span color={colorMode === "dark" ? "white" : "dakr"}>
                        Capital:{" "}
                      </span>
                      {el.capital}
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
