import { Switch, Route } from 'react-router-dom'
import OverviewInfoBox from './OverviewInfoBox'
import HotspotsInfoBox from './HotspotsInfoBox'
import HotspotDetailsInfoBox from './HotspotDetailsInfoBox'
import ValidatorsInfoBox from './ValidatorsInfoBox'
import BlocksInfoBox from './BlocksInfoBox'
import BlockDetailsInfoBox from './BlockDetailsInfoBox'
import BeaconsInfoBox from './BeaconsInfoBox'
import TxnDetailsInfoBox from './TxnDetailsInfoBox'
import AccountsInfoBox from './AccountsInfoBox'
import AccountDetailsInfoBox from './AccountDetailsInfoBox'
import ValidatorDetailsInfoBox from './ValidatorDetailsInfoBox'
import HexDetailsInfoBox from './HexDetailsInfoBox'
import MarketInfoBox from './MarketInfoBox'
import CommunityToolsInfoBox from './CommunityTools/CommunityToolsInfoBox'
import ErrorInfoBox from './ErrorInfoBox'
import CityDetailsInfoBox from './CityDetailsInfoBox'

const InfoBoxSwitch = () => {
  // Match locales with regular expression containing each locale separated by `|`
  const base = '/:locale(en|fr)?'

  return (
    <Switch>
      
      <Route path={`${base}/hotspots`}>
        <HotspotsInfoBox />
      </Route>
     
      
      
      
      
      
      
      
      
      
      <Route>
        <OverviewInfoBox />
      </Route>
     
    </Switch>
  )
}

export default InfoBoxSwitch
