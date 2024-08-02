const serviceId = 'service_fi2b9s5';
const templateId = 'template_h8oqc2f';
const apikey = 'DM3ESnyTx8MI4rOIG';

const frmContact = document.getElementById('frm-contact');

// Inicializa EmailJS
emailjs.init(apikey)

const sendEmail = async (event) => {
  event.preventDefault()
  
  try {
    // Enviar el formulario
    const result = await emailjs.sendForm(serviceId, templateId, frmContact);
    
    // Mostrar mensaje de éxito
    await Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Su mensaje se ha enviado con éxito.'
    });
    
  } catch (error) {
    // Mostrar mensaje de error
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Tu mensaje no pudo ser enviado. Error: ${error.message}`
    });
  }
};

frmContact.addEventListener('submit', sendEmail);
