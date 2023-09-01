import { tvInventory } from "../constants/inventory.js";

export function calculateTotalSoldTVs() {
    let totalSoldTVs = 0;
    for (let i = 0; i < tvInventory.length; i++) {
        if (tvInventory[i].sold !== 0) { // Gebruik !== om te controleren op ongelijkheid
            totalSoldTVs += tvInventory[i].sold;
        }
    }
    return totalSoldTVs;
}

export function calculateTotalBoughtTVs() {
    let totalBoughtTVs = 0;
    for (let i = 0; i < tvInventory.length; i++) {
        if (tvInventory[i].originalStock !== 0) { // Gebruik !== om te controleren op ongelijkheid
            totalBoughtTVs += tvInventory[i].originalStock;
        }
    }
    return totalBoughtTVs;
}
export function formatPrice(price) {
    return `€${price},-`;
}
export function generateScreenSizes(screenSizes) {
    if (screenSizes.length === 1) {
        const sizeInInches = screenSizes[0];
        const sizeInCm = Math.round(sizeInInches * 2.54);
        return `${sizeInInches} inch (${sizeInCm} cm)`;
    } else {
        const sizesFormatted = screenSizes.map(size => {
            const sizeInCm = Math.round(size * 2.54);
            return `${size} inch (${sizeInCm} cm)`;
        });
        return sizesFormatted.join(" | ");
    }
}

    export function bestseller() {
        const photo = bestseller.length;
        return `${photo}`
        // Voer hier de rest van je code uit
    }


export function getTvTypeNames(tvInventory) {
    return tvInventory.map((tv) => tv.name);
}

export function notSoldTVs() {
    let totalNotSoldTVs="";
    console.log(tvInventory)
    for (let i = 0; i < tvInventory.length; i++) {
        if (tvInventory[i].sold === 0) {
            totalNotSoldTVs += tvInventory[i].name;
        }
        console.log(totalNotSoldTVs);// Deze logt de tussenstand

    }
    return totalNotSoldTVs;
}
// export function test(){
//     console.log("test")
// }
// test()

// Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
// Definieer de tvInventory-array ergens in je code

// Gebruik de find-methode om naar de TV met het opgegeven type 'NH3216SMART' te zoeken
export function findNh3216SmartTV() {
    const nh3216SmartTV = tvInventory.find((tv) => tv.type === 'NH3216SMART');
    if (nh3216SmartTV) {
        console.log(nh3216SmartTV);
        return `TV gevonden: ${nh3216SmartTV.name}| ${nh3216SmartTV.type}| ${nh3216SmartTV.brand}| ${nh3216SmartTV.price},-| ${nh3216SmartTV.smartTv} `;
    } else {
        return 'TV NH3216SMART niet gevonden in de inventaris';
    }
}
/* Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven
wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger).
 Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.*/







