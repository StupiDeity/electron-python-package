# electron-python-package

**Clone and run for a quick way to see Electron in action with Python.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/stupideity/electron-python-package
# Go into the repository
cd electron-python-package
# Install node dependencies
npm install
# Setup virtual environment
cd matmul
# Initialise the environment
virtualenv venv
# Activate the environment
. venv/bin/activate
# Install Python dependencies
pip install -r requirements.txt

# Run the app
electron .
```

## What's Happening
1. Electron will look for the python code in `matmul` directory
1. It will spawn a separate process to launch the python script (`matmul/api.py`)
1. The python code will launch a Flask server and listen on `http://127.0.0.1:5000/matrix/multiply`
1. The API endpoint will accept a POST request of the form:
    1. `{"arr1":[[1,2],[3,4]],"arr2":[[5,6],[7,8]]}`
1. Electron will start up and display the 2D arrays along with a button for Multiply (`main.js`)
1. Clicking the Multiply button will launch a HTTP REST call to the python API endpoint and retrieve the results (`renderer.js`)
1. These results are then dumped to the `#results` div (`index.html`)



## License

[CC0 1.0 (Public Domain)](LICENSE.md)
