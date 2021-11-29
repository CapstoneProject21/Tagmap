/*import { useState } from 'react'
import { useAsync } from 'react-async-hook'
import HotspotWidget from '../../Widgets/HotspotWidget'
import { fetchHotspot } from '../../../data/hotspots'
import AccountWidget from '../../Widgets/AccountWidget'
import Widget from '../../Widgets/Widget'
import InfoBoxPaneContainer from '../Common/InfoBoxPaneContainer'

const PocRequestV1 = ({ txn }) => {
  const [challenger, setChallenger] = useState()

  useAsync(async () => {
    const fetchedChallenger = await fetchHotspot(txn.challenger)
    setChallenger(fetchedChallenger)
  }, [])

  return (
    <InfoBoxPaneContainer>
      <HotspotWidget title="NOT SEEN YET" hotspot={challenger} />
      <AccountWidget title="REMOVE THIS PART IF SEEN IN THIS MODULE" address={txn.challengerOwner} />
      
     
     
    </InfoBoxPaneContainer>
  )
}

export default PocRequestV1
*/