# Password Generator

A simple command-line password generator that creates secure passwords with customizable length and complexity.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/timothyjoh/pw-gen.git
cd pw-gen
chmod +x index.js
sudo ln -s "./index.js" /usr/local/bin/pwgen
```

## Usage

You can run the password generator in two ways:

### If installed locally:

```bash
./index.js [length] [-c]
```

### If installed system-wide:

```bash
pwgen [length] [-c]
```

### Arguments:

- length : (optional) The length of the password (default: 12)
- -c : (optional) Include special characters (!@#$%^&\*?=+-.)

### Examples:

```bash
# Generate a 12-character password (default)
pwgen

# Generate a 16-character password
pwgen 16

# Generate a 12-character password with special characters
pwgen -c

# Generate a 20-character password with special characters
pwgen -c 20
```

## Default Settings

- Includes uppercase letters (A-Z)
- Includes lowercase letters (a-z)
- Includes numbers (0-9)
- Special characters are disabled by default (enable with -c flag)

## License

MIT
