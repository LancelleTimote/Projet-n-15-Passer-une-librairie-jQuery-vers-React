import "./Input.scss";

function Input({ htmlFor, labelText, type, inputId }) {
    return (
        <div>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input type={type} id={inputId} />
        </div>
    );
}

export default Input;
