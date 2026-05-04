/* ==========================================================
   人生の知恵の本棚  共通スクリプト(main.js)
   ----------------------------------------------------------
   このファイルでは、サイトに「ちょっとした動き」をつけています。
   主な役割:
     1. PDFリンクは普通にクリックすれば開く(余計なチェックはしない)
     2. リンク先が無い場合に備えて、エラーが出てもサイトが
        止まらないようにする
     3. カテゴリーカードをクリックすると、その本棚まで
        やわらかくスクロールする
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ----- 1. カテゴリーカードのスムーズスクロール -----
  // ページ内リンク(#で始まるリンク)をクリックした時、
  // 滑らかにスクロールするようにする
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

  // ----- 2. PDFリンクの安全装置 -----
  // PDFリンクには target="_blank" がついているので、新しいタブで開きます。
  // もしファイルが無い場合は、ブラウザが「ファイルが見つかりません」と
  // 表示しますが、サイト本体は壊れません。
  // ※以前は事前にファイル存在確認をしていましたが、
  //   サーバー環境によって動作が不安定だったので削除しました。
  //   普通のリンクとして動く方が確実です。

});
