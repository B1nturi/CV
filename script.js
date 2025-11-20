document.getElementById("downloadBtn").addEventListener("click", function () {
    // Replace with your actual PDF file name
    const fileUrl = "./Resume of Jubayer Alam Likhon.pdf"; 
    
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "./Resume of Jubayer Alam Likhon.pdf";
    link.click();
});
