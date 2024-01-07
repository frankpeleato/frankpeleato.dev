async function executeAPICallout(endpoint, options = null) {
  let response;

  if (options === null) {
    response = await fetch(endpoint);
  } else {
    response = await fetch(endpoint, options);
  }

  if (response.ok) {
    const responseJson = await response.json();
    console.log("RESPONSE", responseJson);
    // return responseJson;
  } else {
    const errorMessage = `Error executing API callout to ${endpoint}: ${response.status} - ${response.statusText}`;
    // throw new Error(errorMessage);
    console.error(errorMessage);
  }
}

async function onBodyLoad() {
  await executeAPICallout("https://www.fotmob.com");
}
