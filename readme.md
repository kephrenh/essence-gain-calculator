Here’s the updated README without including the **Experience Gain** section:

---

# Combat Power & Essence Gain Calculator

## Description

This web-based **Combat Power & Essence Gain Calculator** allows users to calculate **Combat Power** based on **level** or **essence points**. Additionally, it provides a way to calculate **Essence Gain** when the Combat Power increases over a specified range.

The calculator is designed for users who want to quickly compute **Combat Power** and **Essence Gain** values based on their character’s level and essence points.

## Features

- **Calculate Combat Power**: Based on level or essence points.
- **Calculate Essence Gain**: Based on the change in Combat Power.
- **Interactive UI**: A user-friendly interface that allows you to choose the calculation type (Combat Power or Essence Gain) and input the necessary values.

## Usage

1. **Select Calculation Type**: Choose between **Calculate Combat Power** or **Calculate Essence Gain** from the dropdown menu.
2. **Enter Values**:
   - For **Combat Power**:
     - Input **Level** or **Essence Points** to calculate the Combat Power.
       - Combat Power is calculated as:
         - If **Level** is provided: `Combat Power = (Level)^2 * 100`
         - If **Essence Points** are provided: `Combat Power = sqrt(Essence Points) * 100`
   - For **Essence Gain**:
     - Input **Start Combat Power** and **End Combat Power** to calculate the **Essence Gain** as:
       - `Essence Gain = (End Combat Power - Start Combat Power) * 0.01`
3. **Click the "Calculate" Button**: After entering the required values, click the "Calculate" button to view the result.

## Example Usage

1. **Calculate Combat Power**:

   - **Level = 10**: The calculated Combat Power will be `10^2 * 100 = 1000`.
   - **Essence Points = 500**: The calculated Combat Power will be `sqrt(500) * 100 ≈ 707`.

2. **Calculate Essence Gain**:
   - **Start Combat Power = 1000** and **End Combat Power = 5000**: The calculated Essence Gain will be `(5000 - 1000) * 0.01 = 40`.

## Installation

### Local Setup

1. **Download the repository**: Clone or download the repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/combat-power-essence-calculator.git
   ```

2. **Open the project**: Open the `index.html` file in your preferred browser.

3. **Run the app**: No server setup is needed. Simply open `index.html` in any modern browser.

## Files

- `index.html`: The HTML structure of the calculator.
- `styles.css`: The CSS styling for the calculator.
- `script.js`: The JavaScript file that handles the logic for calculating Combat Power and Essence Gain.

## Technologies Used

- **HTML5** for the structure.
- **CSS3** for styling.
- **JavaScript** for logic and interactivity.

## License

This project is licensed under the MIT License.

---

This version of the README omits the **Experience Gain** section, as requested.
