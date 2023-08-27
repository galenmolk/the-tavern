import { useRef } from "react";

export default function SaveJsonButton( {name, data} ) {
    const anchorRef = useRef(null);

    const saveJson = (name, data) => {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json'});
        const url = URL.createObjectURL(blob);

        if (anchorRef.current) {
            anchorRef.current.href = url;
            anchorRef.current.download = `${name}.json`;
            anchorRef.current.click();
        }

        URL.revokeObjectURL(url);
    };
    
    return <>
        <a ref={anchorRef} style={{ display: 'none' }} />
        <button onClick={() => saveJson(name, data)}>Save JSON</button>
    </>
}
