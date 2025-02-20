#!/usr/bin/env node

function generateSecurePassword(length = 12, options = {}) {
  const {
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = false,
  } = options

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const numberChars = '0123456789'
  const symbolChars = '!@#$%^&*?=+-.'

  let characterSet = ''
  let password = ''
  
  // First, add one character from each required set
  if (includeUppercase) {
    characterSet += uppercaseChars
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]
  }
  if (includeLowercase) {
    characterSet += lowercaseChars
    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]
  }
  if (includeNumbers) {
    characterSet += numberChars
    password += numberChars[Math.floor(Math.random() * numberChars.length)]
  }
  if (includeSymbols) {
    characterSet += symbolChars
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)]
  }

  // Fill the rest of the password length with random characters
  const remainingLength = length - password.length
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length)
    password += characterSet[randomIndex]
  }

  // Shuffle the password to avoid predictable character positions
  return password.split('').sort(() => Math.random() - 0.5).join('')
}

// Parse command line arguments
const args = process.argv.slice(2)
const includeComplex = args.includes('-c')
const passwordLength = parseInt(args.find((arg) => !arg.startsWith('-'))) || 12

const newPassword = generateSecurePassword(passwordLength, { includeSymbols: includeComplex })
console.log(newPassword)
