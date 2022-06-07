const storyButtons = document.querySelectorAll('.story-btn');
const stories = document.querySelectorAll('.story');

//Story buttons functionality
storyButtons.forEach((storyButton) => {
    storyButton.addEventListener('click', () => {
        storyButton.classList.toggle('change');
        storyButton.nextElementSibling.classList.toggle('change');
    });
});