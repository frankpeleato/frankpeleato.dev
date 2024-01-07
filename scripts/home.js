async function executeAPICallout(endpoint, options = null) {
  let response;

  if (options === null) {
    response = await fetch(endpoint);
  } else {
    response = await fetch(endpoint, options);
  }

  if (response.ok) {
    const responseJson = await response.json();
    return responseJson;
  } else {
    const errorMessage = `Error executing API callout to ${endpoint}: ${response.status} - ${response.statusText}`;
    throw new Error(errorMessage);
  }
}

async function onBodyLoad() {
  try {
    const response = await executeAPICallout("https://www.fotmob.com/", {
      method: "GET",
      mode: "no-cors",
    });

    console.log("RESPONSE", response);
  } catch (e) {
    console.error(e);
  }
}
