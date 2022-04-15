function verificar() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.querySelector('.year')
    var rest = document.querySelector('.res')
    var resImage = document.querySelector('.resImg')
    
    if(fyear.value.length == 0 || fyear.value > year){
    alert('verifique os dados')
    } else{
        var gender = document.getElementsByName('gender')
        var age = year - Number(fyear.value)
        var fsex = ''

        if(gender[0].checked){
            fsex = 'Homem'
            if(age >= 0 && age < 6){
                resImage.src = 'image/criancaMas.jpg'
            } else if (age <= 17){
                resImage.src = 'image/adolesMas.jpg'
            } else if(age <= 45) {
                resImage.src = 'image/homem.jpg'
            } else{
                resImage.src = 'image/idoso.jpg'
            }
        } else if (gender[1].checked) {
            fsex ='Mulher'
            if(age >= 0 && age < 6){
                resImage.src = 'image/criancaFem.jpg'
            } else if(age < 18){
                resImage.src = 'image/adolesFem.jpg'
            } else if(age < 46){
                resImage.src = 'image/mulher.jpg'
            } else{
                resImage.src = 'image/idosa.jpg'
            }
        }
        rest.innerHTML = `É ${fsex} com ${age} anos`
    }
}
