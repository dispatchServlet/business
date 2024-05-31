// ==UserScript==
// @name         HR 工时 显示问题
// @namespace    http://tampermonkey.net/
// @version      2024-05-31
// @description  try to take over the world!
// @author       You
// @match        http://192.168.50.203/web/Comm/SunStar-Index.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=50.203
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	setTimeout(setCssFun,3000);

})();

function setCssFun(){

	var iframe = document.getElementById('fleft');
	var iframeDocument = iframe.contentWindow.document;

    var menuLayer = iframeDocument.getElementById('menuLayer');
	menuLayer.style.position = 'static';
    menuLayer.style.paddingLeft = '35px';

	var table = iframeDocument.getElementById('PQ00');
	var rows = table.getElementsByTagName('tr');

	for (var i = 0; i < rows.length; i++) {
		rows[i].style.display = '';
	}

	/*

	// 将 id 为 menuLayer 的元素的 position 属性设置为 'static'
	var menuLayer = document.getElementById('menuLayer');
	menuLayer.style.position = 'static';

    // 设置表格下所有 <tr> 元素的 display 属性为 'inline'
	var table = document.getElementById('PQ00');
	var rows = table.getElementsByTagName('tr');
	for (var i = 0; i < rows.length; i++) {
	  rows[i].style.display = 'inline';
	}

    */
}
