import XLRequest from "../request"
export function getHomeGoodPriceData() {
  return XLRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return XLRequest.get({
    url: "/home/highscore" 
  })
}

export function getHomeDiscountData() {
  return XLRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return XLRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return XLRequest.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return XLRequest.get({
    url: "/home/plus"
  })
}