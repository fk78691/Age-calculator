function calculateAge(){
    const dob = new Date(document.getElementById("dob").value);

    const ageinMS = Date.now() - dob.getTime();
    const ageDate = new Date(ageinMS)
    const age = Math.abs(ageDate.getFullYear() - 1970)
    const month = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    document.getElementById("Year").innerHTML=age
    document.getElementById("month").innerHTML=month
    document.getElementById("day").innerHTML=days;
}