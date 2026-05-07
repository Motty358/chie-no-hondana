/* ==========================================================
   人生の知恵の本棚  共通スクリプト(main.js)
   ----------------------------------------------------------
   フェーズ1の役割:
     1. ページ内リンク(#)を滑らかにスクロール
     2. 葉っぱのアニメーション(CSSのみ)
     3. 切替ボタン(現状は仮、フェーズ2で夜モード切替に拡張)
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ----- 1. スムーズスクロール -----
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

  // ----- 2. 切替ボタン(フェーズ1では仮、フェーズ2で夜モード切替) -----
  var modeToggle = document.querySelector('.mode-toggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', function () {
      // フェーズ2で実装予定
      alert('夜モードは現在準備中です。\nもう少しで切替できるようになります 🌙');
    });
  }

});
