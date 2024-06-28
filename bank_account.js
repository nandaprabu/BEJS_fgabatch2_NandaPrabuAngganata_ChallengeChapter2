class BankAccount{
  
    constructor(saldo){
        this.saldo = saldo
    }

    deposit(amount){
        if(isNaN(amount)){
            throw new CustomError("Transaksi Gagal", `Anda membatalkan transaksi atau tidak mengisi nominal.\nSaldo Anda Rp. ${this.saldo.toLocaleString()} -,`)
        } else {
            if(typeof amount === "number" && !isNaN(amount) && amount > 0){
                this.saldo += amount
                alert(`Setoran Uang Berhasil! Setoran sebesar Rp. ${amount}-,\nSaldo Anda Rp. ${this.saldo.toLocaleString()} -,`)
            } else {
                throw new CustomError("Transaksi Gagal", `Mohon periksa kembali inputan anda\nSaldo Anda Rp. ${this.saldo.toLocaleString()} -,`)
    
            }
        }
        return this.saldo
    }

    withdraw(amount){
        if(amount === null || amount === "" || amount < 0 || isNaN(amount)){
            throw new CustomError("Transaksi Gagal", `Mohon periksa kembali inputan anda\nSaldo Anda Rp. ${this.saldo.toLocaleString()} -,`)
        } else {
            if(typeof amount === 'number' && !isNaN(amount) && amount > 0 && this.saldo >= amount){
                this.saldo -= amount
                alert(`Penarikan Uang Berhasil! Penarikan sebesar Rp. ${amount}-,\nSaldo Anda Rp. ${this.saldo.toLocaleString()} -,`)
            } else {
                throw new CustomError("Transaksi Gagal", `saldo anda tidak mencukupi untuk melakukan transaksi\nSaldo Anda Rp. ${this.saldo.toLocaleString()} -,`)
            }
        }
        return this.saldo
    }

}

class CustomError extends Error{
    constructor(name, message){
        super(message);
        this.name = name;
    }
}

export default BankAccount;