import BankAccount from "./bank_account.js"

let Nasabah = new BankAccount(0)

async function main() {
    let isConfirm = true;

    while (isConfirm) {
        const masukkan = parseInt(prompt("Pilih Menu yang ingin anda akses\n 1. Deposit\n 2. Penarikan\n 3. Lihat Saldo"));
        if (masukkan === 1) {
            let jumlah = parseInt(prompt("Masukkan Nominal yang ingin disetor"));
            await new Promise(resolve => {
                setTimeout(() => {
                    try {
                        Nasabah.deposit(jumlah);
                    } catch (error) {
                        alert(error);
                    }
                    resolve();
                }, 2000);
                alert("Memproses Data....");
            });
        
        } else if (masukkan === 2) {
            let jumlah = parseInt(prompt(`Masukkan Nominal yang ingin ditarik\nSaldo anda Rp. ${Nasabah.saldo.toLocaleString()}-,`));
            await new Promise(resolve => {
                setTimeout(() => {
                    try {
                        Nasabah.withdraw(jumlah);
                    } catch (error) {
                        alert(error);
                    }
                    resolve(); 
                }, 3000);
                alert("Memproses Data....");
            });
           
        } else if (masukkan === 3) {
            await new Promise(resolve => {
                setTimeout(() => {
                    alert(`Jumlah saldo anda sebesar Rp. ${Nasabah.saldo.toLocaleString()} -, `);
                    resolve(); 
                }, 1000);

                alert("Memproses Data...");
            });

        } else {
            alert("Pilihan tidak valid.");
        }
        
        let response = confirm("Apakah Anda ingin melakukan transaksi lainnya?");
        if (!response) {
            isConfirm = false;
        }
    }
}

main();