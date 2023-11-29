document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    message(); 
  });
  
  function message() {
    var Name = document.getElementById('input-name');
    var email = document.getElementById('input-email');
    var msg = document.getElementById('input-message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
  
    if (Name.value === '' || email.value === '' || msg.value === '') {
      danger.style.display = 'block';
    } else {
      setTimeout(() => {
        Name.value = '';
        email.value = '';
        msg.value = '';
      }, 2000);
  
      success.style.display = 'block';
    }
  
    setTimeout(() => {
      danger.style.display = 'none';
      success.style.display = 'none';
    }, 4000);
  }
  