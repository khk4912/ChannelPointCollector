interface ChannelInfo {
  id: string
  cnt: number
  from: number // timestamp
}

export interface PointRecords {
  cnt: number
  records: ChannelInfo[]
}

export function isPointRecords(obj: any): obj is PointRecords {
  return (
    obj !== null && typeof obj.cnt === 'number' && Array.isArray(obj.records)
  )
}
