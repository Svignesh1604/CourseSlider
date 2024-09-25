function showCourses(categoryId) {
    const categories = document.querySelectorAll('.course-content');
    categories.forEach(category => {
        category.style.display = 'none';
    });

    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'grid';
    }
}

        //     const slider = document.getElementById('robotic');
        //     const prevBtn = document.querySelector('.prev-btn');
        //     const nextBtn = document.querySelector('.next-btn');

        //     let currentPosition = 0;

        //     nextBtn.addEventListener('click', () => {
        //         const cardWidth = document.querySelector('.course-card').offsetWidth + 20; 
        //         const visibleWidth = slider.offsetWidth; 
        //         const totalWidth = slider.scrollWidth; 

        //         currentPosition -= cardWidth;

        //         if (Math.abs(currentPosition) + visibleWidth >= totalWidth) {
        //             currentPosition = -(totalWidth - visibleWidth); 
        //         }

        //         slider.style.transform = `translateX(${currentPosition}px)`;
        //     });

        //     prevBtn.addEventListener('click', () => {
        //         const cardWidth = document.querySelector('.course-card').offsetWidth + 20;
        //         currentPosition += cardWidth;

        //         if (currentPosition > 0) {
        //             currentPosition = 0; 
        //         }

        //         slider.style.transform = `translateX(${currentPosition}px)`;
        //     });


        //     programmingNextBtn.addEventListener('click', () => {
        //         console.log('Next button clicked');
               
        //     });
            
        //     programmingPrevBtn.addEventListener('click', () => {
        //         console.log('Prev button clicked'); 
               
        //     });

        //     const cardWidth = document.querySelector('#programming .course-card').offsetWidth + 20;
        //     console.log(`Card width: ${cardWidth}`);

            



        //     const programmingSlider = document.getElementById('programming');
        //     const preBtn = document.querySelector('.pre-btn');
        //     const nxtBtn = document.querySelector(' .next-btn');

        //     let programmingPosition = 0;

        //     nxtBtn.addEventListener('click', () => {
        //     const cardWidth = document.querySelector(' .course-card').offsetWidth + 20; 
        //     const visibleWidth = programmingSlider.offsetWidth; 
        //     const totalWidth = programmingSlider.scrollWidth;
    
        //     programmingPosition -= cardWidth;
        //     console.log('Nxt clicked, current position:', programmingPosition); 

        //    if (Math.abs(programmingPosition) + visibleWidth >= totalWidth) {
        //       programmingPosition = -(totalWidth - visibleWidth);
        //     }

        //      programmingSlider.style.transform = `translateX(${programmingPosition}px)`;
        //      });

        //     programmingpreBtn.addEventListener('click', () => {
        //     const cardWidth = document.querySelector(' .course-card').offsetWidth + 20;
        //     programmingPosition += cardWidth;
        //     console.log('Pre clicked, current position:', programmingPosition); 

    
        //     if (programmingPosition > 0) {
        //        programmingPosition = 0;
        //     }

        //       programmingSlider.style.transform = `translateX(${programmingPosition}px)`;
        //      });
