const BODY = document.body;
const Form = document.querySelector('.mainform');
const Submit = Form.querySelector('.submitbtn');
const NumberCells = Form.querySelectorAll('.numbercell');
const NumberGrid = NumberCells[0].parentElement;

const rowInputMap = {
    1: "r-1",
    2: "r-2",
    3: "r-3",
    4: "r-4",
    5: "r-5",
    6: "r-6",
    7: "r-7",
    8: "r-8",
    9: "r-9",
    10: "r-10"
};

const lottoList = {
    "Powerball(USA)": { column: "c-6", regularNums: { min: 1, max: 69, val: 5 }, specialNums: { min: 1, max: 26, val: 1 } },
    "Cash4Life": { column: "c-6", regularNums: { min: 1, max: 60, val: 5 }, specialNums: { min: 1, max: 4, val: 1 } },
    "Decades-Of-Dollars": { column: "c-6", regularNums: { min: 1, max: 47, val: 6 }, specialNums: null },
    "Hot-Lotto": { column: "c-6", regularNums: { min: 1, max: 47, val: 5 }, specialNums: { min: 1, max: 19, val: 1 } },
    "Lotto-America": { column: "c-6", regularNums: { min: 1, max: 52, val: 5 }, specialNums: { min: 1, max: 10, val: 1 } },
    "Lucky-For-Life": { column: "c-6", regularNums: { min: 1, max: 48, val: 5 }, specialNums: { min: 1, max: 18, val: 1 } },
    "Mega-Bucks-Plus": { column: "c-6", regularNums: { min: 1, max: 41, val: 5 }, specialNums: { min: 1, max: 6, val: 1 } },
    "MegaMillions": { column: "c-6", regularNums: { min: 1, max: 70, val: 5 }, specialNums: { min: 1, max: 25, val: 1 } },
    "Monopoly-Millionaires": { column: "c-5", regularNums: { min: 1, max: 52, val: 5 }, specialNums: null },
    "Weekly-Grand": { column: "c-5", regularNums: { min: 1, max: 35, val: 4 }, specialNums: { min: 1, max: 35, val: 1 } },
    "EuroMillions": { column: "c-7", regularNums: { min: 1, max: 50, val: 5 }, specialNums: { min: 1, max: 12, val: 2 } },
    "EuroMillions-Hot-Picks-1": { column: "c-1", regularNums: { min: 1, max: 50, val: 1 }, specialNums: null },
    "EuroMillions-Hot-Picks-2": { column: "c-2", regularNums: { min: 1, max: 50, val: 2 }, specialNums: null },
    "EuroMillions-Hot-Picks-3": { column: "c-3", regularNums: { min: 1, max: 50, val: 3 }, specialNums: null },
    "EuroMillions-Hot-Picks-4": { column: "c-4", regularNums: { min: 1, max: 50, val: 4 }, specialNums: null },
    "EuroMillions-Hot-Picks-5": { column: "c-5", regularNums: { min: 1, max: 50, val: 5 }, specialNums: null },
    "EuroJackpot": { column: "c-7", regularNums: { min: 1, max: 50, val: 5 }, specialNums: { min: 1, max: 10, val: 2 } },
    "VikingLotto": { column: "c-7", regularNums: { min: 1, max: 48, val: 6 }, specialNums: { min: 1, max: 5, val: 1 } },
    "Keno-Pick-1": { column: "c-1", regularNums: { min: 1, max: 80, val: 1 }, specialNums: null },
    "Keno-Pick-2": { column: "c-2", regularNums: { min: 1, max: 80, val: 2 }, specialNums: null },
    "Keno-Pick-3": { column: "c-3", regularNums: { min: 1, max: 80, val: 3 }, specialNums: null },
    "Keno-Pick-4": { column: "c-4", regularNums: { min: 1, max: 80, val: 4 }, specialNums: null },
    "Keno-Pick-5": { column: "c-5", regularNums: { min: 1, max: 80, val: 5 }, specialNums: null },
    "Keno-Pick-6": { column: "c-6", regularNums: { min: 1, max: 80, val: 6 }, specialNums: null },
    "Keno-Pick-7": { column: "c-7", regularNums: { min: 1, max: 80, val: 7 }, specialNums: null },
    "Keno-Pick-8": { column: "c-8", regularNums: { min: 1, max: 80, val: 8 }, specialNums: null },
    "Keno-Pick-9": { column: "c-9", regularNums: { min: 1, max: 80, val: 9 }, specialNums: null },
    "Keno-Pick-10": { column: "c-10", regularNums: { min: 1, max: 80, val: 10 }, specialNums: null },
    "Powerball(AUS)": { column: "c-8", regularNums: { min: 1, max: 35, val: 7 }, specialNums: { min: 1, max: 20, val: 1 } },
    "Monday-Lotto": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Oz-Lotto": { column: "c-7", regularNums: { min: 1, max: 45, val: 7 }, specialNums: null },
    "Set-For-Life": { column: "c-7", regularNums: { min: 1, max: 44, val: 7 }, specialNums: null },
    "The-Pools": { column: "c-6", regularNums: { min: 1, max: 38, val: 6 }, specialNums: null },
    "Wednesday-Lotto": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Lotto-6-Aus-45": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Loterie-Nationale": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Toto-2-1": { column: "c-5", regularNums: { min: 1, max: 35, val: 5 }, specialNums: null },
    "Toto-2-2": { column: "c-6", regularNums: { min: 1, max: 42, val: 6 }, specialNums: null },
    "Toto-2-3": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Hrvatske-Lutrije-6": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Hrvatske-Lutrije-7": { column: "c-7", regularNums: { min: 1, max: 35, val: 7 }, specialNums: null },
    "Chance-Korunka-Sestka": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Chance-Korunka-na-3": { column: "c-3", regularNums: { min: 1, max: 49, val: 3 }, specialNums: null },
    "Chance-Korunka-na-4": { column: "c-4", regularNums: { min: 1, max: 49, val: 4 }, specialNums: null },
    "Chance-Korunka-na-5": { column: "c-5", regularNums: { min: 1, max: 49, val: 5 }, specialNums: null },
    "Fortuna-Fofr": { column: "c-9", regularNums: { min: 1, max: 25, val: 8 }, specialNums: { min: 1, max: 4, val: 1 } },
    "Fortuna-Loto": { column: "c-7", regularNums: { min: 1, max: 49, val: 6 }, specialNums: { min: 1, max: 2, val: 1 } },
    "Fortuna-Trojka": { column: "c-3", regularNums: { min: 1, max: 21, val: 3 }, specialNums: null },
    "Sazka-Euromiliony": { column: "c-8", regularNums: { min: 1, max: 35, val: 7 }, specialNums: { min: 1, max: 5, val: 1 } },
    "Sazka-Sportka": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Dansk-Lotto": { column: "c-7", regularNums: { min: 1, max: 36, val: 7 }, specialNums: null },
    "Finnish-Lotto": { column: "c-7", regularNums: { min: 1, max: 40, val: 7 }, specialNums: null },
    "Amigo": { column: "c-7", regularNums: { min: 1, max: 28, val: 7 }, specialNums: null },
    "Loto-Français": { column: "c-6", regularNums: { min: 1, max: 49, val: 5 }, specialNums: { min: 1, max: 10, val: 1 } },
    "Loto-6-Aus-49": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Extra-5": { column: "c-5", regularNums: { min: 1, max: 35, val: 5 }, specialNums: null },
    "Joker-Greece": { column: "c-6", regularNums: { min: 1, max: 45, val: 5 }, specialNums: { min: 1, max: 20, val: 1 } },
    "Lotto-Greece": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Hatoslotto": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Skandinav-Lotto": { column: "c-7", regularNums: { min: 1, max: 35, val: 7 }, specialNums: null },
    "Otoslotto": { column: "c-5", regularNums: { min: 1, max: 90, val: 5 }, specialNums: null },
    "Lotto-Iceland": { column: "c-5", regularNums: { min: 1, max: 40, val: 5 }, specialNums: null },
    "Daily-Million": { column: "c-6", regularNums: { min: 1, max: 39, val: 6 }, specialNums: null },
    "Lotto-Ireland": { column: "c-6", regularNums: { min: 1, max: 47, val: 6 }, specialNums: null },
    "10eLotto": { column: "c-10", regularNums: { min: 1, max: 90, val: 10 }, specialNums: null },
    "MillionDay": { column: "c-5", regularNums: { min: 1, max: 55, val: 5 }, specialNums: null },
    "SuperEna-Max": { column: "c-6", regularNums: { min: 1, max: 90, val: 6 }, specialNums: null },
    "SuperEnaLotto": { column: "c-6", regularNums: { min: 1, max: 90, val: 6 }, specialNums: null },
    "SuperEnaLotto+": { column: "c-7", regularNums: { min: 1, max: 90, val: 6 }, specialNums: { min: 1, max: 90, val: 1 } },
    "Win-For-Life": { column: "c-10", regularNums: { min: 1, max: 20, val: 10 }, specialNums: null },
    "LatLoto": { column: "c-5", regularNums: { min: 1, max: 35, val: 5 }, specialNums: null },
    "Super-5": { column: "c-5", regularNums: { min: 1, max: 45, val: 5 }, specialNums: null },
    "Loto-7": { column: "c-7", regularNums: { min: 1, max: 37, val: 7 }, specialNums: null },
    "Superstar": { column: "c-6", regularNums: { min: 1, max: 35, val: 5 }, specialNums: { min: 1, max: 7, val: 1 } },
    "Lutrija-7/21": { column: "c-7", regularNums: { min: 1, max: 21, val: 7 }, specialNums: null },
    "Lutrija-7/33": { column: "c-7", regularNums: { min: 1, max: 33, val: 7 }, specialNums: null },
    "Lutrija-7/36": { column: "c-7", regularNums: { min: 1, max: 36, val: 7 }, specialNums: null },
    "Lutrija-7/39": { column: "c-7", regularNums: { min: 1, max: 39, val: 7 }, specialNums: null },
    "Lutrija-7/42": { column: "c-7", regularNums: { min: 1, max: 42, val: 7 }, specialNums: null },
    "Lotto-Netherlands": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Lucky-Day-1": { column: "c-1", regularNums: { min: 1, max: 80, val: 1 }, specialNums: null },
    "Lucky-Day-2": { column: "c-2", regularNums: { min: 1, max: 80, val: 2 }, specialNums: null },
    "Lucky-Day-3": { column: "c-3", regularNums: { min: 1, max: 80, val: 3 }, specialNums: null },
    "Lucky-Day-4": { column: "c-4", regularNums: { min: 1, max: 80, val: 4 }, specialNums: null },
    "Lucky-Day-5": { column: "c-5", regularNums: { min: 1, max: 80, val: 5 }, specialNums: null },
    "Lucky-Day-6": { column: "c-6", regularNums: { min: 1, max: 80, val: 6 }, specialNums: null },
    "Lucky-Day-7": { column: "c-7", regularNums: { min: 1, max: 80, val: 7 }, specialNums: null },
    "Lucky-Day-8": { column: "c-8", regularNums: { min: 1, max: 80, val: 8 }, specialNums: null },
    "Lucky-Day-9": { column: "c-9", regularNums: { min: 1, max: 80, val: 9 }, specialNums: null },
    "Lucky-Day-10": { column: "c-10", regularNums: { min: 1, max: 80, val: 10 }, specialNums: null },
    "Lotto-Norway": { column: "c-7", regularNums: { min: 1, max: 34, val: 7 }, specialNums: null },
    "Ekstra-Pensja": { column: "c-6", regularNums: { min: 1, max: 35, val: 5 }, specialNums: { min: 1, max: 4, val: 1 } },
    "Joker-Poland": { column: "c-5", regularNums: { min: 1, max: 50, val: 4 }, specialNums: { min: 1, max: 36, val: 1 } },
    "Lotto-Poland": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Mini-Lotto": { column: "c-5", regularNums: { min: 1, max: 42, val: 5 }, specialNums: null },
    "Multi-Multi": { column: "c-10", regularNums: { min: 1, max: 80, val: 10 }, specialNums: null },
    "Totoloto": { column: "c-6", regularNums: { min: 1, max: 49, val: 5 }, specialNums: { min: 1, max: 13, val: 1 } },
    "Joker-Romania": { column: "c-6", regularNums: { min: 1, max: 45, val: 5 }, specialNums: { min: 1, max: 20, val: 1 } },
    "Lotto-Romania-1": { column: "c-5", regularNums: { min: 1, max: 40, val: 5 }, specialNums: null },
    "Lotto-Romania-2": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Gosloto-4/20": { column: "c-4", regularNums: { min: 1, max: 20, val: 4 }, specialNums: null },
    "Gosloto-5/36": { column: "c-5", regularNums: { min: 1, max: 36, val: 5 }, specialNums: null },
    "Gosloto-6/45": { column: "c-6", regularNums: { min: 1, max: 45, val: 6 }, specialNums: null },
    "Rapido": { column: "c-9", regularNums: { min: 1, max: 20, val: 8 }, specialNums: { min: 1, max: 4, val: 1 } },
    "Stoloto-7/49": { column: "c-7", regularNums: { min: 1, max: 49, val: 7 }, specialNums: null },
    "Stoloto-Sportloto": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "State-Lottery-Serbia": { column: "c-7", regularNums: { min: 1, max: 39, val: 7 }, specialNums: null },
    "Lotto-6/49+1/49": { column: "c-7", regularNums: { min: 1, max: 49, val: 6 }, specialNums: { min: 1, max: 49, val: 1 } },
    "Lotto-Slovakia": { column: "c-5", regularNums: { min: 1, max: 35, val: 5 }, specialNums: null },
    "Lotto-Slovenia": { column: "c-7", regularNums: { min: 1, max: 39, val: 7 }, specialNums: null },
    "BonoLoto": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "Daily-6/49": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "El-Gordo-De-La-Primitiva": { column: "c-6", regularNums: { min: 1, max: 54, val: 5 }, specialNums: { min: 1, max: 10, val: 1 } },
    "La-Primitiva": { column: "c-6", regularNums: { min: 1, max: 49, val: 6 }, specialNums: null },
    "SwedenLotto": { column: "c-7", regularNums: { min: 1, max: 35, val: 7 }, specialNums: null },
    "On-Numara": { column: "c-10", regularNums: { min: 1, max: 80, val: 10 }, specialNums: null },
    "Super-Lotto(TURKEY)": { column: "c-6", regularNums: { min: 1, max: 60, val: 6 }, specialNums: null },
    "Cilgin-Saysal-Lotto": { column: "c-6", regularNums: { min: 1, max: 90, val: 6 }, specialNums: null },
    "Sans-Topu": { column: "c-6", regularNums: { min: 1, max: 34, val: 5 }, specialNums: { min: 1, max: 14, val: 1 } },
    "Megalot": { column: "c-7", regularNums: { min: 1, max: 42, val: 6 }, specialNums: { min: 1, max: 10, val: 1 } },
    "National-Lottery(UKRAINE)": { column: "c-6", regularNums: { min: 1, max: 52, val: 6 }, specialNums: null },
    "49-Lunchtime-Or-Teatime": { column: "c-7", regularNums: { min: 1, max: 49, val: 6 }, specialNums: { min: 1, max: 49, val: 1 } },
    "Health-Lottery(UK)": { column: "c-5", regularNums: { min: 1, max: 50, val: 5 }, specialNums: null },
    "Lotto-HotPicks-Pick-1": { column: "c-1", regularNums: { min: 1, max: 59, val: 1 }, specialNums: null },
    "Lotto-HotPicks-Pick-2": { column: "c-2", regularNums: { min: 1, max: 59, val: 2 }, specialNums: null },
    "Lotto-HotPicks-Pick-3": { column: "c-3", regularNums: { min: 1, max: 59, val: 3 }, specialNums: null },
    "Lotto-HotPicks-Pick-4": { column: "c-4", regularNums: { min: 1, max: 59, val: 4 }, specialNums: null },
    "Lotto-HotPicks-Pick-5": { column: "c-5", regularNums: { min: 1, max: 59, val: 5 }, specialNums: null },
    "National-Lottery(UK)": { column: "c-6", regularNums: { min: 1, max: 59, val: 6 }, specialNums: null },
    "Scottish-Children-Lottery": { column: "c-5", regularNums: { min: 1, max: 49, val: 5 }, specialNums: null },
    "Set-For-Life(UK)": { column: "c-6", regularNums: { min: 1, max: 47, val: 5 }, specialNums: { min: 1, max: 10, val: 1 } },
    "Thunderball": { column: "c-6", regularNums: { min: 1, max: 39, val: 5 }, specialNums: { min: 1, max: 14, val: 1 } }, 
};

const createCellArrayR = (minVal, maxVal, numVal, Sets) => {
    let uCellArr = new Array(Sets).fill(0).map(() => new Array(numVal).fill(0));
    for(let i = 0; i < Sets; i++) {
        for(let j = 0; j < numVal; j++) {
            uCellArr[i][j] = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
        }
    }
    for(let i = 0; i < uCellArr.length; i++) {
        uCellArr[i].sort((a, b) => {
            return a-b;
        });
    }
    return uCellArr;
}

const setCellArray = (uArray) => {
    let sCellArr = [].concat.apply([], uArray);
    return sCellArr;
}

document.addEventListener("click", e => {
    if(e.target.matches(".submitbtn")) {
        let lottoVal = document.querySelector('.lotto-select').value;
        let setVal = parseInt(document.querySelector('.set-select').value);

        Submit.classList.toggle("submitbtn-innactive");
        Submit.classList.toggle("submitbtn")
        NumberGrid.classList.toggle("numbergrid-animated");
        setTimeout(() => {
            Submit.classList.toggle("submitbtn-innactive");
            Submit.classList.toggle("submitbtn")
            NumberGrid.classList.toggle("numbergrid-animated");
        }, 5001);
    
        let nodeSelector = `${rowInputMap[setVal]} ${lottoList[lottoVal].column}`;
        let selectedNodes = document.getElementsByClassName(nodeSelector);

        const mapValues = (sArray) => {
            for(let i = 0; i < selectedNodes.length; i++) {
                selectedNodes[i].textContent = sArray[i];            
            }
        }

        if(lottoList[lottoVal].specialNums == null) {
            let rMinVal = parseInt(lottoList[lottoVal].regularNums.min);
            let rMaxVal = parseInt(lottoList[lottoVal].regularNums.max);
            let rNumVal = parseInt(lottoList[lottoVal].regularNums.val);
        

            const createCellArrayR = (minVal, maxVal, numVal, Sets) => {
                let uCellArr = new Array(Sets).fill(0).map(() => new Array(numVal).fill(0));
                for(let i = 0; i < Sets; i++) {
                    let tempArr = [];
                    while(tempArr.length < numVal) {
                        let r = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
                        if(tempArr.indexOf(r) === -1) tempArr.push(r);
                    }
                    for(let j = 0; j < numVal; j++) {
                        uCellArr[i][j] = tempArr[j]
                    }
                }
                for(let i = 0; i < uCellArr.length; i++) {
                    uCellArr[i].sort((a, b) => {
                        return a-b;
                    });
                }
                return uCellArr;
            }
            
            const uArray = createCellArrayR(rMinVal, rMaxVal, rNumVal, setVal);
            const sArray = setCellArray(uArray);
            setTimeout(() => {
                for(let i = 0; i < NumberCells.length; i++) {
                    NumberCells[i].textContent = " ";
                    NumberCells[i].style.display = "static";
                }
                mapValues(sArray);
            }, 2500);
            return false;
        }   
        else {
            let rMinVal = parseInt(lottoList[lottoVal].regularNums.min);
            let rMaxVal = parseInt(lottoList[lottoVal].regularNums.max);
            let rNumVal = parseInt(lottoList[lottoVal].regularNums.val);
            let sMinVal = parseInt(lottoList[lottoVal].specialNums.min);
            let sMaxVal = parseInt(lottoList[lottoVal].specialNums.max);
            let sNumVal = parseInt(lottoList[lottoVal].specialNums.val);

            const createCellArrayS = (regMinVal, regMaxVal, regNumVal, specMinVal, specMaxVal, specNumVal, Sets) => {
                let uCellArr = new Array(Sets).fill(0).map(() => new Array(regNumVal + specNumVal).fill(0));
                for(let i = 0; i < Sets; i++) {
                    const uRegArr = new Array(regNumVal).fill(0);
                    const uSpecArr = new Array(specNumVal).fill(0);
                    let rTempArr = [];
                    while(rTempArr.length < regNumVal) {
                        let r = Math.floor(Math.random() * (regMaxVal - regMinVal + 1)) + regMinVal;
                        if(rTempArr.indexOf(r) === -1) rTempArr.push(r);
                    }
                    let sTempArr = [];
                    while(sTempArr.length < specNumVal) {
                        let r = Math.floor(Math.random() * (specMaxVal - specMinVal + 1)) + specMinVal;
                        if(sTempArr.indexOf(r) === -1) sTempArr.push(r);
                    }
            
                    for(let u = 0; u < uRegArr.length; u++) {
                        uRegArr[u] = rTempArr[u];
                    }
                    for(let s = 0; s < uSpecArr.length; s++) {
                        uSpecArr[s] = sTempArr[s];
                    }
            
                    uRegArr.sort((a, b) => {
                        return a-b;
                    })
                    uSpecArr.sort((a, b) => {
                        return a-b;
                    })
                    const tArr = uRegArr.concat(uSpecArr);
                    for(let j = 0; j < tArr.length; j++) {
                        uCellArr[i][j] = tArr[j];
                    }
                    console.log(regNumVal);
                    console.log(specNumVal);
                }
                return uCellArr;
            }

            const uArray = createCellArrayS(rMinVal, rMaxVal, rNumVal, sMinVal, sMaxVal, sNumVal, setVal);
            const sArray = setCellArray(uArray);
            setTimeout(() => {
                for(let i = 0; i < NumberCells.length; i++) {
                    NumberCells[i].textContent = " ";
                    NumberCells[i].style.display = "static";
                }
                mapValues(sArray);
            }, 2500);
            return false;
        }
    }
})

