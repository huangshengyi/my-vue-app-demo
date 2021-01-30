export function getCursortPosition(e) {
    let pos = 0
    if (e.target.nodeName === 'DIV') {
        pos = getDivPosition(e.target)
    } else {
        pos = getPosition(e.target)
    }
    return pos
}

// 可编辑div获取坐标
const getDivPosition = function (element) {
    let caretOffset = 0
    let doc = element.ownerDocument || element.document
    let win = doc.defaultView || doc.parentWindow
    let sel

    if (typeof win.getSelection != 'undefined') { // 谷歌、火狐
        sel = win.getSelection()
        // 选中的区域
        if (sel.rangeCount > 0) {
            let range = win.getSelection().getRangeAt(0)
            // 克隆一个选中区域
            let preCaretRange = range.cloneRange()
            // 设置选中区域的节点内容为当前节点
            preCaretRange.selectNodeContents(element)
            // 重置选中区域的结束位置
            preCaretRange.setEnd(range.endContainer, range.endOffset)
            caretOffset = preCaretRange.toString().length
        }
    } else if ((sel = doc.selection) && sel.type != 'Control') { // IE
        let textRange = sel.createRange()
        let preCaretTextRange = doc.body.createTextRange()
            preCaretTextRange.moveToElementText(element)
            preCaretTextRange.setEndPoint('EndToEnd', textRange)
            caretOffset = preCaretTextRange.text.length
    }
    return caretOffset
}

// 输入框获取光标
const getPosition = function (element) {
    let cursorPos = 0
    // IE
    if (document.selection) {
        let selectRange = document.selection.createRange()
            selectRange.moveStart('character', -element.value.length)
            cursorPos = selectRange.text.length
    } else if (element.selectionStart || element.selectionStart == '0') {
        cursorPos = element.selectionStart
    }
    return cursorPos
}