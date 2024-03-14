import "./Input.scss";

function Input({ containerClassname, htmlFor, labelText, type, inputId, inputOnChange }) {
    return (
        <div className={containerClassname}>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input type={type} id={inputId} onChange={inputOnChange} />
        </div>
    );
}

export default Input;
