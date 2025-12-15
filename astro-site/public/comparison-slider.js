document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.comparison-container');

    sliders.forEach(slider => {
        const afterImage = slider.querySelector('.end-image');
        const handle = slider.querySelector('.slider-handle');

        if (!afterImage || !handle) return;

        // Initialize at 50%
        updateSlider(slider, 50);

        // MOUSE EVENTS (Desktop - Hover)
        slider.addEventListener('mousemove', (e) => {
            handleMove(e, slider);
        });

        slider.addEventListener('mouseleave', () => {
            // Optional: Return to 50% on leave, or stay. 
            // Currently staying where it left is standard behavior.
        });

        // TOUCH EVENTS (Mobile - Drag)
        // Touch still needs drag mechanics because there is no 'hover'
        let isTouching = false;

        slider.addEventListener('touchstart', (e) => {
            isTouching = true;
            handleMove(e.touches[0], slider); // Jump to touch immediately
        });

        window.addEventListener('touchend', () => isTouching = false);

        slider.addEventListener('touchmove', (e) => {
            if (!isTouching) return;
            // Prevent scrolling page while sliding
            // e.preventDefault(); 
            handleMove(e.touches[0], slider);
        });

        function handleMove(e, container) {
            // Use requestAnimationFrame to avoid forced reflows
            window.requestAnimationFrame(() => {
                const rect = container.getBoundingClientRect();
                let x = e.clientX - rect.left;

                // Constrain
                if (x < 0) x = 0;
                if (x > rect.width) x = rect.width;

                const percentage = (x / rect.width) * 100;
                updateSlider(container, percentage);
            });
        }

        function updateSlider(container, percentage) {
            const endImage = container.querySelector('.end-image');
            const handle = container.querySelector('.slider-handle');

            endImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            handle.style.left = `${percentage}%`;
        }
    });
});
