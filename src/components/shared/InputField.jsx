function InputField({ label, value }) {
    return (
        <div>
            <label htmlFor="inputField">{label}</label>
            <br/>
            <input id="inputField" defaultValue={value}/>
            <br/>
        </div>
    )
}

export default InputField
