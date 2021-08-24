const BODY = document.body;
const Form = document.querySelector('.mainform');
const Submit = Form.querySelector('.submitbtn');
const NumberCells = Form.querySelectorAll('.numbercell');

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
    "EuroJackpot": { column: "c-7", regularNums: { min: 1, max: 50, val: 5 }, specialNums: { min: 1, max: 10, val: 2 } },
    "VikingLotto": { column: "c-7", regularNums: { min: 1, max: 48, val: 6 }, specialNums: { min: 1, max: 5, val: 1 } },
    "Loto-7": { column: "c-7", regularNums: { min: 1, max: 37, val: 7 }, specialNums: null }
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

const createCellArrayS = (regMinVal, regMaxVal, regNumVal, specMinVal, specMaxVal, specNumVal, Sets) => {
    let uCellArr = new Array(Sets).fill(0).map(() => new Array(regNumVal + specNumVal).fill(0));
    for(let i = 0; i < Sets; i++) {
        const uRegArr = new Array(regNumVal).fill(0);
        const uSpecArr = new Array(specNumVal).fill(0);

        for(let u = 0; u < uRegArr.length; u++) {
            uRegArr[u] = Math.floor(Math.random() * (regMaxVal - regMinVal + 1)) + regMinVal;
        }
        for(let s = 0; s < uSpecArr.length; s++) {
            uSpecArr[s] = Math.floor(Math.random() * (specMaxVal - specMinVal + 1)) + specMinVal;
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
    }
    return uCellArr;
}

const setCellArray = (uArray) => {
    let sCellArr = [].concat.apply([], uArray);
    return sCellArr;
}

Submit.addEventListener("click", () => {
    let lottoVal = document.querySelector('.lotto-select').value;
    let setVal = parseInt(document.querySelector('.set-select').value);

    let rMinVal = parseInt(lottoList[lottoVal].regularNums.min);
    let rMaxVal = parseInt(lottoList[lottoVal].regularNums.max);
    let rNumVal = parseInt(lottoList[lottoVal].regularNums.val);
    let sMinVal = parseInt(lottoList[lottoVal].specialNums.min);
    let sMaxVal = parseInt(lottoList[lottoVal].specialNums.max);
    let sNumVal = parseInt(lottoList[lottoVal].specialNums.val);
    
    let nodeSelector = `${rowInputMap[setVal]} ${lottoList[lottoVal].column}`;

    let selectedNodes = document.getElementsByClassName(nodeSelector);
    for(let i = 0; i < NumberCells.length; i++) {
        NumberCells[i].textContent = " ";
        NumberCells[i].style.display = "static";
    }

    const mapValues = (sArray) => {
        for(let i = 0; i < selectedNodes.length; i++) {
            selectedNodes[i].textContent = sArray[i];            
        }
    }

    if(lottoList[lottoVal].specialNums == null) {
        const uArray = createCellArrayR(rMinVal, rMaxVal, rNumVal, setVal);
        const sArray = setCellArray(uArray);
        mapValues(sArray);
        return false;
    }   
    else {
        const uArray = createCellArrayS(rMinVal, rMaxVal, rNumVal, sMinVal, sMaxVal, sNumVal, setVal);
        const sArray = setCellArray(uArray);
        mapValues(sArray);
        return false;
    }
})