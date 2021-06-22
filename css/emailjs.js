function sendEmail(bookingForm) {
    emailjs.send("gmail","Duke Moyo Template",{
        "from_name": bookingForm.name.value,
        "from_email": bookingForm.emailAaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        })
}