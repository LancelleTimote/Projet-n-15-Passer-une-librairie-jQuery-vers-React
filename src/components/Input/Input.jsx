import "./Input.scss";

function Input({ containerClassname, htmlFor, labelText, type, inputId }) {
    return (
        <div className={containerClassname}>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input type={type} id={inputId} />
        </div>
    );
}

export default Input;
