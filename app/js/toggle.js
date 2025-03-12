function toggleCheck(selected) {
    document.querySelectorAll('.region-option').forEach(option => {
        option.querySelector('img')?.remove();
    });
    
    const checkDiv = selected.querySelector('.check-container');
    const img = document.createElement('img');
    img.src = "./image/check.png";
    img.alt = "checked";
    img.classList.add("w-full", "h-full");
    
    checkDiv.appendChild(img);
}
