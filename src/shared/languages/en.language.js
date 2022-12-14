const EnglishDictionary = {
  global: {
    language: {
      en: "English",
      es: "Spanish",
    },
    languagePrefix: {
      en: "EN",
      es: "ES",
    },
    gender: {
      male: "Male",
      female: "Female",
    },
    weekDayPrefix: {
      monday: "Mo",
      tuesday: "Tu",
      wednesday: "We",
      thursday: "Th",
      friday: "Fr",
      saturday: "Sa",
      sunday: "Su",
    },
    error: {
      required: "Required",
      tooShort: "More characters needed",
      tooLong: "Less characters needed",
      invalidString: "A text value is required",
      invalidNumber: "A numeric value is required",
      invalidEmail: "Email provided is not valid",
      invalidPassword: "Password provided is not valid",
      invalidConfirmPassword: "The passwords are not the same",
      specialCharacterRequired:
        "Special character required, like: (!, #, $, %, &, *)",
      numericDigitRequired:
        "Digit character required, like: (0, 1, 2, 3, 4, 5, 7, 8, 9)",
      lowerCaseRequired: "Lower case needed",
      upperCaseRequired: "Upper case needed",
      notSpacesAndSpecialCharacters:
        "Not white spaces and special character supported",
    },
  },
  login: {
    title: "Login",
    email: "Email",
    password: "Password",
    submitButton: "Login",
    forgotPassword: "Forgot your password?",
    signUp: "Don't have an account? Sign up",
    errorMessage: "Email or password incorrect",
  },
  signUp: {
    title: "Sign up",
    fullName: "Full name",
    email: "Email",
    password: "Password",
    birthday: "Birthday",
    legalDocumentId: "Legal document id",
    address: "Address",
    submitButton: "Sign up",
    alreadyUser_1: "Already have an account?",
    alreadyUser_2: "Login",
    successfullMessageTitle: "Successfull",
    successfullMessageBody: "Your account has been created",
    errorMessageTitle: "Error",
    errorMessageBody: "Please, try again",
  },
  navBar: {
    home: "Home",
    profile: "Profile",
    myProfile: "My Profile",
    updateProfile: "Update Profile",
    service: "Service",
    allServices: "All services",
    serviceRequest: "Service Request",
    loginButton: "Login",
    logoutButton: "Logout",
    createService: "Create Service",
    myOrders: "My Orders",
    resquestedOrders: "Requested Orders",
  },
  profileSettings: {
    title: "Profile Settings",
    fullName: "Name",
    birthday: "Birthday",
    address: "Address",
    email: "Email",
    password: "Password",
    legalDocumentId: "Legal Document",
    updateButton: "Update",
    successfullMessageTitle: "Profile updated",
    successfullMessageBody: "Your profile has been updated successfully",
    errorMessageTitle: "Error updating profile",
    errorMessageBody: "An error has occurred while updating your profile",
    
  },
  languagesModal: {
    title: "Select your language",
    close: "Close",
  },
  orderModal:{
    title: "Make your order",
    close: "Close",
    submitButton: "Order",
    direction: "Direction",
    requiredDate: "Date and time",
    description: "Description",
  },
  orderToast:{
    title: "Order",
    message: "Your order has been made",
    errorMessage: "Error making your order",
  },
  createService:{
    errorMessage: "Error creating service",
    successfullMessage: "Service created successfully",
    title: "Create Service",
    serviceName: "Service Name",
    description: "Description",
    email: "Email",
    phoneNumber: "Phone Number",
    tags: "Tags",
    submitButton: "Create",
  },
  serviceCard:{
    viewServiceButton: "View Service",
    contactInfo: "Contact Info",
    email: "Email",
    phoneNumber: "Phone Number",
  },
  orderList: {
    titleOrderOtherUser: "Service orders sent",
    titleOrderTodo: "Service orders received",
    acceptButton: "Accept",
    rejectButton: "Reject",
    completeButton: "Complete",
    acceptToastTitle: "Order accepted",
    acceptToastDescription: "The order has been accepted",
    rejectToastTitle: "Order rejected",
    rejectToastDescription: "The order has been rejected",
    completeToastTitle: "Order completed",
    completeToastDescription: "The order has been completed",
  },
  profileService: {
    description: "Description",
    linkButton: "See service",
  },
  offert:{
    dateAndTime: "Date and time",
    description: "Description",
    direction: "Direction",
    status: "Status",
  }
  
};

export default EnglishDictionary;
