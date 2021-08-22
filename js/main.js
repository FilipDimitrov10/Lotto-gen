const BODY = document.body;
const Form = document.querySelector('.mainform');
const SubmitBtn = Form.querySelector('.submitbtn');
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

SubmitBtn.addEventListener("click", () => {
    let lottoVal = document.querySelector('.lotto-select').value;
    let setVal = parseInt(document.querySelector('.set-select').value);
    
    let rowSelect = rowInputMap[setVal];
    let colSelect = lottoList[lottoVal].column;
    let nodeSelector = `${rowSelect} ${colSelect}`;

    let selectedNodes = document.getElementsByClassName(nodeSelector);
    for(let i = 0; i < NumberCells.length; i++) {
        NumberCells[i].textContent = " ";
        NumberCells[i].style.display = "static";
    }

    if(lottoList[lottoVal].specialNums != null) {
        let regMinVal = parseInt(lottoList[lottoVal].regularNums.min);
        let regMaxVal = parseInt(lottoList[lottoVal].regularNums.max);
        let regNumVal = parseInt(lottoList[lottoVal].regularNums.val);
        let specMinVal = parseInt(lottoList[lottoVal].specialNums.min);
        let specMaxVal = parseInt(lottoList[lottoVal].specialNums.max);
        let specNumVal = parseInt(lottoList[lottoVal].specialNums.val);

        const createCellArray = (regMinVal, regMaxVal, regNumVal, specMinVal, specMaxVal, specNumVal, sets) => {
            let uCellArr = new Array(sets).fill(0).map(() => new Array(regNumVal + specNumVal).fill(0));
            for(let i = 0; i < sets; i++) {
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

        const setCellArray = (pArray) => {
            let sCellArr = [].concat.apply([], pArray);
            return sCellArr;
        }

        const mapValues = (sArray) => {
            for(let i = 0; i < selectedNodes.length; i++) {
                selectedNodes[i].textContent = sArray[i];            
            }
        }

        let uArray = createCellArray(regMinVal, regMaxVal, regNumVal, specMinVal, specMaxVal, specNumVal, setVal);
        const sArray = setCellArray(uArray);
        mapValues(sArray);
        return false;
    }
    else {
        let minVal = parseInt(lottoList[lottoVal].regularNums.min);
        let maxVal = parseInt(lottoList[lottoVal].regularNums.max);
        let numVal = parseInt(lottoList[lottoVal].regularNums.val);
        
        const createCellArray = (minval, maxval, sets, val) => {
            let uCellArr = new Array(sets).fill(0).map(() => new Array(val).fill(0));
            for(let i = 0; i < sets; i++) {
                for(let j = 0; j < val; j++) {
                    uCellArr[i][j] = Math.floor(Math.random() * (maxval - minval + 1)) + minval;
                }
            }
            for(let i = 0; i < uCellArr.length; i++) {
                uCellArr[i].sort((a, b) => {
                    return a-b;
                });
            }
        
            return uCellArr;
        }
        
        const setCellArray = (pArray) => {
            let sCellArr = [].concat.apply([], pArray);
            return sCellArr;
        }
    
        const mapValues = (sArray) => {
            for(let i = 0; i < selectedNodes.length; i++) {
                selectedNodes[i].textContent = sArray[i];
            }
        }
        
        let uArray = createCellArray(minVal, maxVal, setVal, numVal);
        const sArray = setCellArray(uArray);
        mapValues(sArray);
        return false;
    }
})