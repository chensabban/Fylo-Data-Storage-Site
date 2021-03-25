function uploadFile(){
    document.getElementById('file-input').click();
}

function onFileSelected(){
    let fileInput = document.getElementById('file-input');
    let totalSize=0;
    for (var i = 0; i < fileInput.files.length; i++) {
        totalSize += fileInput.files.item(i).size;
    }
    let remainingElement = document.getElementById('remaining_MB');
    let usedMemo = document.getElementById('total_MB');
    remainingElement.innerHTML = (1000 - totalSize/1024/1024).toFixed(2).toString();
    usedMemo.innerHTML = ` ${(totalSize/1024/1024).toFixed(2).toString()} MB `;
    let progressBar = document.getElementById('progress-precent');
    progressBar.style.width = `${totalSize/1024/1024/10}%`;
};