const scriptURL =
    'https://script.google.com/macros/s/AKfycbzKVaT29H9ltdwoy2Y1DC4IizlF0ceax_1IYQfhfpppH8acYEs6mZOogglZqFUDatNnnA/exec'
const form = document.forms['Fadhlan-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');


form.addEventListener('submit', e => {
    e.preventDefault()
    // submit klik
    // tampilkan loading, munculkan kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            console.log('Success!', response);

            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            // alert
            myAlert.classList.toggle('d-none');

            setTimeout(function () {
                myAlert.classList.toggle('d-none');
            }, 5000);

            // reset form
            form.reset();

        })
        .catch(error => console.error('Error!', error.message));
});

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});