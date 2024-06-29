function removeComments() {
    const codeInput = document.getElementById('codeInput').value;
    const codeOutput = document.getElementById('codeOutput');

    // Regular expression to match single-line and multi-line comments
    // const commentRegex = /(?=["'])(?:"[^"\\]*(?:\\[\s\S][^"\\]*)*"|'[^'\\]*(?:\\[\s\S][^'\\]*)*')|(#.*$)/gm;

    // Remove comments from the code
    const cleanedCode = codeInput// Remove multi-line comments
  .replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, '')
  // Remove single-line comments
  .replace(/#.*/g, '');

    // Display the cleaned code
    codeOutput.textContent = cleanedCode;
}

// Function to copy content of codeOutput
function copyCode() {
    const codeOutput = document.getElementById('codeOutput');
    
    // Create a temporary textarea to facilitate copying
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = codeOutput.innerText;
    document.body.appendChild(tempTextArea);
    
    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */
    
    // Copy the selected text to clipboard
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
    
    // Optionally, provide user feedback
    alert('Code copied to clipboard!');
}
