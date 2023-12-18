
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

  //array of hints to call randomly in function
  const hints = [
    "There may be an easier way to move the sliders...",
    "Try using the arrow keys",
    "Try clicking the sliders instead of dragging"
  ];


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

  //functions for buttons
  function submitPhoneNumber() {
    const sliders = document.querySelectorAll('.digit-slider');
    let phoneNumber = '';

    sliders.forEach(slider => {
      phoneNumber += slider.value;
    });

    alert(`Phone number submitted: ${phoneNumber}`);
  }


  function clearPhoneNumber() {
    const sliders = document.querySelectorAll('.digit-slider');
    sliders.forEach(slider => {
      slider.value = '0';
    });

    updatePhoneNumber(); // Update display after clearing
    showRandomHint();
  }

  //reworked function from WA10 to show random hint from array of hints
  function showRandomHint() {
    const hint = document.getElementById('hint');
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    hint.textContent = `Hint: ${randomHint}`;
  }