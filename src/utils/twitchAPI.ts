import { type APIResponse } from '../types/streamer'

export const getStreamerInfo = async (
  streamerNames: string[],
): Promise<APIResponse> => {
  const url =
    'https://port-0-channelpointcollector-backend-1gksli2alpl9cfat.sel4.cloudtype.app/streamer?q=' +
    streamerNames.join('&q=')
  const data = await fetch(url)

  if (data.ok) {
    return await data.json()
  }

  throw new Error('Failed to fetch streamer info')
}
