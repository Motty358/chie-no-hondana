/* ==========================================================
   人生の知恵の本棚  共通スクリプト(main.js)
   ----------------------------------------------------------
   このファイルでは、サイトに「ちょっとした動き」をつけています。
   主な役割:
     1. PDFリンクをクリックした時、ファイルが見つからなければ
        「準備中です」と知らせる(サイトが崩れないようにする)
     2. カテゴリーカードをクリックすると、その本棚まで
        やわらかくスクロールする
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ----- 1. PDFリンクの存在チェック -----
  // 「PDFを見る」ボタン(.btn-secondary で .pdf を指すリンク)を全て取得
  var pdfLinks = document.querySelectorAll('a[href$=".pdf"]');

  pdfLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      // リンク先のPDFが存在するか先に確認(HEADリクエスト)
      // 存在しない場合はメッセージを表示してページ移動を止める
      var url = link.getAttribute('href');

      // fetchでファイルの存在を確認
      fetch(url, { method: 'HEAD' })
        .then(function (response) {
          if (!response.ok) {
            // 404などの場合
            event.preventDefault();
            alert('このPDFはまだ準備中です。もう少しお待ちください。');
          }
          // OKの時はそのままPDFを開く(何もしなくてよい)
        })
        .catch(function () {
          // ネットワークエラーなどの場合も同様にメッセージ
          event.preventDefault();
          alert('このPDFはまだ準備中です。もう少しお待ちください。');
        });

      // fetchの結果が返ってくる前にページ遷移しないよう、いったん止める
      event.preventDefault();
    });
  });

  // ----- 2. カテゴリーカードのスムーズスクロール -----
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

});
