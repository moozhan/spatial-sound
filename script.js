document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(function (section) {
        section.addEventListener('click', function () {
            if (!section.classList.contains('enlarged')) {
                section.classList.add('enlarged');
                sections.forEach(function (s) {
                    if (s !== section) {
                        s.style.display = 'none';
                    }
                });
                const content = section.querySelector('.main-content');
                content.style.display = 'block';
                const summary = section.querySelector('.summary');
                summary.style.display = 'none';
                section.style.pointerEvents = 'none';

                const closeButton = document.createElement('span');
                closeButton.className = 'close-button';
                closeButton.innerHTML = '&#10005;';
                closeButton.style.pointerEvents = 'auto';

                closeButton.addEventListener('click', function (event) {
                    event.stopPropagation(); // Prevent click event from triggering on the section
                    section.classList.remove('enlarged');
                    sections.forEach(function (s) {
                        s.style.display = 'flex';
                    });
                    section.removeChild(closeButton);
                    summary.style.display = 'block';
                    content.style.display = 'none';
                    section.style.pointerEvents = 'auto';
                });

                section.appendChild(closeButton);
            } else {
                section.classList.remove('enlarged');
                sections.forEach(function (s) {
                    s.style.display = 'flex';
                });
                const closeButton = section.querySelector('.close-button');
                section.removeChild(closeButton);
            }
        });
    });
});

