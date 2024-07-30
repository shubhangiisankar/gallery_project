document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeButton = document.getElementById('close');
    const prevButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

    let currentIndex = 0;
    let zoomLevel = 1;

    // Click event for gallery images
    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            openFullscreen(index);
        });
    });

    // Click event for the Close button
    closeButton.addEventListener('click', function() {
        closeFullscreen();
    });

    // Click event for the Previous button
    prevButton.addEventListener('click', function() {
        showImage(currentIndex - 1);
    });

    // Click event for the Next button
    nextButton.addEventListener('click', function() {
        showImage(currentIndex + 1);
    });

    // Click event for Zoom In button
    zoomInButton.addEventListener('click', function() {
        zoomLevel += 0.1;
        updateZoom();
    });

    // Click event for Zoom Out button
    zoomOutButton.addEventListener('click', function() {
        zoomLevel = Math.max(0.1, zoomLevel - 0.1);
        updateZoom();
    });

    // Function to open fullscreen mode
    function openFullscreen(index) {
        currentIndex = index;
        showImage(index);
        fullscreenContainer.style.display = 'flex';
    }

    // Function to close fullscreen mode
    function closeFullscreen() {
        fullscreenContainer.style.display = 'none';
    }

    // Function to show image based on index
    function showImage(index) {
        if (index < 0 || index >= images.length) return;
        currentIndex = index;
        fullscreenImage.src = images[index].src;
        zoomLevel = 1; // Reset zoom level when changing image
        updateZoom(); // Apply reset zoom
    }

    // Function to update zoom level of the fullscreen image
    function updateZoom() {
        fullscreenImage.style.transform = `scale(${zoomLevel})`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeButton = document.getElementById('close');
    const prevButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const zoomRange = document.getElementById('zoom-range');

    let currentIndex = 0;
    let zoomLevel = 1;

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            openFullscreen(index);
        });
    });

    closeButton.addEventListener('click', function() {
        closeFullscreen();
    });

    prevButton.addEventListener('click', function() {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showImage(currentIndex + 1);
    });

    zoomInButton.addEventListener('click', function() {
        zoomLevel = Math.min(3, zoomLevel + 0.1);
        updateZoom();
    });

    zoomOutButton.addEventListener('click', function() {
        zoomLevel = Math.max(0.1, zoomLevel - 0.1);
        updateZoom();
    });

    zoomRange.addEventListener('input', function() {
        zoomLevel = parseFloat(this.value);
        updateZoom();
    });

    function openFullscreen(index) {
        currentIndex = index;
        showImage(index);
        fullscreenContainer.style.display = 'flex';
    }

    function closeFullscreen() {
        fullscreenContainer.style.display = 'none';
    }

    function showImage(index) {
        if (index < 0 || index >= images.length) return;
        currentIndex = index;
        fullscreenImage.src = images[index].src;
        updateZoom();
    }

    function updateZoom() {
        fullscreenImage.style.transform = `scale(${zoomLevel})`;
        zoomRange.value = zoomLevel;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeButton = document.getElementById('close');
    const prevButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const zoomRange = document.getElementById('zoom-range');

    let currentIndex = 0;
    let zoomLevel = 1;

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            openFullscreen(index);
        });
    });

    closeButton.addEventListener('click', function() {
        closeFullscreen();
    });

    prevButton.addEventListener('click', function() {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showImage(currentIndex + 1);
    });

    zoomInButton.addEventListener('click', function() {
        zoomLevel += 0.1;
        updateZoom();
    });

    zoomOutButton.addEventListener('click', function() {
        zoomLevel = Math.max(0.1, zoomLevel - 0.1);
        updateZoom();
    });

    zoomRange.addEventListener('input', function() {
        zoomLevel = parseFloat(this.value);
        updateZoom();
    });

    function openFullscreen(index) {
        currentIndex = index;
        showImage(index);
        fullscreenContainer.style.display = 'flex';
        updateZoom(); // Initialize zoom level
    }

    function closeFullscreen() {
        fullscreenContainer.style.display = 'none';
    }

    function showImage(index) {
        if (index < 0 || index >= images.length) return;
        currentIndex = index;
        fullscreenImage.src = images[index].src;
    }

    function updateZoom() {
        fullscreenImage.style.transform = `scale(${zoomLevel})`;
        zoomRange.value = zoomLevel;
        
        // Adjust the position of controls based on zoom level
        const offset = (zoomLevel - 1) * 100; // Adjust this factor as needed
        const controls = document.querySelector('.fullscreen-controls');
        controls.style.transform = `translate(-50%, -50%) translateY(${offset}px)`;
    }
});
