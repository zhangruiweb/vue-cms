(function (doc, win) {
    var flex = function () {
        var docEl = doc.documentElement
        var deviceWidth = docEl.clientWidth > 500 ? 500 : docEl.clientWidth
        docEl.style.fontSize = deviceWidth / 7.5 + 'px'
    }
    flex()
    win.addEventListener('resize', flex, false)
})(document, window)
