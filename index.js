function calculateDays() {
    const today = new Date();
    const targetDate = new Date('2025-01-01'); 
    const timeDifference = targetDate - today; 
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
    document.getElementById('counter').innerText = `${daysRemaining} Days Remaining`;
    document.getElementById('counter').style.animation = "fadeIn 1s ease-in-out";
}
