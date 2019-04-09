import {
  $
} from './axios'

let headers = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}

export const wxshareData = param => $.post('/api/home/wxshareData', param) // 微信分享 字段
export const wxshareLink = param => $.post('/api/home/wxshareLink', param) // 微信分享 config

// 问答
export const qaDetail = param => $.post('/qa/qaDetail', param, headers)

export const queryEssayInfo = param => $.post('/essayInfo/queryEssayInfo', param)
export const queryEssayEval = param => $.post('/weiXin/queryEssayEval', param)

// 专家
export const getBaseInfo = param => $.post('/expert/getBaseInfo/' + param)
export const getEvalInfo = param => $.post('/expert/getEvalInfo/' + param)
export const getQuestionlist = param => $.post('/expert/getQuestionlist', param)
export const getProductListByExpertId = param => $.post('/expert/getProductListByExpertId/' + param)
export const getEssayListByExpertId = param => $.post('/expert/getEssayListByExpertId/' + param)

// 产品

export const productInfo = param => $.post('/weixin/product/productInfo/' + param)
export const queryCommonEvals = param => $.post('/weixin/product/queryCommonEvals', param, headers)
