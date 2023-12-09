
  // Create an array with digits 0 to 9
  const digits = Array.from({ length: 10 }, (_, i) => i);

  // Display sliders and assign random digits
  const sliderContainer = document.getElementById('slider-container');
  digits.forEach((digit, index) => {
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '9';
    slider.step = '1';
    slider.value = '0';
    slider.className = 'digit-slider';
    slider.oninput = () => updatePhoneNumber();

    //stores value
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.id = `hidden-slider-${index}`;
    hiddenInput.value = '0';

    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(hiddenInput);
  });

  // Function to update the displayed phone number
  function updatePhoneNumber() {
    const sliders = document.querySelectorAll('.digit-slider');
    let phoneNumber = '';

    sliders.forEach((slider, index) => {
      const hiddenInput = document.getElementById(`hidden-slider-${index}`);
      hiddenInput.value = slider.value;
      phoneNumber += hiddenInput.value;
    });

    document.getElementById('phone-display').textContent = `Entered Phone Number: ${phoneNumber}`;
  }

  // Function to submit the phone number
  function submitPhoneNumber() {
    const sliders = document.querySelectorAll('.digit-slider');
    let phoneNumber = '';

    sliders.forEach(slider => {
      phoneNumber += slider.value;
    });

    alert(`Phone number submitted: ${phoneNumber}`);
  }