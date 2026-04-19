function gerar() {
    let num = document.getElementById("num")
    let tab = document.getElementById("seltab")
    
    if (num.value.length == "") {
        res.innerHTML = "Escreva um número!"
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement('Option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}