console.log('Hello World');

const spinnerBox = document.getElementById('spinner-box');
const dataBox = document.getElementById('databox');

$.ajax({
    type: 'GET',
    url: '/jsonData/',
    success: function(response){
        setTimeout(()=>{
            spinnerBox.classList.add('not-visible')
            for (const item of response){
                dataBox.innerHTML += `<b>${item.title}</b><p>${item.body}`
            }
        }, 1000)
    },
    error: function(error){
        setTimeout(() => {
            spinnerBox.classList.add('not-visible')
            dataBox.innerHTML += '<b>Failed to load the Data</b>'
        }, 500);
    }
})
