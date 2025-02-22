
export const LGInputLogic = (id) => {
    const element = document.getElementById(id);

    if (element) {
        const trimmedValue = element.value.replace(/^[\s]+/, ''); // Remove leading spaces

        if (trimmedValue !== element.value) {
            element.value = trimmedValue; // Update the input value if it changed
        }
    } else {
        console.log(`Wait sucker, ${id} is loading...`);
    }
};
