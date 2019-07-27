function getAttributes(){
    let body = document.getElementById("w3r");
    let href = body.href;
    let hreflang = body.hreflang;
    let rel = body.rel;
    let target = body.target;
    let type = body.type;
    alert(`${href}   ${hreflang}    ${rel}    ${target}    ${type}`);
}