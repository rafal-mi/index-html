fetch("template.html")
    .then(response => response.text())
    .then(html => {
        //document.body.innerHTML = html; 
        document.getElementById("app").innerHTML = html;
    })
