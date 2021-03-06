//We donot require this to measure the distances


//Threw some exceptions while ignoring or commenting this page




import { useMemo } from 'react'
import { GeoJSONLayer, Layer, Feature } from 'react-mapbox-gl'
import geoJSON from 'geojson'
import { emptyGeoJSON } from '../../../utils/location'

const MeasuringPointsLayer = ({ from, to }) => {
  const measuringCircle = useMemo(() => {
    return {
      'circle-color': '#FFFFFF',
      'circle-radius': 6,
      'circle-opacity': 1,
      'circle-blur': 0.1,
    }
  }, [])

  let points = []
  if (from && to) {
    points = [from, to]
  } else if (from && !to) {
    points = [from]
  } else {
    points = []
  }

  const measurementPointsData = useMemo(() => {
    return geoJSON.parse(points, {
      Point: ['lat', 'lng'],
    })
  }, [points])

  return (
    <>
      <Layer
        type="line"
        layout={{
          'line-cap': 'round',
          'line-join': 'round',
        }}
        paint={{
          'line-color': '#FFFFFF',
          'line-width': 4,
          'line-dasharray': [2, 2],
          'line-opacity': 0.9,
        }}
      >
        {from?.lng && from?.lat && to?.lng && to?.lat && (
          <Feature
            key="measurement-line"
            coordinates={[
              [from.lng, from.lat],
              [to.lng, to.lat],
            ]}
          />
        )}
      </Layer>
      <GeoJSONLayer
        id="measurement-points"
        data={measurementPointsData || emptyGeoJSON}
        circlePaint={measuringCircle}
      />
    </>
  )
}

export default MeasuringPointsLayer
