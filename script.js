//your JS code here. If required.
//write code here
function removeSelectedColor() {
            var select = document.getElementById("colorSelect");
            var selectedOption = select.options[select.selectedIndex];
            select.remove(selectedOption.index);
        }
