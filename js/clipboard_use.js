/*页面载入完成后，创建复制按钮*/
!(function (e, t, a) {
  /* code */
  var initCopyCode = function () {
    var copyHtml = "";
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
    copyHtml += "</button>";
    $(".highlight .code").before(copyHtml);
    var clipboard = new ClipboardJS(".btn-copy", {
      target: function (trigger) {
        return trigger.nextElementSibling;
      },
    });
    clipboard.on("success", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);

      e.clearSelection();
    });

    clipboard.on("error", function (e) {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
  };
  initCopyCode();
})(window, document);
