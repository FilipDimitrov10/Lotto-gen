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

SubmitBtn.addEventListener("click", () => {
    let minVal = parseInt(document.querySelector('[name=min]').value);
    let maxVal = parseInt(document.querySelector('[name=max]').value);
    let setVal = parseInt(document.querySelector('.set-select').value);
    
    let rowSelect = rowInputMap[setVal];
    let colSelect = "c-7";
    let nodeSelector = `${rowSelect} ${colSelect}`;

    let selectedNodes = document.getElementsByClassName(nodeSelector);
    for(let i = 0; i < NumberCells.length; i++) {
        NumberCells[i].textContent = " ";
        NumberCells[i].style.display = "static";
    }

    const createCellArray = (minval, maxval, sets) => {
        let uCellArr = new Array(sets).fill(0).map(() => new Array(7).fill(0));
        for(let i = 0; i < sets; i++) {
            for(let j = 0; j < 7; j++) {
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

    const mapValues = () => {
        for(let i = 0; i < selectedNodes.length; i++) {
            selectedNodes[i].textContent = sArray[i];
        }
    }
    
    let uArray = createCellArray(minVal, maxVal, setVal);
    const sArray = setCellArray(uArray);
    mapValues();
    return false;
})