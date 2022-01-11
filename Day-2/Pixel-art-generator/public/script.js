const image_drop_area = document.querySelector("#image_drop_area");
var uploaded_image;

toRemove = image_drop_area.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    event.dataTransfer.dropEffect = 'copy';
});

toRemove2 = image_drop_area.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    fileList = event.dataTransfer.files;

    readImage(fileList[0]);
});

readImage = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        uploaded_image = event.target.result;
        document.querySelector("#real").src = uploaded_image;
        document.querySelector("#real").height = "400";
        document.querySelector("#real").width = "400";
        removeAllListeners();
    });
    reader.readAsDataURL(file);
}

function removeAllListeners() {
    //remove event listener toRemove and toRemove2
    image_drop_area.removeEventListener('dragover', toRemove);
    image_drop_area.removeEventListener('drop', toRemove2);
}