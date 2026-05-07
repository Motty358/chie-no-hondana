/* ==========================================================
   人生の知恵の本棚  共通スクリプト(main.js)  v2 夜モード対応版
   ----------------------------------------------------------
   役割:
     1. ページ内リンク(#)を滑らかにスクロール
     2. 昼夜モードの切替(☀ / 🌙)
     3. ユーザーの選択を覚えておく(同じパソコン・スマホ内で)
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ----- 1. 保存されたモードを復元 -----
  // 前回ユーザーが選んだモードを覚えておいて、再読み込み時に復元します
  var savedMode = localStorage.getItem('chie-mode') || 'day';
  document.documentElement.setAttribute('data-mode', savedMode);
  updateToggleIcon(savedMode);

  // ----- 2. 切替ボタンの動作 -----
  var modeToggle = document.querySelector('.mode-toggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', function () {
      var currentMode = document.documentElement.getAttribute('data-mode') || 'day';
      var newMode = currentMode === 'day' ? 'night' : 'day';

      // モードを切り替え
      document.documentElement.setAttribute('data-mode', newMode);

      // アイコンを更新
      updateToggleIcon(newMode);

      // ユーザーの選択を保存(次回も同じモードで開ける)
      try {
        localStorage.setItem('chie-mode', newMode);
      } catch (e) {
        // プライベートブラウジングなどで保存できない場合は無視
      }
    });
  }

  // ----- 3. 切替ボタンのアイコン更新 -----
  function updateToggleIcon(mode) {
    if (!modeToggle) return;
    if (mode === 'night') {
      modeToggle.textContent = '☾';  // 月
      modeToggle.title = '昼モードに切替';
    } else {
      modeToggle.textContent = '☀';  // 太陽
      modeToggle.title = '夜モードに切替';
    }
  }

  // ----- 4. スムーズスクロール -----
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});
