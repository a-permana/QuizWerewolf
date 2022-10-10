let tanya = true;
while(tanya){
    let nama = prompt("Masukkan Nama Anda!");
    while (nama == ""){
        alert("Masukkan Nama Anda!")
        nama = prompt("Masukkan Nama Anda!");
        alert("Halo "+ nama + " selamat datang di game werewolf")
    }

    let peran = prompt("Masukkan peran anda : penyihir, guard atau werewolf");                                                                                                                     
    while (peran==""){
        alert("Piih peranmu untuk memulai game!")
        peran = prompt("Masukkan peran anda : penyihir, guard atau werewolf")
    }
    
    let komputer = Math.random();
    if(komputer < 0.34){
        komputer = "penyihir";
    }else if(komputer >= 0.34 && komputer < 0.66){
        komputer = "guard";
    }else{
        komputer = "werewolf";
    }

    //rules
    let hasil;
    if(peran == komputer){
        hasil = "draw";
    }else if (peran == "penyihir"){
    hasil = (komputer == "guard") ? "Menang" : "Kalah";
    }else if (peran == "guard"){
        hasil = (komputer == "werewolf") ? "Menang" : "Kalah";
    }else if (peran == "werewolf"){
        hasil = (komputer == "penyihir") ? "Menang" : "Kalah";
    }else{
        hasil = ("Masukkan peran yang benar!");
    }
    alert("anda memilih " + peran + " dan komputer memilih " + komputer + " maka anda " + hasil);
    tanya = confirm("Main lagi?");
}
alert("hatur nuhun sudah bermain game werewolf");