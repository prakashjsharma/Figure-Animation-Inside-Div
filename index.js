const figure = document.getElementById('widget-demo');
let step = 1;

function updateClass() {
    // Remove the current step class
    figure.classList.remove(`step_${step}`);

    // Increment the step
    step = (step % 9) + 1;  // Cycle from 1 to 7

    // Add the new step class
    figure.classList.add(`step_${step}`);

    // Update the text inside the figure (optional, for demonstration)
    //figure.textContent = `step_${step}`;
}

// Set interval to call updateClass every 2 seconds
setInterval(updateClass, 2000);