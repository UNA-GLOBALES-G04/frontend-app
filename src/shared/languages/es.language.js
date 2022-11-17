const SpanishDictionary = {
  global: {
    language: {
      en: "Inglés",
      es: "Español",
    },
    languagePrefix: {
      en: "EN",
      es: "ES",
    },
    gender: {
      male: "Masculino",
      female: "Femenino",
    },
    weekDayPrefix: {
      monday: "Lu",
      tuesday: "Ma",
      wednesday: "Mi",
      thursday: "Ju",
      friday: "Vi",
      saturday: "Sa",
      sunday: "Do",
    },
    error: {
      required: "Requerido",
      tooShort: "Se necesitan más caracteres",
      tooLong: "Se necesitan menos caracteres",
      invalidString: "Se necesita un valor de tipo texto",
      invalidNumber: "Se necesita un valor de tipo numérico",
      invalidEmail: "El correo electrónico proporcionado no es valido",
      invalidPassword: "La contraseña no es valida",
      invalidConfirmPassword: "Las contraseñas no coinciden",
      specialCharacterRequired:
        "Se necesita un carácter especial como: (!, #, $, %, &, *)",
      numericDigitRequired:
        "Se necesita un carácter numérico como: (0, 1, 2, 3, 4, 5, 7, 8, 9)",
      lowerCaseRequired: "Se necesita un carácter en minúscula",
      upperCaseRequired: "Se necesita un carácter en mayúscula",
      notSpacesAndSpecialCharacters:
        "No se permite espacios ni caracteres especiales",
    },
  },
  login: {
    title: "Iniciar sesión",
    email: "Correo electrónico",
    password: "Contraseña",
    submitButton: "Iniciar sesión",
    forgotPassword: "¿Olvidaste tu contraseña?",
    signUp: "¿No tienes una cuenta? Regístrate",
    errorMessage: "Correo electrónico o contraseña incorrectos",
  },
  signUp: {
    title: "Regístrate",
    fullName: "Nombre completo",
    email: "Correo electrónico",
    password: "Contraseña",
    birthday: "Fecha de nacimiento",
    legalDocumentId: "Documento de identidad",
    address: "Dirección",
    submitButton: "Regístrate",
    alreadyUser_1: "¿Ya tienes una cuenta?",
    alreadyUser_2: "Iniciar sesión",
    successfullMessageTitle: "Registro exitoso",
    successfullMessageBody: "Se ha enviado un correo electrónico de confirmación",
    errorMessageTitle: "Error al registrar",
    errorMessageBody: "Por favor, intente nuevamente",
  },
  navBar: {
    home: "Inicio",
    profile: "Perfil",
    myProfile: "Mi Perfil",
    updateProfile: "Actualizar perfil",
    service: "Servicio",
    allServices: "Todos los servicios",
    serviceRequest: "Solicitar servicio",
    loginButton: "Iniciar sesión",
    logoutButton: "Cerrar sesión",
    createService: "Crear servicio",
    myOrders: "Mis ordenes",
    resquestedOrders: "Ordenes solicitadas",
  },
  profileSettings: {
    title: "Configuración de perfil",
    fullName: "Nombre completo",
    password: "Contraseña",
    birthday: "Fecha de nacimiento",
    legalDocumentId: "Documento de identidad",
    address: "Dirección",
    email: "Correo electrónico",
    password: "Contraseña",
    updateButton: "Actualizar",
    successfullMessageTitle: "Actualización exitosa",
    successfullMessageBody: "Se ha actualizado su perfil correctamente",
    errorMessageTitle: "Error al actualizar",
    errorMessageBody: "Ha ocurrido un error al actualizar su perfil",
  },
  languagesModal:{
    title: "Selecciona un idioma",
    close: "Cerrar",
  },
  orderModal:{
    title: "Solicitar un servicio",
    close: "Cerrar",
    submitButton: "Realizar solicitar",
    direction: "Dirección",
    requiredDate: "Fecha y hora",
    description: "Descripción",

  },
  orderToast:{
    title: "Solicitud de servicio",
    description: "Se ha realizado la solicitud de servicio",
    errorMessage: "Ha ocurrido un error al realizar la solicitud de servicio",
  },
  createService: {
    errorMessage: "Error al crear el servicio",
    successfullMessage: "Servicio creado exitosamente",
    title: "Crear un servicio",
    serviceName: "Nombre del servicio",
    description: "Descripción",
    email: "Correo electrónico",
    phoneNumber: "Número de teléfono",
    tags: "Etiquetas",
    submitButton: "Crear servicio",
  },
  serviceCard:{
    viewServiceButton: "Ver servicio",
    contactInfo: "Información de contacto",
    email: "Correo electrónico",
    phoneNumber: "Número de teléfono",
  },
  orderList: {
    titleOrderOtherUser: "Solicitudes de servicio enviadas",
    titleOrderTodo: "Solicitudes de servicio recibidas",
    acceptButton: "Aceptar",
    rejectButton: "Rechazar",
    completeButton: "Completar",
    acceptToastTitle: "Solicitud aceptada",
    acceptToastDescription: "La solicitud de servicio ha sido aceptada",
    rejectToastTitle: "Solicitud rechazada",
    rejectToastDescription: "La solicitud de servicio ha sido rechazada",
    completeToastTitle: "Solicitud completada",
    completeToastDescription: "La solicitud de servicio ha sido completada",
  },
  profileService: {
    description: "Descripción",
    linkButton: "Ver servicio",
  },
  offert:{
    dateAndTime: "Fecha y hora",
    description: "Descripción",
    direction: "Dirección",
    status: "Estado",
  }



};

export default SpanishDictionary;
