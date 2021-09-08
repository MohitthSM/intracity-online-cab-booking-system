
// Function to 6 digit generate OTP 
function generateOTP1() { 
          
    // Declare a digits variable  
    // which stores all digits 
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 6; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
} 
  
document.write('<body style="text-align:center">OTP of 6 digits :  </body>') 
document.write( generateOTP1(),"<br>" );


