/*import InfoBoxPaneContainer from '../Common/InfoBoxPaneContainer'
import Widget from '../../Widgets/Widget'
import SkeletonWidgets from '../Common/SkeletonWidgets'

const CityStatisticsPane = ({ city }) => {
  if (!city) return <SkeletonWidgets />
  return (
    <InfoBoxPaneContainer>
      <Widget
        value={city.hotspotCount.toLocaleString()}
        //total number of the players
        title="Total Players in City"
        subtitle={`${(
          (city.onlineCount / city.hotspotCount) *
          100
        ).toLocaleString(undefined, { maximumFractionDigits: 2 })}% onlines`}
        span={2}
      />
      <Widget
        value={city.onlineCount.toLocaleString()}
        title="Online Players"
      />
      <Widget
        value={city.offlineCount.toLocaleString()}
        title="Offline Players"
      />
    </InfoBoxPaneContainer>
  )
}

export default CityStatisticsPane
*/