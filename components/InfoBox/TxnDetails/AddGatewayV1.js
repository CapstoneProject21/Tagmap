

//THIS IS THE ADDING HOSTSPOT FOR THE HELIUM EXPLORER SO NOT REQUIRED PAGE OR MODULE


/*import { useState } from 'react'
import { useAsync } from 'react-async-hook'
import { fetchHotspot } from '../../../data/hotspots'
import AccountWidget from '../../Widgets/AccountWidget'
import HotspotWidget from '../../Widgets/HotspotWidget'
import Widget from '../../Widgets/Widget'
import { getMakerName } from '../../Makers/utils'
import InfoBoxPaneContainer from '../Common/InfoBoxPaneContainer'

const AddGatewayV1 = ({ txn }) => {
  const [addedHotspot, setAddedHotspot] = useState()
  const [makerName, setMakerName] = useState()
  const [isLoadingInitial, setIsLoadingInitial] = useState(false)

  useAsync(async () => {
    setIsLoadingInitial(true)
    const addedHotspotFetched = await fetchHotspot(txn.gateway)
    if (txn.payer === txn.owner || txn.payer === null) {
      setMakerName('Hotspot Owner')
    } else {
      setMakerName(await getMakerName(txn.payer))
    }
    setAddedHotspot(addedHotspotFetched)
    setIsLoadingInitial(false)
  }, [])

  const stakingFeePayer =
    txn.payer === txn.owner || txn.payer === null ? txn.owner : txn.payer

  return (
    <InfoBoxPaneContainer>
      <HotspotWidget
        hotspot={addedHotspot}
        title="Added Hotspot"
        isLoading={isLoadingInitial}
      />
      <AccountWidget
        address={txn.owner}
        title="Added Hotspot Owner"
        isLoading={isLoadingInitial}
      />
      <Widget
        title={'Staking Fee'}
        value={txn.stakingFee.toString()}
        span={2}
        isLoading={isLoadingInitial}
      />
      <AccountWidget
        title={'Staking Fee Payer'}
        subtitle={<span className="text-gray-700">{makerName}</span>}
        address={stakingFeePayer}
        isLoading={isLoadingInitial}
      />
      <Widget
        title={'Fee'}
        value={txn.fee.toString()}
        isLoading={isLoadingInitial}
        span={2}
      />
    </InfoBoxPaneContainer>
  )
}

export default AddGatewayV1
*/