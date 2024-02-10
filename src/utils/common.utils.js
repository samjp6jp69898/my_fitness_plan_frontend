import Swal from "sweetalert2";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createToast(icon, title, text) {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
  });

  toast.fire({
    icon: icon ? icon : "success",
    title: title,
    text: text,
  });
}

function createLoading(title, text) {
  Swal.fire({
    title: title,
    text: text,
    position: "center",
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}

function closeLoading() {
  Swal.clickCancel();
}

function createToastWithTimer(icon, title, text, time) {
  let timerInterval;
  Swal.fire({
    title: title,
    icon: icon ? icon : "success",
    html: `${text}${time / 1000}`,
    timer: time,
    timerProgressBar: true,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    willClose: () => {
      clearInterval(timerInterval);
    },
  })
}


export default {
  delay,
  createToast,
  createLoading,
  closeLoading,
  createToastWithTimer
};
