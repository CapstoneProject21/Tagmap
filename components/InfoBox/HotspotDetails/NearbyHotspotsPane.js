import classNames from 'classnames'
import { useMemo } from 'react'
import { useAsync } from 'react-async-hook'
import { h3ToGeo } from 'h3-js'
import { fetchNearbyHotspots } from '../../../data/hotspots'
import NearbyHotspotsList from '../../Lists/NearbyHotspotsList'
import animalHash from 'angry-purple-tiger'



//total showing of the nearby players by the geolocation
const NearbyHotspotsPane = ({ hotspot }) => {
  const { result: nearbyHotspots, loading } = useAsync(fetchNearbyHotspots, [
    h3ToGeo(hotspot?.locationHex)[0],
    h3ToGeo(hotspot?.locationHex)[1],
    5000,
  ])

  const hotspots = useMemo(() => {
    if (!nearbyHotspots) return []
    return nearbyHotspots.filter((h) => h.address !== hotspot.address)
  }, [hotspot?.address, nearbyHotspots])

  return (
    <div
      className={classNames('grid grid-flow-row grid-cols-1 no-scrollbar', {
        'overflow-y-scroll': !loading,
        'overflow-y-hidden': loading,
      })}
    >
      <NearbyHotspotsList
        hotspots={hotspots || []}
        isLoading={loading}
        title="Nearby Players"
        description={`Hotspots that are close enough that ${
          hotspot ? animalHash(hotspot.address) : 'this Hotspot'
        } could witness them or have its beacons witnessed by them. The probability of Hotspots interacting with each other depends on antenna location, position, and elevation.`}
        showCount
      />
    </div>
  )
}

export default NearbyHotspotsPane