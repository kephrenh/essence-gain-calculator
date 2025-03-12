// Toggle input fields based on selected calculation type
function toggleInputs() {
  const selectedCalculation = document.getElementById("calculationType").value;

  // Hide all input sections
  document.getElementById("combatPowerInputs").style.display = "none";
  document.getElementById("essenceGainInputs").style.display = "none";

  // Show the selected input section
  if (selectedCalculation === "combatPower") {
    document.getElementById("combatPowerInputs").style.display = "block";
  } else if (selectedCalculation === "essenceGain") {
    document.getElementById("essenceGainInputs").style.display = "block";
  }
}

// Function to calculate Combat Power from Level or Essence Points
function calculateCombatPower() {
  const level = parseInt(document.getElementById("level").value);
  const essencePoints = parseInt(document.getElementById("essencePoints").value);

  let combatPower = 0;

  // If Level is provided, calculate CP as Level² * 100
  if (!isNaN(level) && level > 0) {
    combatPower = Math.pow(level, 2) * 100;
  }
  // If Essence Points are provided, calculate CP based on Essence (sqrt(essencePoints) * 100)
  else if (!isNaN(essencePoints) && essencePoints > 0) {
    combatPower = Math.sqrt(essencePoints) * 100;
  }

  // Display the calculated Combat Power
  document.getElementById("combatPowerResult").textContent = combatPower;
}

// Function to calculate Essence Gain from Combat Power increase
function calculateEssenceGain() {
  const combatPowerStart = parseInt(document.getElementById("combatPowerStart").value);
  const combatPowerEnd = parseInt(document.getElementById("combatPowerEnd").value);

  // Validate input
  if (
    isNaN(combatPowerStart) ||
    isNaN(combatPowerEnd) ||
    combatPowerStart <= 0 ||
    combatPowerEnd <= 0 ||
    combatPowerStart >= combatPowerEnd
  ) {
    alert("Please enter valid Combat Power values (start < end)");
    return;
  }

  // Calculate Essence Gain as a fraction of the Combat Power difference
  const essenceGain = (combatPowerEnd - combatPowerStart) * 0.01;

  // Display the calculated Essence Gain
  document.getElementById("essenceGainResult").textContent = Math.round(essenceGain);
}

// Initial setup to hide inputs and show the first option
toggleInputs();
