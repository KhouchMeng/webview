function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard:', text);
            showCopyConfirmation();
        })
        .catch(err => {
            console.error('Failed to copy text:', err);
        });
}
function showCopyConfirmation() {
    const confirmation = document.getElementById('copy-confirmation');      
    confirmation.style.display = 'block'; // Show the confirmation message
    setTimeout(() => {
        confirmation.style.display = 'none'; // Hide the confirmation message after 1.5 seconds
    }, 1500);
}