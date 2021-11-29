

//Not sure of these


import classNames from 'classnames'
import { useCallback } from 'react'
import useMapLayer from '../../hooks/useMapLayer'
import Hex from '../Icons/Hex'

const MapLayersBox = () => {
  const {
    showMapLayers,
    setMapLayer,
    mapLayer,
    toggleMapLayers,
  } = useMapLayer()

  const handleClick = useCallback(
    (clickedLayer) => () => {
      if (mapLayer === clickedLayer) {
        setMapLayer(null)
        return
      }

      setMapLayer(clickedLayer)
    },
    [mapLayer, setMapLayer],
  )

  

  return (
    <div
      className={classNames(
        'fixed right-0 bottom-8 md:bottom-0 p-4 md:p-8 md:pr-4 transform-gpu transition-all duration-300 ease-in-out',
        {
          'opacity-0 pointer-events-none': !showMapLayers,
        },
      )}
    >
      <div className="relative">
        <div
          onClick={toggleMapLayers}
          className="cursor-pointer w-10 h-10 flex items-center justify-center self-end transform-gpu transition-transform duration-300 ease-in-out"
          style={{
            transform: showMapLayers
              ? `translateY(-${50 * layers.length}px)`
              : 'translateY(0)',
          }}
        >
          <img alt="" src="/images/close.svg" />
        </div>
       
      </div>
    </div>
  )
}



export default MapLayersBox
