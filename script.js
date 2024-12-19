function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      city: document.getElementById("city").value,
    };
  
    const serviceID = "service_0kn7ovc";
    const templateID = "template_x7e719r";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("city").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }