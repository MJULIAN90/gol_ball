import Swal from "sweetalert2";

const useAlerts = () => {
  const tigo = (text) =>
    Swal.fire({
      title: "Congratulations",
      text: `${text}.`,
      icon: "success",
      confirmButtonColor: "blue",
    });

  const useAlerts2 = () => {
    const tigo = (text) =>
      Swal.fire({
        title: "Congratulations",
        text: `${text}.`,
        icon: "success",
        confirmButtonColor: "blue",
      });

    const useAlerts3 = () => {
      const tigo = (text) =>
        Swal.fire({
          title: "Congratulations",
          text: `${text}.`,
          icon: "success",
          confirmButtonColor: "blue",
        });

  return {
    tigo,
    messageAlertError,
  };
};

export default useAlerts;
