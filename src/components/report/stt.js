import classes from "../UI/ReportModule/report.module.css";
import React, { useMemo } from "react";
import Select from "react-select";

function Stt() {
  const options = useMemo(
    () => [
      { value: "st0", label: "Tất cả" },
      { value: "st2040001", label: "2040001" },
      { value: "st2040002", label: "2040002" },
      { value: "st2040003", label: "2040003" },
      { value: "st2040004", label: "2040004" },
      { value: "st2040005", label: "2040005" },
      { value: "st2040006", label: "2040006" },
      { value: "st2040007", label: "2040007" },
      { value: "st2040008", label: "2040008" },
      { value: "st2040009", label: "2040009" },
      { value: "st20400010", label: "20400010" },
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
        width: 226,
        height: 44,
        radius: 4,
      }),
      control: (provided) => ({
        ...provided,
        width: 226,
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
    <div style={{ width: "226px" }}>
      <Select
        options={options}
        defaultValue={options[1]}
        styles={customStyles}
        placeholder="Số thứ tự"
      />
    </div>
  );
}
export default Stt;
