import { useContext, useState } from "react";
import NavBar from "../shared/NavBar";
import SaveJsonButton from "../shared/SaveJsonButton";
import { AbilityContext } from '../../context/AbilityContext'
import AbilitySearchBox from "./AbilitySearchBox";
import ConfirmationModal from "../shared/ConfirmationModal";

export default function AbilityList() {
    const { abilities, addAbility, beginEdit, deleteAbility } = useContext(AbilityContext);
    const [ deletingAbility, setDeletingAbility ] = useState(null);

    const handleEdit = (ability) => {
        beginEdit(ability);
    }

    const handleTryDelete = (ability) => {
        setDeletingAbility(ability);
    }

    const handleConfirmDelete = () => {
        deleteAbility(deletingAbility);
        setDeletingAbility(null);
    }

    const handleCancelDelete = () => {
        setDeletingAbility(null);
    }

    const getDeletePrompt = () => {
        return `Delete ability "${deletingAbility.name}"? This cannot be undone.`;
    }

    const sideControls = (ability) => {
        return (
            <div>
                <button style={{fontWeight:"bold"}} onClick={() => handleEdit(ability)}>Edit</button>
                <button style={{color:"red"}} onClick={() => handleTryDelete(ability)}>Delete</button>
            </div>
        );
    }

    return (
        <>
        <NavBar />
        <br />
        <div>
            <button onClick={addAbility}><b>NEW ABILITY</b></button>
            <AbilitySearchBox sideControls={sideControls}/>
        </div>
        <SaveJsonButton name='abilities' data={abilities} />
        {deletingAbility !== null ? <ConfirmationModal 
            prompt={getDeletePrompt()} 
            onYes={handleConfirmDelete} 
            onNo={handleCancelDelete} /> : null}
        <br />
        </>
    );
}
