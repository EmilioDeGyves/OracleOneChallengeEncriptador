//código Hecho Por Emilio De Gyves García

function encrypt(text) {
    let replacedText = text.replace(/e/g, 'enter');
    replacedText = replacedText.replace(/i/g, 'imes');
    replacedText = replacedText.replace(/a/g, 'ai');
    replacedText = replacedText.replace(/o/g, 'ober');
    replacedText = replacedText.replace(/u/g, 'ufat');
    return replacedText;
}

function unEncrypt(text) {
    let replacedText = text.replace(/enter/g, 'e');
    replacedText = replacedText.replace(/imes/g, 'i');
    replacedText = replacedText.replace(/ai/g, 'a');
    replacedText = replacedText.replace(/ober/g, 'o');
    replacedText = replacedText.replace(/ufat/g, 'u');
    
    return replacedText;
}

function encryptText() {
    if(document.getElementById('texto').value !== '') {
        let text = document.getElementById('texto').value;
        let encryptedText = encrypt(text);
        document.getElementById('mensaje').innerHTML = encryptedText;
        
        if(document.querySelector('.sinOutput').classList.contains('--active')){
            document.querySelector('.sinOutput').classList.remove('--active');
            document.querySelector('.conOutput').classList.add('--active');
        }
    }
}

function unEncryptText() {
    if(document.getElementById('texto').value !== '') {
        let text = document.getElementById('texto').value;
        let encryptedText = unEncrypt(text);
        document.getElementById('mensaje').innerHTML = encryptedText;
        
        if(document.querySelector('.sinOutput').classList.contains('--active')){
            document.querySelector('.sinOutput').classList.remove('--active');
            document.querySelector('.conOutput').classList.add('--active');
        }
    }
}

function copiarTexto() {
    var elemento = document.getElementById("mensaje");
    var areaDeTextoTemporal = document.createElement("textarea");
    areaDeTextoTemporal.value = elemento.textContent;
    document.body.appendChild(areaDeTextoTemporal);
    areaDeTextoTemporal.select();
    areaDeTextoTemporal.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    document.body.removeChild(areaDeTextoTemporal);
}
