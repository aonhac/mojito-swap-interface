import React from 'react'
import { Modal } from '../../uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import AudioSetting from './AudioSetting'

type SettingsModalProps = {
  onDismiss?: () => void
  translateString: (translationId: number, fallback: string) => string
}

const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss, translateString }: SettingsModalProps) => {
  return (
    <Modal style={{ borderRadius: 16 }} title={translateString(1200, 'Settings')} onDismiss={onDismiss}>
      <SlippageToleranceSetting translateString={translateString} />
      <TransactionDeadlineSetting translateString={translateString} styles={{ marginTop: '30px' }} />
    </Modal>
  )
}

export default SettingsModal
