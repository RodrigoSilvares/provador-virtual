document.getElementById("uploadImage").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("finalImage").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});