/*import React from 'react'
import Client from '@helium/http'
import { Button, Modal, notification } from 'antd'
import { ExportToCsv } from 'export-to-csv'
import { parseTxn } from './utils'
import ExportProgress from './ExportProgress'
import ExportForm from './ExportForm'
import { getUnixTime, startOfDay } from 'date-fns'

const now = new Date()

class ExportModal extends React.Component {
  state = initialState

  componentDidMount() {
    this.client = new Client()
  }

  showModal = () => this.setState({ open: true })

  handleOk = async () => {
    if (this.state.done) {
      return this.handleCancel()
    }
    this.setState({ loading: true })
    await this.handleExportCsv()
    this.setState({ done: true, loading: false })
  }

  handleCancel = () => this.setState(initialState)

  onDateChange = (dates) => {
    this.setState({
      startDate: getUnixTime(dates[0]),
      endDate: getUnixTime(dates[1]),
    })
  }

  onTxnChange = (txn) => this.setState({ txn })
  onFeeChange = (e) => this.setState({ fee: e.target.value })

  handleExportCsv = async () => {
    const { address, type } = this.props
    const { startDate, endDate, txn, fee } = this.state

    

    let service = null
    let list

    switch (type) {
      
      case 'hotspot':
        service = this.client.hotspot
        break
      default:
        break
    }

    if (service !== null) {
      list = await service(address).activity.list({
        filterTypes,
      })
    } else {
      console.error(`A service for export type ${type} needs to be defined.`)
      return
    }

    let data = []

  

    const options = {
      filename: `${type === 'account' ? 'Account' : 'Hotspot'} ${address}`,
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    }

    const csvExporter = new ExportToCsv(options)

    if (data.length) {
      csvExporter.generateCsv(data)
    } else {
      notification.info({
        message: 'No data to export',
      })
    }
  }

  render() {
    const { loading, startDate, lastTxnTime, done } = this.state

    const percent = done
      ? 100
      : Math.floor(
          (1 -
            (lastTxnTime - startDate) / (getUnixTime(new Date()) - startDate)) *
            100,
        )

    return (
      <>
        <Button onClick={this.showModal} style={this.props.style}>
          Export CSV
        </Button>
        <Modal
          title="Export Account Activity"
          visible={this.state.open}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {loading || done ? (
            <ExportProgress percent={percent} />
          ) : (
            <ExportForm
              type={this.props.type}
              onDateChange={this.onDateChange}
              onTxnChange={this.onTxnChange}
              onFeeChange={this.onFeeChange}
            />
          )}
        </Modal>
      </>
    )
  }
}

export default ExportModal
*/