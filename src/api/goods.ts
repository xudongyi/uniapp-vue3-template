import request from '@/utils/request'

/**
 * 精选课程
 *
 */
export function fetchRecommendGoodsList(data) {
  return request?.get?.('/product/recommend', data, { noAuth: true })
}

/**
 * 平台详情
 *
 */
export function fetchGoodsDetail(data) {
  return request?.get?.('/product/detail', data, { noAuth: true })
}
