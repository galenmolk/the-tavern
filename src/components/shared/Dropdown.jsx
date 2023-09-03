export default function Dropdown( { options, onChange } ) {
    console.log(options)
    return <select name="Options" multiple>
        {options.map(o => <option key={1}>{o}</option>)}
        {/* <option>hello</option>
        <option>yo</option>
        <option>yo</option>
        <option>yo</option>
        <option>yo</option> */}
    {
    
    /* { options.map((o, i) => {
        <option value={o} key={i}>{o}</option>
    })} */}
</select>
}
