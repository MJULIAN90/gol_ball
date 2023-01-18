import Swal from "sweetalert2";


const useAlerts = () => {
  const messageAlert = (text) =>
    Swal.fire({
      title: "Congratulations",
      text: `${text}.`,
      icon: "success",
      confirmButtonColor: "blue",
    });

  const messageAlertError = (text) =>
    Swal.fire({
      title: "Error",
      text: `${text}.`,
      icon: "error",
      confirmButtonColor: "blue",
    });

  const alertSendNtf = (method, id) => {
    Swal.fire({
      title: "Number to tranfer",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCloseButton: true,
      confirmButtonText: "Tranfer Ntf",
      showLoaderOnConfirm: true,
      confirmButtonColor: "blue",
      icon: "info",
      inputValidator: async (wallet) => {
        if (wallet) {
          await method(wallet, id);
        } else {
          Swal.fire({
            title: `Error in name NTF`,
            showCancelButton: false,
            icon: "error",
          });
        }
      },
    });
  };

  return {
    alertSendNtf,
    messageAlert,
    messageAlertError,
  };
};

export default useAlerts;
