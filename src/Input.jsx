import React from "react";

function Input({ label, id, touched, error, ...rest }) {
  let borderClass = "border-red-500";

  if (error && touched) {
    let borderClass = "border-red-500";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        className={
          "h-10 border-2 focus:border-red-600 " + "  " + { borderClass }
        }
        id={id}
        {...rest}
      />

      {touched && error && <div className="text-2xl text-red-400">{error}</div>}
    </div>
  );
}

export default Input;
