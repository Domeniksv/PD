let vards = "Peteris";
let vecums = 18;
let irPilsonis = true;

console.log("Vārds:", vards);
console.log("Vecums:", vecums);

// Balsošanas kontrole
if (vecums >= 18 && irPilsonis === true) {
    console.log("Drīkst balsot.");
} else if (vecums >= 18 && irPilsonis === false) {
    console.log("Personai ir 18 gadi, bet viņa nav pilsonis.");
} else if (vecums < 18 && irPilsonis === true) {
    console.log("Personai nav 18 gadi, bet viņa ir pilsonis.");
} else {
    console.log("Personai nav 18 gadi un viņa nav pilsonis.");
}

// Uzdevums 2: Atzīmes izvērtēšana
let atzime = prompt("Ievadiet atzīmi (0-100):");
atzime = parseInt(atzime);

if (atzime >= 90 && atzime <= 100) {
    console.log("Izcili");
} else if (atzime >= 70 && atzime < 90) {
    console.log("Labi");
} else if (atzime >= 50 && atzime < 70) {
    console.log("Vidēji");
} else if (atzime >= 0 && atzime < 50) {
    console.log("Slikti");
} else {
    console.log("Nepareiza atzīme.");
}

// Uzdevums 3: Masīva izveide un izvade
let masivs = ["Banāns", "Apelsīns", "Vīnogas", "Arbūzi", "Plūme"];

// Izvade masīvam ar for ciklu
console.log("Saraksts:");
for (let i = 0; i < masivs.length; i++) {
    console.log(masivs[i]);
}

// Izvade masīvam apgrieztā secībā
console.log("Saraksts apgrieztā secībā:");
for (let i = masivs.length - 1; i >= 0; i--) {
    console.log(masivs[i]);
}

// Funkcija atzīmes izvērtēšanai
function atzimesIzverte() {
    let atzime = document.getElementById("atzime").value;

    if (atzime >= 90 && atzime <= 100) {
        document.getElementById("atzimes-result").innerText = "Izcili";
    } else if (atzime >= 70 && atzime < 90) {
        document.getElementById("atzimes-result").innerText = "Labi";
    } else if (atzime >= 50 && atzime < 70) {
        document.getElementById("atzimes-result").innerText = "Vidēji";
    } else if (atzime >= 0 && atzime < 50) {
        document.getElementById("atzimes-result").innerText = "Slikti";
    } else {
        document.getElementById("atzimes-result").innerText = "Nepareiza atzīme.";
    }
}

// Masīva izvadīšana
function izvaditMasivu() {
    let masivsUl = document.getElementById("masivs");
    masivsUl.innerHTML = "";
    for (let i = 0; i < masivs.length; i++) {
        let li = document.createElement("li");
        li.textContent = masivs[i];
        masivsUl.appendChild(li);
    }
}

// Masīva izvadīšana apgrieztā secībā
function izvaditMasivuApgriezti() {
    let masivsUl = document.getElementById("masivs");
    masivsUl.innerHTML = "";
    for (let i = masivs.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.textContent = masivs[i];
        masivsUl.appendChild(li);
    }
}

// Kalkulators
function calculate() {
    let operand1 = document.getElementById("operand1").value;
    let operand2 = document.getElementById("operand2").value;
    let operator = document.getElementById("operator").value;

    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById("calculator-result").innerText = "Lūdzu ievadiet derīgus skaitļus.";
        return;
    }

}