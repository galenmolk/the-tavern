import '../../css/shared/confirmation-modal.css'

export default function ConfirmationModal( { prompt, onYes, onNo } ) {
    return (
        <div className='modal' onClick={onNo}>
            <div className='modal-content'>
                <p>{prompt}</p>
                <div className='modal-buttons'>
                    <button className='modal-button' onClick={onNo}>No</button>
                    <button className='modal-button confirm' onClick={onYes}>Yes</button>
                </div>
            </div>
        </div>
    );
}
