import "./Background.scss";
import {ReactNode} from "react";


const Background = ({ children }: { children: ReactNode }) => {
    return (
        <div className="background">
            {children}
        </div>
    )
}
export default Background;