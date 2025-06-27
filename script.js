const fixedCode = "SILVER2025";
const discounts = [10, 15, 20, 25, 35];
let currentStep = 0;

document.getElementById("loginBtn").addEventListener("click", () => {
  const code = document.getElementById("uniqueCode").value;
  if (code === fixedCode) {
    document.getElementById("couponSection").style.display = "block";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("uniqueCode").style.display = "none";
  } else {
    alert("Wrong code!");
  }
});

document.getElementById("applyBtn").addEventListener("click", () => {
  const pass = prompt("Enter password:");
  if (pass === "1235") {
    currentStep++;
    if (currentStep < discounts.length) {
      document.getElementById("discountDisplay").innerText = `Discount: ${discounts[currentStep]}%`;
      document.getElementById("message").innerText = `Applied: ${discounts[currentStep - 1]}%`;
    }
    if (currentStep === discounts.length - 1) {
      document.getElementById("message").innerText = "🎉 You got a GOLD coupon!";
      document.getElementById("applyBtn").disabled = true;
    }
  } else {
    alert("Wrong password");
  }
});
