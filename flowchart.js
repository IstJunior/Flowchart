document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand-button");
    
    expandButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const nodeContent = this.nextElementSibling;
            if (nodeContent.style.display === "none" || nodeContent.style.display === "") {
                nodeContent.style.display = "block";
                this.innerText = "Collapse";
            } else {
                nodeContent.style.display = "none";
                this.innerText = "Expand";
            }
        });
    });
});
