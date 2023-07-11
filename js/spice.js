let videoBtn = document.querySelectorAll('.vid-btn');


videoBtn .forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active'). classList.remove('active');
        btn. classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

function sendMail(){
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value, 
    };


    const serviceID = "service_w61335c";

    const templateID = "template_1tjz8nf";

    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            document.getElementById("name").value = ""; 
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console .log(res);
            alert("message send successfully");
        })
        .catch((err) => console.log(err));
        
        


}








































/*function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "yuthanabdalla@gmail.com",
        Password : "yueshslxlnsesccb",
        To : 'yuthanabdalla@gmail.com',
        From : document.getElementById("email").value,
        Subject : "new enquiry",
        Body : "Name:" + document.getElementById("name").value
        + "<br> Email:" +  document.getElementById("email").value
        + "<br> Phone no.:" +  document.getElementById("phone").value
        + "<br> Message:" +  document.getElementById("message").value
    }).then(
      message => alert("message sent successfully")
    );
}*/