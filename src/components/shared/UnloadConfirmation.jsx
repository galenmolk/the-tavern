import { useEffect } from "react";

export default function UnloadConfirmation( {children}) {
    useEffect(() => {
        const handleUnload = (e) => {
            e.preventDefault();
        }

        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        }
    }, []);

    return children;
}
