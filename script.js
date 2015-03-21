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
}

$('textarea').bind('keydown',function (e) {
    var $t = $(this);
    if (e.which==8){
    insertAtCursor(this, ';) ');
    }
    if (e.which==46){
    insertAtCursor(this, ' ;)');
    }
});

$('input').bind('keydown',function (e) {
    var $t = $(this);
    if(e.which==8){
    insertAtCursor(this, ';) ');
    }
    if (e.which==46){
    insertAtCursor(this, ' ;)');
    }
});