/*
 * By Calvin Chandra Gunawan
 * 00000012892
 */

let expenses = [];
let totalExpenses = 0;

function addData() {
    let name = document.getElementById("name").value;
    let total = document.getElementById("total").value;

    if (!name || !total) {
        presentAlert();
        return false;
    }

    let pushData = {};
    pushData.name = name;
    pushData.total = total;

    console.log(pushData);

    expenses.push(pushData);

    console.log(expenses);

    let text = "";
    let i;

    for (i = 0; i < expenses.length; i++) {
        text += "<ion-item>" + expenses[i].name + ": Rp. " + expenses[i].total + ",00" + "</ion-item>";
    }

    totalExpenses += parseInt(pushData.total);
    document.getElementById("printData").innerHTML = text;
    document.getElementById("printTotalData").innerHTML = "Total Pengeluaran: Rp. " + totalExpenses + ",00";
    clearData();
}

function clearData() {
    let name = document.getElementById("name");
    let total = document.getElementById("total");

    name.value = "";
    total.value = "";
}

async function presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');

    const alert = await alertController.create({
        header: 'Terjadi Kesalahan',
        message: 'Mohon masukkan nama dan jumlah pengeluaran.',
        buttons: ['Tutup']
    });
    return await alert.present();
}