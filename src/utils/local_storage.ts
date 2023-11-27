import { type PointRecords, isPointRecords } from '../types/point_record'

async function initPointRecords(): Promise<PointRecords> {
  const records: PointRecords = {
    cnt: 0,
    records: [],
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
  const index = records.records.findIndex((record) => record.id === id)

  if (index === -1) {
    records.records.push({ id, cnt: 1, from: Date.now() })
  } else {
    records.records[index].cnt++
  }

  records.cnt++

  await setChannelPointInfo(records)
}
