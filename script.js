document.getElementById("downloadBtn").addEventListener("click", function () {
    // Replace with your actual PDF file name
    const fileUrl = "cv.pdf"; 
    
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Jubayer-CV.pdf";
    link.click();
});
