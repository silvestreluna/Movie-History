
const printToDom = (divId, itemToPrint) => {
  const DivToPrintId = document.getElementById(divId);
  DivToPrintId.innerHTML = itemToPrint;
};

export default { printToDom };
