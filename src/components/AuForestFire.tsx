import React from 'react';
import Fire from '../components/Fire';
import { ReactComponent as Sailboat } from '../svg/sailboat.svg';
import { ReactComponent as Australia } from '../svg/australia.svg';

interface AuForestFireProps {
    id: number
}

  
function AuForestFire({id}: AuForestFireProps) {
    switch(id) {
        case 1:
            return (
                <div>
                    <h1>Welcome to Wollemi National Park</h1>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "120px"}}/>
                </div>
            )
        case 2:
            return (
                <div>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "30px"}}/>
                    <Fire style={{top: "380px", marginLeft: "500px"}}/>
                </div>
            )
        case 3:
            return (
                <div>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "30px"}}/>
                    <Fire style={{top: "380px", marginLeft: "500px"}}/>
                    <Fire style={{top: "280px", marginLeft: "500px"}}/>
                    <Fire style={{top: "230px", marginLeft: "380px"}}/>
                    <Fire style={{top: "330px", marginLeft: "380px"}}/>
                    <Fire style={{top: "360px", marginLeft: "260px"}}/>
                    <Fire style={{top: "270px", marginLeft: "260px"}}/>
                    <Fire style={{top: "270px", marginLeft: "260px"}}/>
                </div>
            )
        case 4:
            return (
                <div>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "30px"}}/>
                    <Sailboat className="boat" style={{position: "absolute", top: "200px", marginLeft: "-800px"}}/>
                    <Fire style={{top: "380px", marginLeft: "500px"}}/>
                    <Fire style={{top: "280px", marginLeft: "500px"}}/>
                    <Fire style={{top: "230px", marginLeft: "380px"}}/>
                    <Fire style={{top: "330px", marginLeft: "380px"}}/>
                    <Fire style={{top: "360px", marginLeft: "260px"}}/>
                    <Fire style={{top: "270px", marginLeft: "260px"}}/>
                    <Fire style={{top: "270px", marginLeft: "260px"}}/>
                </div>
            )
        default:
            return (
                <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "30px"}}/>
            )
    }
}

export default AuForestFire;