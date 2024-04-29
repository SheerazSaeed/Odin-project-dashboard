document.addEventListener('DOMContentLoaded', () => {
    const setupButton = (buttonClass, url) => {
        const button = document.querySelector(buttonClass);
        if (button) {
            button.addEventListener('click', () => window.location.href = url);
        }
    };

    setupButton('.js-recipesPreview', 'https://htmlpreview.github.io/?https://github.com/SheerazSaeed/1-Odin_project_recipes/blob/main/index.html');
    setupButton('.js-AmazonSC', 'https://github.com/SheerazSaeed/1-SS-Amazon-project');
    setupButton('.js-restaurantSC', 'https://github.com/SheerazSaeed/Odin-project-restaurant');
    setupButton('.js-restaurantPreview', 'https://htmlpreview.github.io/?https://github.com/SheerazSaeed/Odin-project-restaurant/blob/main/dist/index.html');
    setupButton('.js-libraryPreview', 'https://htmlpreview.github.io/?https://github.com/SheerazSaeed/8_Odin-project-library/blob/main/Index.html');
    setupButton('js-librarySC','https://github.com/SheerazSaeed/8_Odin-project-library');
});
