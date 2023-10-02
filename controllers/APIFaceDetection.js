const handleAPIFaceDetection = (req, res) => {
    const { imageURL } = req.body;

    function APIsetting(imageURL) {
        const PAT = 'bc6cecffb75d4cd492b60e0ac371ba22';
        const USER_ID = 'clarifai';       
        const APP_ID = 'main';
        const MODEL_ID = 'face-detection';
        const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
        const IMAGE_URL = imageURL;
        
        const raw = JSON.stringify({
          "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
          },
          "inputs": [
            {
              "data": {
                "image": {
                  "url": IMAGE_URL
                }
                  }
              }
          ]
        });
        
        const requestOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
          },
          body: raw
        };
      
        return requestOptions;
      }
      
    // Aquí es donde se colocaría la lógica de APIsetting y donde se realizaría

    // la llamada a la API de Clarifai, ya que ahora está en el backend.

    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", APIsetting(imageURL))
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => res.status(500).json('Error with the API call'));
}

module.exports = {
    handleAPIFaceDetection: handleAPIFaceDetection
}