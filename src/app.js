/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-22 11:20:42 
 * @Last Modified time:   2017-12-22 11:20:42 
 * @Description: init-entry 
 */
import $ from 'jquery'

import './css/loading.less'
import './css/grid.less'
import './css/resume.less'

require('font-awesome-webpack')

const playTitle = require('./js/playTitle.js')

window.onload = function () {
  playTitle()
  var loading = document.querySelector('.loading')
  console.log(loading)
  setTimeout(function () {
    loading.style.opacity = 0
    loading.style.display = 'none'
  }, 1000)
}