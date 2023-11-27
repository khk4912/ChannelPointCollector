interface ChannelInfo {
  cnt: number
  from: number
}

export interface PointRecords {
  cnt: number
  records: Partial<Record<string, ChannelInfo>>
}

export function isPointRecords(obj: any): obj is PointRecords {
  return (
    obj !== null &&
    typeof obj.cnt === 'number' &&
    typeof obj.records === 'object'
  )
}
