const BODY = document.body;
const Form = document.querySelector('.mainform');
const SubmitBtn = Form.querySelector('.submitbtn');

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
    let minVal = document.querySelector('[name=min]').value;
    let maxVal = document.querySelector('[name=max]').value;
    let setVal = document.querySelector('.set-select').value;

    let rowSelect = rowInputMap[setVal];
    let colSelect = "c-7";
    let nodeSelector = `${rowSelect} ${colSelect}`;

    let selectedNodes = document.getElementsByClassName(nodeSelector);
});

