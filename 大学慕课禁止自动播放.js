// ==UserScript==
// @name         大学慕课禁止自动播放
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  中国大学慕课禁止自动播放下一篇
// @author       VerNe
// @match        https://www.icourse163.org/learn/*
// @grant        none
// ==/UserScript==

(function() {
  var auto=setInterval(function(){
    let video = document.querySelector("#courseLearn-inner-box > div > div > div.j-lscontent.lscontent > div.j-unitct.unitct > div.m-learnunitUI.f-pr.learn-plan-container > div.j-unitctBar.unitctBar.f-cb > div.f-fl > input")
    console.log(video.checked)
    video.checked=false
      let video0 = document.querySelector("#courseLearn-inner-box > div > div > div.j-lscontent.lscontent > div.j-unitct.unitct > div.m-learnunitUI.f-pr.learn-plan-container > div.j-unitctBar.unitctBar.f-cb > div.f-fl > input")
  if (video0.checked==false) {
    clearInterval(auto);
     console.log('已停止自动播放')
  }
  }, 1000)
})();
