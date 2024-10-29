// This is the Script

document.getElementById("fetchData")
.addEventListener("click", async function (){
  // Call the Async function and wait for the response
  try {
    const data = await fetchData()

    // display the fetchData from on the web page;
    document.getElementById("result")
    .innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    // handle errors
    document.getElementById("result")
    .innerText = "Error:" + error.message
  }
})

async function fetchData () {
  // making GET reques to an API:
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // checking if the response was ok:
  if (!response.ok) {
    throw new Error ("Network response was not okay" + response.statusText)
  }

  // Parse and return the JSON response
  const data = await response.json();
  return data
}
