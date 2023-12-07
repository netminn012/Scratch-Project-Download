// ==UserScript==
// @name        Scratch Project Download
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description Add a download button to Scratch projects
// @author      You
// @match       https://scratch.mit.edu/projects/*
// @icon　　　　https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://scratch.mit.edu&size=180
// @grant       none
// ==/UserScript==

// ページが完全にロードされた後にスクリプトを実行
window.addEventListener('load', function() {
  // プロジェクトIDを取得
  var projectId = window.location.pathname.split('/')[2];

  // ダウンロードボタンを作成
  var downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download Project';
  downloadButton.onclick = function() {
      // URLを作成
      var url = 'https://forkphorus.github.io/sb-downloader/?id=' + projectId;

      // 新しいポップアップウィンドウを開く
      var popupWindow = window.open(url, '_blank', 'height=600,width=800');

      // ポップアップウィンドウがロードされたときにダウンロードが完了したと判断し、ウィンドウを閉じる
      popupWindow.onload = function() {
          popupWindow.close();
      };
  };

  // ダウンロードボタンをページに追加
  document.body.appendChild(downloadButton);
});

