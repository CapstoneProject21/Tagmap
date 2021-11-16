import { round } from 'lodash'
import InfoBox from './InfoBox'
import TrendWidget from '../Widgets/TrendWidget'
import StatWidget from '../Widgets/StatWidget'
import HalveningCountdownWidget from '../Widgets/HalvingCountdownWidget'
import useApi from '../../hooks/useApi'
import InfoBoxPaneContainer from './Common/InfoBoxPaneContainer'
import { formatLargeNumber } from '../../utils/format'
import Widget from '../Widgets/Widget'
import Currency from '../Common/Currency'
import { useMarket } from '../../data/market'
import { useStats } from '../../data/stats'
// import { useDataCredits } from '../../data/datacredits'
import { useValidatorStats } from '../../data/validators'

const OverviewInfoBox = () => {
  const { data: hotspots } = useApi('/metrics/hotspots')
  const { data: blocks } = useApi('/metrics/blocks')
  const { stats: validatorStats } = useValidatorStats()
  const { market } = useMarket()
  const { stats } = useStats()
  // const { dataCredits } = useDataCredits()

  return (
    <InfoBox title="TagMap">
      <InfoBoxPaneContainer>
        <TrendWidget
          title="TAGMATCH"
          series={hotspots?.count}
          isLoading={!hotspots}
          linkTo="/hotspots"
        />
        
       
        {/* <Widget
          title="DC Spent (30d)"
          tooltip="Data Credits are spent for transaction fees and to send data over the Helium Network. HNT are burned to create DC."
          value={
            (Math.abs(Number(dataCredits?.totalMonth)) / 1.0e9).toFixed(2) +
            ' bn'
          }
          change={<Currency value={dataCredits?.totalMonth * 0.00001} />}
          isLoading={!dataCredits}
          linkTo="/market"
        /> */}
        
        <HalveningCountdownWidget />
        
       
      </InfoBoxPaneContainer>
    </InfoBox>
  )
}

export default OverviewInfoBox
