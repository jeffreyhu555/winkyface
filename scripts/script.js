function insertAtCursor(myField, myValue) {
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
    }
};

$('textarea').bind('keydown',function (e) {
    var $t = $(this);
    if (e.which==8){
    insertAtCursor(this, ';) ');
    } else if (e.which==46){
    insertAtCursor(this, ';)');
    }
});

$('input').bind('keydown',function (e) {
    var $t = $(this);
    if (e.which==8){
    insertAtCursor(this, ';) ');
    } else if (e.which==46){
    insertAtCursor(this, ';)');
    }
});
//div functionality
function pasteTextAtCaret(text) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            var textNode = document.createTextNode(text);
            range.insertNode(textNode);

            // Preserve the selection
            range = range.cloneRange();
            range.setStartAfter(textNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().text = text;
    }
}

$('div[contenteditable]').bind('keydown',function (e) {
    if (e.which==8){
    pasteTextAtCaret(";) ");   
    } else if (e.which==46){
    pasteTextAtCaret(";)");
    }
});


// delete key = 46
//Popupbox method
//window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+0008'||e.keyIdentifier=='Backspace'){window.alert("this is a string")}},true);

