// function copyToClipboard(element) {
//     const text = element.parentElement.querySelector('div').innerText;
//     navigator.clipboard.writeText(text).then(() => {
//         showCopyMessage();
//     }).catch(err => {
//         console.error('Failed to copy text: ', err);
//     });
// }

// function showCopyMessage (){
//     document.getElementById('text-to-copy').addEventListener('click', function() {
//         const textToCopy = this.textContent;
//         navigator.clipboard.writeText(textToCopy).then(() => {
//             // Update the message text with copied content
//             document.getElementById('copied-text').textContent = textToCopy;
            
//             // Show the copy message
//             const copyMessage = document.getElementById('copy-message');
//             copyMessage.classList.remove('hidden');
    
//             // Hide the message after 3 seconds
//             setTimeout(() => {
//                 copyMessage.classList.add('hidden');
//             }, 3000);
//         }).catch(err => console.error('Failed to copy text:', err));
//     });
// }

// // function showCopyMessage() {
// //     const message = document.getElementById("copy-message");
// //     message.classList.add("show");
// //     message.classList.remove("hidden");

// //     setTimeout(() => {
// //         message.classList.remove("show");
// //         setTimeout(() => message.classList.add("hidden"), 500);
// //     }, 2000); // Message disappears after 2 seconds
// // }
// function toggleCheck(selected) {
//     document.querySelectorAll('.region-option').forEach(option => {
//         option.querySelector('img')?.remove();
//     });
    
//     const checkDiv = selected.querySelector('.check-container');
//     const img = document.createElement('img');
//     img.src = "./image/check.png";
//     img.alt = "checked";
//     img.classList.add("w-full", "h-full");
    
//     checkDiv.appendChild(img);
// }


