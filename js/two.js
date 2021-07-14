'use strict';


load();

let buybtn=document.getElementById('btnProcessRequest');
buybtn.addEventListener('click',getUserConfarmation);
function getUserConfarmation(event){
    event.preventDefault();
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You will not be able to undo your purchase",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, Buy it now!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'success!',
        'Purchase completed successfully.',
        'success'
      )
      // we should clear the localsorage here but it is not working with me 
    localStorage.clear();
    location.reload();
   // call those functions again
   console.log("hi");
    //   overallPrice();
    //   renderAllItems();
      counter=0;
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Purchase has been cancelled',
        ''
      )
    }
  })

};

// });
