import getImageByKey from "../../utils/getImageByKey"

export function Icon( {icon} ) {
    return <img className="icon" src={getImageByKey(icon)}></img>
}
