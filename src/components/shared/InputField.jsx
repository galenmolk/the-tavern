function InputField({ name, value, handleChange, type, min, max, required }) {
    return (
        <div>
            <label htmlFor="inputField">{name}:</label>
            <br/>
            <input 
                id="inputField" 
                defaultValue={value}
                onChange={handleChange}
                placeholder={name}
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
