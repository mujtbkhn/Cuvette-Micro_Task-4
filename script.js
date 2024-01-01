const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const equals = document.getElementById('=');

buttons.forEach(button => button.addEventListener('click', () => {
    if (button.id === '=') {
        try {
            const lastChar = result.textContent.trim().slice(-1);
            const firstChar = result.textContent.trim().slice(0, 1);
            if (firstChar === '+' || firstChar === '*' || firstChar === '/') {
                alert("Please remove operand from the start for performing the action.");
                return
            }
            if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                alert("Please add a number at the end for performing the action.");
                return; // Exit the function if the check fails
            }

            const evalResult = eval(result.textContent)
            result.textContent = Math.round(evalResult * 1000) / 1000

        } catch (error) {
            result.textContent = 'Error';
        }
    } else if (button.id === 'reset') {
        result.textContent = ''
    } else if (button.id === 'del') {
        result.textContent = result.textContent.slice(0, -1)
    }
    else {

        result.textContent += button.textContent

    }

}))
