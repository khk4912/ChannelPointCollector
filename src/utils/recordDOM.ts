import type { ChannelRecords } from '../types/point_record'
import type { APIResponse } from '../types/streamer'
import { getStreamerInfo } from './twitchAPI'

export async function addStreamerDOM(
  records: ChannelRecords,
  target: HTMLDivElement,
): Promise<void> {
  // sort by cnts
  const streamerNames = Object.keys(records)

  // every 100 streamers

  for (let i = 0; i < streamerNames.length; i += 100) {
    const streamers = streamerNames.slice(i, i + 100)

    const streamerInfo = await getStreamerInfo(streamers)
    const streamerDOMs = createStreamerDOM(streamerInfo, records)

    target.append(...streamerDOMs)
  }
}

const createStreamerDOM = (
  info: APIResponse,
  records: ChannelRecords,
): HTMLDivElement[] => {
  const res: HTMLDivElement[] = []
  const sortedRecords = Object.keys(records).sort(
    (a, b) => records[b].cnt - records[a].cnt,
  )

  for (const r of sortedRecords) {
    const i = info.data.find((i) => i.login === r)

    const streamerDiv = document.createElement('div')
    streamerDiv.classList.add('streamer')
    streamerDiv.classList.add('left')

    const profileImg = document.createElement('img')
    profileImg.id = 'profileImg'
    profileImg.src = i?.profile_image_url ?? 'assets/default_profile.png'

    const streamerInfo = document.createElement('div')
    streamerInfo.classList.add('streamer-info')

    const streamerId = document.createElement('span')
    streamerId.id = 'streamerId'
    streamerId.textContent = i?.login ?? r

    const streamerName = document.createElement('span')
    streamerName.id = 'streamerName'
    streamerName.textContent = i?.display_name ?? r

    const recordInfo = document.createElement('div')
    recordInfo.classList.add('record-info')

    const count = records[r].cnt

    const recordCount = document.createElement('span')
    recordCount.id = 'recordCount'
    recordCount.textContent = count.toLocaleString()

    const recordPoints = document.createElement('span')
    recordPoints.id = 'recordPoints'
    recordPoints.textContent = (count * 50).toLocaleString()

    //   streamerInfo.appendChild(streamerName)
    streamerDiv.appendChild(profileImg)
    streamerInfo.appendChild(streamerId)
    streamerInfo.appendChild(streamerName)
    recordInfo.appendChild(recordCount)
    recordInfo.appendChild(recordPoints)
    streamerDiv.appendChild(streamerInfo)
    streamerDiv.appendChild(recordInfo)

    res.push(streamerDiv)
  }

  return res
}
