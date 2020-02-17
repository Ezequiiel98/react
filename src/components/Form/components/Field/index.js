import React from "react";

function Field({ htmlFor, label, name, value,  textarea,  ...inputProps }) {
	return (
		<div className="contenedor-input">
			<label htmlFor={htmlFor}>{label}</label>
			{textarea ? <textarea {...inputProps} name={name} value={value} /> : <input {...inputProps} name={name} value={value}  />}
		</div>
	);
}

export default Field;
