document.getElementById('button1').addEventListener('click, loadData');

function loadData() {

  // Create an XHR Object

  const xhr = new XMLHttpRequest();

  // OPEN - specify the request were making and where were making it to

  xhr.open('Get', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders

  xhr.onprogress = function () {

    console.log('READYSTATE', xhr.readyState);

  };

  xhr.onload = function () {

    if (this.status === 200) {
      // console.log(this.responseText);

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;

    }
  };

  xhr.onerror = function () {

    console.log('Request error');

  };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing XMLHttpRequest
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: 'OK'
  // 403: 'Forbidden'
  // 404: 'Not Found'

}
