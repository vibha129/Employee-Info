function fecth_Data(method,url) {
return new Promise((reslove,reject)=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            reslove(xhr.responseText);
        }
    }
    xhr.open(method, url, true);
    xhr.send(null);
}); 
}