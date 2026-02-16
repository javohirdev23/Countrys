import { useColorMode } from "../ui/color-mode";
import { Portal, Select, createListCollection } from "@chakra-ui/react";
import "./navbar.css";

export default function SelectDemo({ selectedRegion, setSelectedRegion }) {
  const handleChange = (evt) => {
    console.log(evt.target.value);

    setSelectedRegion(evt.target.value);
  };
  const regions = createListCollection({
    items: [
      { label: "Africa", value: "Africa" },
      { label: "Americas", value: "Americas" },
      { label: "Asia", value: "Asia" },
      { label: "Europe", value: "Europe" },
      { label: "Oceania", value: "Oceania" },
    ],
  });
  const { colorMode } = useColorMode();
  return (
    <div className="select-cont">
      {/* <select value={selectedRegion} onChange={handleChange}>
        <option bg={colorMode === "dark" ? "dark" : "white"} color={colorMode === "dark" ? "dark" : "white"} value="Africa">
          Africa
        </option>
        <option bg={colorMode === "dark" ? "dark" : "white"} color={colorMode === "dark" ? "dark" : "white"} value="Americas">
          America
        </option>
        <option bg={colorMode === "dark" ? "dark" : "white"} color={colorMode === "dark" ? "dark" : "white"} value="Asia">
          Asia{" "}
        </option>
        <option bg={colorMode === "dark" ? "dark" : "white"} color={colorMode === "dark" ? "dark" : "white"} value="Europe">
          Europe{" "}
        </option>
        <option bg={colorMode === "dark" ? "dark" : "white"} color={colorMode === "dark" ? "dark" : "white"} value="Oceania">
          Oceania{" "}
        </option>
      </select> */}
      <Select.Root
        collection={regions}
        value={selectedRegion ? [selectedRegion] : []}
        onValueChange={(e) => setSelectedRegion(e.value[0])}
        width="220px"
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Filter by Region" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>

        <Portal>
          <Select.Positioner>
            <Select.Content>
              {regions.items.map((region) => (
                <Select.Item item={region} key={region.value}>
                  {region.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </div>
  );
}
