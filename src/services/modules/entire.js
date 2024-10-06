import XLRequest from "../request";

export function getEntireRoomList(offset = 0, size = 20) {
  return XLRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}