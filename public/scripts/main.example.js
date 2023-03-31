/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
//console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.loadButton.addEventListener('click', function() {
    const tipeDriver = app.tipeDriver.value;
    const jumlahPenumpang = app.jumlahPenumpang.value;
    
    if (jumlahPenumpang > 0 && tipeDriver) {
        app.clear();
        app.load(jumlahPenumpang).then(app.run);
    }

    console.log('haiiii trigger gk')
    // let backdrop = document.getElementById('bg-backdrop')
    // console.log(backdrop)
    // backdrop.remove()

    var elms = document.querySelectorAll("[id='bg-backdrop']");
 
for(var i = 0; i < elms.length; i++) 
  elms[i].remove(); // <-- whatever you need to do here.

})

app.clearButton.addEventListener('click', function () {
    app.clear();
})

let input_all = document.querySelectorAll('.form-control')
console.log(input_all)
for(var i = 0; i < input_all.length; i++) {
  input_all[i].addEventListener('mousedown', function() {
    const node = document.createElement("div");
      node.classList.add('modal-backdrop', 'fade', 'show')
      node.setAttribute('id', 'bg-backdrop')
      document.body.appendChild(node)
}) // <-- whatever you need to do here.
}

// input_all.addEventListener('mousedown', function() {
//     const node = document.createElement("div");
//       node.classList.add('modal-backdrop', 'fade', 'show')
//       node.setAttribute('id', 'bg-backdrop')
//       document.body.appendChild(node)
// })