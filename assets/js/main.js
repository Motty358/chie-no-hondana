/* ============================================================
   人生の知恵の本棚  main.js
   昼夜モード切替(☀↔☾) + localStorage保存
   ============================================================ */
(function() {
  'use strict';

  // 初期化:HTMLが読み込まれる前に、保存されているモードを反映
  // これによって「最初は昼で表示されてから夜に切り替わる」というチラつきを防ぐ
  var savedMode = localStorage.getItem('wisdom-mode') || 'day';
  document.documentElement.setAttribute('data-mode', savedMode);

  // DOMが読み込まれたら、ボタンをセットアップ
  document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.querySelector('.mode-toggle');
    if (!toggleBtn) return;

    // ボタンの見た目を現在のモードに合わせる
    function updateBtnLook() {
      var mode = document.documentElement.getAttribute('data-mode');
      if (mode === 'night') {
        toggleBtn.textContent = '☾';
        toggleBtn.title = '昼モードに切り替え';
      } else {
        toggleBtn.textContent = '☀';
        toggleBtn.title = '夜モードに切り替え';
      }
    }

    updateBtnLook();

    // ボタンクリックでモード切替
    toggleBtn.addEventListener('click', function() {
      var currentMode = document.documentElement.getAttribute('data-mode');
      var newMode = (currentMode === 'night') ? 'day' : 'night';
      document.documentElement.setAttribute('data-mode', newMode);
      localStorage.setItem('wisdom-mode', newMode);
      updateBtnLook();
    });
  });
})();
