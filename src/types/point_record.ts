interface ChannelInfo {
  cnt: number
  from: number
}

export type ChannelRecords = Record<string, ChannelInfo>

export interface PointRecords {
  cnt: number
  records: ChannelRecords
}

export function isPointRecords(obj: any): obj is PointRecords {
  return typeof obj?.cnt === 'number' && typeof obj?.records === 'object'
}
