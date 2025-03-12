function calculateEssence() {
  const combatPowerStart = parseInt(document.getElementById("combatPowerStart").value);
  const combatPowerEnd = parseInt(document.getElementById("combatPowerEnd").value);

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

  let essenceGain = 0;

  const thresholds = [
    { start: 10000, end: 50000, multiplier: 0.025 },
    { start: 50001, end: 100000, multiplier: 0.01 },
    { start: 100001, end: 300000, multiplier: 0.01 },
  ];

  let lastEnd = combatPowerStart;

  for (const threshold of thresholds) {
    if (combatPowerEnd <= threshold.start) break;

    let rangeStart = Math.max(lastEnd, threshold.start);
    let rangeEnd = Math.min(combatPowerEnd, threshold.end);

    if (rangeStart < rangeEnd) {
      let rangeDiff = rangeEnd - rangeStart;
      essenceGain += rangeDiff * threshold.multiplier;
    }

    lastEnd = threshold.end;
  }

  document.getElementById("essenceResult").textContent = Math.round(essenceGain);
}
