import { Icon } from "./Icon"

function StatLabel({type, value}) {
   return <div className="stat">
        <Icon icon={type}/>
        <span>{value}</span>
    </div>
}

export default StatLabel
