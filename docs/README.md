# Beginner Web Project (Python)

A simple beginner-friendly web project built with Python and Flask.

## Project Structure

```
beginner-web-py/
├── app.py              # Flask application entry point
├── requirements.txt    # Python dependencies
├── templates/
│   └── index.html      # HTML template
├── static/
│   ├── css/
│   │   └── styles.css  # CSS styles
│   └── js/
│       └── script.js   # JavaScript file
├── README.md           # Project documentation
├── PUSH_TO_GITHUB.md   # Quick push guide
└── docs/
    ├── README.md       # This file
    ├── CLONE_PROJECT.md # Guide to clone project
    └── PUSH_TO_GITHUB.md # Detailed push guide
```

## Requirements

- Python 3.x
- pip (Python package manager)

## Usage

1. Create a virtual environment:
```bash
python -m venv .venv
```

2. Activate the virtual environment:
- Windows: `.venv\Scripts\activate`
- Mac/Linux: `source .venv/bin/activate`

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
python app.py
```

5. Open your browser and go to `http://localhost:5000`

## Features

- Clean, responsive layout
- Dark mode toggle using JavaScript
- Flask backend serving templates and static files

## Tech Stack

- Python
- Flask
- HTML5
- CSS3
- JavaScript (ES6+)

## License

MIT License
