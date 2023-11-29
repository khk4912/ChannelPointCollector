import { type PointRecords, isPointRecords } from '../types/point_record'

export async function initPointRecords(): Promise<PointRecords> {
  const records: PointRecords = {
    cnt: 0,
    records: {},
  }
  await chrome.storage.local.set({ point_records: records })

  return records
}

export async function getChannelPointInfo(): Promise<PointRecords> {
  const data = await chrome.storage.local.get('point_records')
  const records = data.point_records

  if (!isPointRecords(records)) {
    return await initPointRecords()
  }

  return records
}

export async function setChannelPointInfo(
  records: PointRecords,
): Promise<void> {
  await chrome.storage.local.set({ point_records: records })
}

export async function addCountOf(id: string): Promise<void> {
  const records = await getChannelPointInfo()
  let channelInfo = records.records[id]

  if (channelInfo === undefined) {
    channelInfo = {
      cnt: 0,
      from: new Date().getTime(),
    }
  }

  channelInfo.cnt++
  records.cnt++

  records.records[id] = channelInfo
  await setChannelPointInfo(records)
}

export async function getRecords(): Promise<PointRecords['records']> {
  const info = await getChannelPointInfo()
  return info.records
}
