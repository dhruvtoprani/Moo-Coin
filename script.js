let count = 0;
let globalCount = 0;

// Change Counter Value
function changeCounter(value) {
    count += value;
    document.getElementById('counter').innerText = count;

    globalCount += value;
    document.getElementById('global-counter').innerText = globalCount;
}

// Show Pop-up
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Hide Pop-up
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Generate More Floating Cows
function generateFloatingCows() {
    const floatingCows = document.getElementById("floating-cows");
    
    for (let i = 0; i < 20; i++) {
        let cow = document.createElement("span");
        cow.classList.add("floating-cow");
        cow.innerText = "🐄";
        cow.style.left = `${Math.random() * 100}%`;
        cow.style.animationDuration = `${Math.random() * 15 + 5}s`;
        floatingCows.appendChild(cow);
    }
}

generateFloatingCows();



// MooCoin Simple Value Function
function calculateMooCoin(globalCount) {
    return Math.abs(globalCount) ** 0.5;
}

// Change Counter Value
function changeCounter(value) {
    count += value;
    globalCount += value;

    document.getElementById('counter').innerText = count;
    document.getElementById('global-counter').innerText = globalCount;
    document.getElementById('moo-value').innerText = calculateMooCoin(globalCount).toFixed(2);
}

// Show Pop-up on Page Load
window.onload = function() {
    document.getElementById('popup').style.display = 'block';
};

// Hide Pop-up
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

