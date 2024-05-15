function submit() {
    document.querySelector(".value2").innerHTML = "";
    
    let Principal = document.querySelector("[placeholder='Amount").value,
    Interest = document.querySelector("[placeholder='Interest %'").value / 100,
    Year = document.querySelector("[placeholder='Year(s)']").value,
    Frequency = document.querySelector("#selector").value,
    compoundPrincipal = Principal,
    years = 0

    while(years < Year)
    {
        compoundPrincipal *= Math.pow(1 + Interest / Frequency, Frequency)
        years+=1
        document.querySelector(".value2").innerHTML += `Year ${years}: Compound principal = $${compoundPrincipal.toFixed(2)}<br>`
    }

    const compoundInterest = compoundPrincipal - Principal
    document.querySelector(".value1").innerText = `Compound Interest: ${compoundInterest.toFixed(2)}`
}