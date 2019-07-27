function getFormvalue() {
    let form = document.querySelector("#form1");
    var name = form.fname.value;
    var surName = form.lname.value;
    alert(`${name} ${surName}`);
}