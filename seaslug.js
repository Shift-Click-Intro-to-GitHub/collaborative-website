document.addEventListener("DOMContentLoaded", function () {

    // Function to open the modal with an image
    function openModal(imageSrc) {
        const modal = document.getElementById('myModal');
        const modalImage = document.getElementById('modalImage');
    
        modal.style.display = "block";
        modalImage.src = imageSrc;
    }
    
    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
    
    // Add a click event listener to each image element
    const mediaElements = document.querySelectorAll(".media-element img");
    mediaElements.forEach((element) => {
        element.addEventListener("click", () => {
            openModal(element.src);
        });
    });
    
    // Add a click event listener to the close button
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener("click", () => {
        closeModal();
    });
    
    });