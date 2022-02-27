import classes from "../UI/ReportModule/report.module.css";
import React, { useMemo } from "react";
import Select from "react-select";

function From() {
  const options = useMemo(
    () => [
      { value: "0", label: "Tất cả" },
      { value: "1", label: "Kiosk" },
      { value: "2", label: "Hệ thống" },
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
        width: 196,
        height: 44,
        radius: 4,
      }),
      control: (provided) => ({
        ...provided,
        width: 196,
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
    <div style={{ width: "196px" }}>
      <Select
        options={options}
        defaultValue={options[1]}
        styles={customStyles}
      />
    </div>
  );
}
export default From;
