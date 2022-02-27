import classes from "../UI/ReportModule/report.module.css";
import React, { useMemo } from "react";
import Select from "react-select";

function Time() {
  const options = useMemo(
    () => [
      { value: "0", label: "Tất cả" },
      { value: "1", label: "07:05 - 07/10/2021" },
      { value: "2", label: "07:10 - 07/10/2021" },
      { value: "3", label: "07:15 - 07/10/2021" },
      { value: "4", label: "07:20 - 07/10/2021" },
      { value: "5", label: "07:25 - 07/10/2021" },
      { value: "6", label: "07:30 - 07/10/2021" },
    ],
    []
  );
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        border: "0px dotted black",
        color: state.data.color,
        opacity: 0.8,
        width: 238,
        height: 44,
        radius: 4,
      }),
      control: (provided) => ({
        ...provided,
        width: 238,
        background: "orange",
        color: "white",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
    }),
    []
  );
  return (
    <div style={{ width: "238px" }}>
      <Select
        options={options}
        defaultValue={options[1]}
        styles={customStyles}
      />
    </div>
  );
}
export default Time;
