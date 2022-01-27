import classes from "../UI/ReportModule/report.module.css";
import React, { useMemo } from "react";
import Select from "react-select";

function Status() {
  const options = useMemo(
    () => [
      { value: "0", label: "Tất cả" },
      { value: "1", label: "Đang chờ" },
      { value: "2", label: "Đã sử dụng" },
      { value: "3", label: "Bỏ qua" },
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
        width: 216,
        height: 44,
        radius: 4,
      }),
      control: (provided) => ({
        ...provided,
        width: 216,
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
    <div style={{ width: "216px" }}>
      <Select
        options={options}
        defaultValue={options[1]}
        styles={customStyles}
      />
    </div>
  );
}
export default Status;
