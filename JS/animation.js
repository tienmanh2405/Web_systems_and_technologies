document.addEventListener("DOMContentLoaded", function () {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate__backInUp");
                        observer.unobserve(entry.target); // Ngừng quan sát sau khi đã thấy
                    }
                });
            });

            const elements = document.querySelectorAll(".card");

            elements.forEach(element => {
                observer.observe(element);
            });
        });