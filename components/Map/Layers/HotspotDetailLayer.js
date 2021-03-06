import { useMemo } from 'react'
import { GeoJSONLayer, Image, Layer, Feature } from 'react-mapbox-gl'
import geoJSON from 'geojson'
import { emptyGeoJSON } from '../../../utils/location'

const HotspotDetailLayer = ({ hotspot, witnesses = [] }) => {
  const witnessCircleLayout = useMemo(() => {
    return {
      'circle-color': '#F1C40F',
      'circle-radius': 5,
      'circle-opacity': 1,
      'circle-blur': 0,
    }
  }, [])

  const witnessesData = useMemo(() => {
    return geoJSON.parse(witnesses, {
      Point: ['lat', 'lng'],
      include: ['address', 'owner', 'location', 'status'],
    })
  }, [witnesses])

  return (
    <>
      <Image id="selected-hotspot-img" url="/images/selected-hotspot.png" />
      <Layer
        type="line"
        layout={{
          'line-cap': 'round',
          'line-join': 'round',
        }}
        paint={{
          'line-color': '#F1C40F',
          'line-width': 2,
          'line-opacity': 0.3,
        }}
      >
        {hotspot &&
          hotspot.lat &&
          hotspot.lng &&
          hotspot.location 
         }
      </Layer>
     
     
    </>
  )
}

export default HotspotDetailLayer
