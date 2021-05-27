var dropRegion = document.getElementById("drop-region"),
    imagePreviewRegion = document.getElementById("empimg");

var fakeInput = document.createElement("input");
fakeInput.type = "file";
fakeInput.accept = "image/*";
fakeInput.multiple = false;
dropRegion.addEventListener('click', function() {
fakeInput.click();
});

fakeInput.addEventListener("change", function() {
var files = fakeInput.files;
handleFiles(files);
});
function preventDefault(e) {
e.preventDefault();
  e.stopPropagation();
}
dropRegion.addEventListener('dragenter', preventDefault, false)
dropRegion.addEventListener('dragleave', preventDefault, false)
dropRegion.addEventListener('dragover', preventDefault, false)
dropRegion.addEventListener('drop', preventDefault, false)


function handleDrop(e) {
var dt = e.dataTransfer,
    files = dt.files;
handleFiles(files)		
}

dropRegion.addEventListener('drop', handleDrop, false);

function handleFiles(files) {
for (var i = 0, len = files.length; i < len; i++) {
    if (validateImage(files[i]))
        previewImage(files[i]);
}
}
function validateImage(image) {
var validTypes = ['image/jpeg', 'image/png'];
var close = 0;
if (validTypes.indexOf( image.type ) === -1) {
    alert("Invalid File Type");
    close == 1;
    return false;
}

var maxSizeInBytes = 500000; // 500KB
if (image.size > maxSizeInBytes) {
    alert("File too large");
    close == 1;
    return false;
}

if(close == 0){
    closemodal();
}
return true;

}

function previewImage(image) {

var reader = new FileReader();
reader.onload = function(e) {
    imagePreviewRegion.src = e.target.result;
}
reader.readAsDataURL(image);

}

function closemodal(){
    $("#uploadimage").modal('hide');
}