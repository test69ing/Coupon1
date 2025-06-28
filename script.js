const validCodes = ["SILVER01TEST"];
const password = "PA1STCO";
const steps = ["10% Discount", "15% Discount", "20% Discount", "25% Discount", "30% Discount"];
let currentStep = 0;

function validateCode() {
  const inputCode = document.getElementById("codeInput").value.trim();
  const errorBox = document.getElementById("errorBox");
  if (validCodes.includes(inputCode)) {
    localStorage.setItem("silverCode", inputCode);
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("couponBox").style.display = "block";
    document.getElementById("showCode").textContent = inputCode;
    renderSteps();
  } else {
    errorBox.textContent = "Invalid or expired coupon code!";
  }
}

function renderSteps() {
  const container = document.getElementById("couponSteps");
  container.innerHTML = "";
  steps.forEach((label, index) => {
    const stepDiv = document.createElement("div");
    stepDiv.className = "step";
    if (index < currentStep) {
      stepDiv.classList.add("used");
      stepDiv.textContent = `✅ ${label} — Used`;
    } else if (index === currentStep) {
      stepDiv.classList.add("active");
      stepDiv.innerHTML = `🔓 ${label} — <button class="btn-apply" onclick="applyStep()">Apply</button>`;
    } else {
      stepDiv.classList.add("locked");
      stepDiv.textContent = `🔒 ${label}`;
    }
    container.appendChild(stepDiv);
  });
  if (currentStep >= steps.length) {
    document.getElementById("finalMessage").style.display = "block";
  }
}

function applyStep() {
  const input = prompt("Enter seller password to apply:");
  if (input === password) {
    currentStep++;
    renderSteps();
  } else {
    alert("Incorrect password!");
  }
}

window.onload = () => {
  const savedCode = localStorage.getItem("silverCode");
  if (savedCode) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("couponBox").style.display = "block";
    document.getElementById("showCode").textContent = savedCode;
    renderSteps();
  }
};