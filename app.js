"use strict";
// Enum із трьома кольорами
var PageColor;
(function (PageColor) {
    PageColor["LightBlue"] = "#ADD8E6";
    PageColor["LightGreen"] = "#90EE90";
    PageColor["LightPink"] = "#FFB6C1";
})(PageColor || (PageColor = {}));
// Змінні різних типів
let userName = "Аліна";
let userAge = 22;
// Функція для правильного відмінювання слова "рік"
function getYearsWord(years) {
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return "років";
    }
    if (lastDigit === 1) {
        return "рік";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return "роки";
    }
    return "років";
}
// Функція привітання з усіма параметрами
function greetUser(name, age, hobby, experience) {
    let greeting = `Привіт, ${name}! Тобі ${age} ${getYearsWord(age)}. Твоє хобі — ${hobby}. `;
    // Умовна логіка для досвіду
    if (experience > 5) {
        greeting += `Вау, ти справжній експерт у ${hobby}!`;
    }
    else if (experience >= 1 && experience <= 5) {
        greeting += `Чудово, ти вже маєш досвід у ${hobby}.`;
    }
    else {
        greeting += "Все попереду! Починати нове хобі — це цікаво.";
    }
    return greeting;
}
// Ініціалізація після завантаження DOM
window.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.getElementById('greetBtn');
    const resultDiv = document.getElementById('result');
    const colorSelect = document.getElementById('colorSelect');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const hobbyInput = document.getElementById('hobby');
    const experienceInput = document.getElementById('experience');
    // Заповнення select кольорами з Enum
    for (const color in PageColor) {
        if (isNaN(Number(color))) {
            const option = document.createElement('option');
            option.value = PageColor[color];
            option.textContent = `${color} (${PageColor[color]})`;
            colorSelect.appendChild(option);
        }
    }
    // Обробка події натискання на кнопку
    greetBtn.addEventListener('click', () => {
        // Отримання значень з форми
        const name = nameInput.value || userName;
        const age = Number(ageInput.value) || userAge;
        const hobby = hobbyInput.value || "фотографія";
        const experience = Number(experienceInput.value) || 6;
        // Виведення привітання
        let output = greetUser(name, age, hobby, experience);
        output += "\n\nДоступні кольори:\n";
        // Перебір Enum у циклі та виведення значень
        for (const color in PageColor) {
            if (isNaN(Number(color))) {
                output += `• ${color}: ${PageColor[color]}\n`;
            }
        }
        resultDiv.textContent = output;
    });
    // Зміна кольору фону на основі вибраного значення у select
    colorSelect.addEventListener('change', () => {
        document.body.style.backgroundColor = colorSelect.value;
    });
});
//# sourceMappingURL=app.js.map