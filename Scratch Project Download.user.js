// ==UserScript==
// @name      Scratch Project Download
// @namespace http://tampermonkey.net/
// @version   0.4
// @description Add a download button to Scratch projects
// @author    You
// @match     https://scratch.mit.edu/projects/*
// @icon      https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://scratch.mit.edu&size=180
// @grant     none
// ==/UserScript==

// ページが完全にロードされた後にスクリプトを実行
window.addEventListener('load', function() {
 // プロジェクトIDを取得
 var projectId = window.location.pathname.split('/')[2];

 // ダウンロードリンクを取得
 var downloadLink = document.querySelector('a:contains("Scratchについて")');

 // リンクのテキストを変更
 downloadLink.textContent = 'プロジェクトをダウンロード';

 // リンクのURLを変更
 downloadLink.href = 'https://forkphorus.github.io/sb-downloader/?id=' + projectId;
});
