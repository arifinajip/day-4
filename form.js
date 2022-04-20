//var name = "kevin"
//var name = "yusuf"
//console.log(name)


//let name = "kevin"
//name = "aji"

//console.log(name)

//const name3 = "arif"
    //name3 = "teuku"
    //console.log(name)
    
    
    //...........................//

//type data

//let name ="arifin"
//let age = 15
//console.log(name , "umur" , age, "tahun")
//console.log('name (name) umurnya (age) tahun');

//bilangan 1 dan bilangan 2
    //let bil1 = '8'
    //let bil2 = '7'

    //let hasil = bil1 + bil2
    //console.log(hasil);

    //function

//function bilangan(){
    //let bil1 = 20
    //let bil2 = 20

    //let hasil = bil1 + bil2
    //return'selamat datang'

    //console.log(bilangan())
//---------------------------------------------

function SubmitData()  {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('Email').value
    let phone= document.getElementById('input-number').value
    let subjek = document.getElementById('input-subjek').value
    let message = document.getElementById('input-message').value


    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subjek)
    console.log(message)

    if (name =='') {
        return alert('nama wajib di isi') }
    else if(email =='') {
        return alert('email wajib di isi') }
    else if(phone =='') {
        return alert('nomor wajib di isi') }
    else if(subjek =='') {
        return alert('subjek wajib di isi') }
        else if(message =='') {
        return alert('message wajib di isi') 
    }

    let emailReceiver ='cacahandika@gmail.com'

    let a = document.createElement('a')

    a.href = 'mailto:$ {emailReceiver}?Subject:${subjek}&hallo my name is ${name} ${message} please call me ${phone}'
   
    a.click()

    let dataObject = {
        nama:name
        email:email
        NoTelp:phone
        subjek:subjek
        message: message

    console.log(dataObject)

    }


}   





