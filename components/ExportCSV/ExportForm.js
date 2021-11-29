/*import React from 'react'
import { Typography, Radio, Checkbox } from 'antd'
import { DatePicker } from '../../components/Antd'
import {
  startOfDay,
  startOfMonth,
  startOfYear,
  endOfMonth,
  endOfYear,
  subMonths,
  subYears,
} from 'date-fns'

const { RangePicker } = DatePicker
const { Text } = Typography

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

const InputGroup = ({ children }) => (
  <div style={{ margin: '0 0 12px 0' }}>{children}</div>
)

const ExportForm = ({ onDateChange, onTxnChange, onFeeChange, type }) => {
  let options

  switch (type) {
    case 'hotspot':
      options = [{ label: 'Rewards', value: 'reward' }]
      break
    default:
    case 'account':
      options = [
        { label: 'Payments', value: 'payment' },
        { label: 'Rewards', value: 'reward' },
        { label: 'Hotspot Transfers', value: 'transfer' },
        { label: 'Add Hotspots', value: 'add' },
        { label: 'Location Asserts', value: 'assert' },
      ]
      break
  }

  const now = new Date()

  return (
    <div>
      <InputGroup>
        <div style={{ marginBottom: '4px' }}>
          <Text strong>Date Range to Export:</Text>
        </div>
     
      </InputGroup>

      <InputGroup>
        <Text strong>Transactions to Export:</Text>
        <div>
          <Checkbox.Group
            options={options}
            defaultValue={['payment', 'reward']}
            onChange={onTxnChange}
          />
        </div>
      </InputGroup>
</div>
    
)
  }

export default ExportForm
*/