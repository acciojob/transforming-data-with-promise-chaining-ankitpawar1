//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
  const input = document.getElementById('ip');
  const output = document.getElementById('output');

  // Helper function to return a promise that resolves after a given time
  function resolveAfterDelay(value, delay) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
  }

  let result;

  // Step 1: Resolve with the input value after 2 seconds
  resolveAfterDelay(Number(input.value), 2000)
    .then(number => {
      result = number;
      output.textContent = `Result: ${number}`;
      return resolveAfterDelay(number, 2000);
    })
    // Step 2: Multiply the number by 2 after 1 second
    .then(number => {
      result = number * 2;
      output.textContent = `Result: ${result}`;
      return resolveAfterDelay(result, 1000);
    })
    // Step 3: Subtract 3 from the number after 1 second
    .then(number => {
      result = number - 3;
      output.textContent = `Result: ${result}`;
      return resolveAfterDelay(result, 1000);
    })
    // Step 4: Divide the number by 2 after 1 second
    .then(number => {
      result = number / 2;
      output.textContent = `Result: ${result}`;
      return resolveAfterDelay(result, 1000);
    })
    // Step 5: Add 10 to the number after 1 second
    .then(number => {
      result = number + 10;
      output.textContent = `Result: ${result}`;
      return resolveAfterDelay(result, 1000);
    })
    // Final Result
    .then(number => {
      output.textContent = `Final Result: ${number}`;
    })
    .catch(error => {
      console.error('Promise chain failed', error);
      output.textContent = `An error occurred: ${error}`;
    });
});