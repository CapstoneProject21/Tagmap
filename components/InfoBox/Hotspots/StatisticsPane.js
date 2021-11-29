/*import { useMemo } from 'react'
import StatWidget from '../../Widgets/StatWidget'
import TrendWidget from '../../Widgets/TrendWidget'
import { useLatestHotspots } from '../../../data/hotspots'
import HotspotWidget from '../../Widgets/HotspotWidget'
import useApi from '../../../hooks/useApi'
import InfoBoxPaneContainer from '../Common/InfoBoxPaneContainer'
import Widget from '../../Widgets/Widget'
import { maxBy } from 'lodash'

const StatisticsPane = () => {
  const { data: stats } = useApi('/metrics/hotspots')
  const { data: makers } = useApi('/makers')
  const { latestHotspots } = useLatestHotspots()

  const latestHotspot = useMemo(() => {
    if (!latestHotspots) return null
    return latestHotspots.find((h) => !!h.location)
  }, [latestHotspots])

  return (
    <InfoBoxPaneContainer>
      <TrendWidget title="TAGMATCH PLAYERS" series={stats?.count} isLoading={!stats} />
      <StatWidget
        title="% Online PLAYERS"
        series={stats?.onlinePct}
        isLoading={!stats}
        valueType="percent"
        changeType="percent"
      />
     
      <StatWidget
        title="Cities"
        series={stats?.citiesCount}
        isLoading={!stats}
      />
      <StatWidget
        title="Countries"
        series={stats?.countriesCount}
        isLoading={!stats}
      />
    
      
    </InfoBoxPaneContainer>
  )
}

export default StatisticsPane
*/