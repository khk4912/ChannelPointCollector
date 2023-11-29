export function streamerRecordDOM(id: string, count: number): HTMLDivElement {
  const stremaer = document.createElement('div')

  const streamerInfo = document.createElement('div')
  streamerInfo.classList.add('streamer-info')

  const streamerName = document.createElement('span')
  streamerName.id = 'streamerName'
  streamerName.textContent = 'streamerName'

  const streamerId = document.createElement('span')
  streamerId.id = 'streamerId'
  streamerId.textContent = id

  const recordInfo = document.createElement('div')
  recordInfo.classList.add('record-info')

  const recordCount = document.createElement('span')
  recordCount.id = 'recordCount'
  recordCount.textContent = count.toLocaleString()

  const recordPoints = document.createElement('span')
  recordPoints.id = 'recordPoints'
  recordPoints.textContent = (count * 50).toLocaleString()

  streamerInfo.appendChild(streamerName)
  streamerInfo.appendChild(streamerId)
  recordInfo.appendChild(recordCount)
  recordInfo.appendChild(recordPoints)
  stremaer.appendChild(streamerInfo)
  stremaer.appendChild(recordInfo)

  return stremaer
}

/* 
<div class="streamer">
<div class="streamer-info">
  <span id="streamerName"></span>
  <span id="streamerId"></span>
</div>

<div class="record-info">
  <span id="recordCount"></span>
  <span id="recordPoints"></span>
</div>
</div>

*/
