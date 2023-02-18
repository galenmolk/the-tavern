function InputField({ label, value, handleChange, placeholder, type, min, max, required }) {
    return (
        <div>
            <label htmlFor="inputField">{label}</label>
            <br/>
            <input 
                id="inputField" 
                defaultValue={value}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                min={min}
                max={max}
                required={required}
            />
            <br/>
        </div>
    )
}

export default InputField
