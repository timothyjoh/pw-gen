#!/usr/bin/env node

function generateSecurePassword(length = 12, options = {}) {
  const {
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = false, // Changed default to false
  } = options

  let characterSet = ''
  if (includeUppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (includeLowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz'
  if (includeNumbers) characterSet += '0123456789'
  if (includeSymbols) characterSet += '!@#$%^&*?=+-.'

  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length)
    password += characterSet[randomIndex]
  }

  return password
}

// Parse command line arguments
const args = process.argv.slice(2)
const includeComplex = args.includes('-c')
const passwordLength = parseInt(args.find((arg) => !arg.startsWith('-'))) || 12

const newPassword = generateSecurePassword(passwordLength, { includeSymbols: includeComplex })
console.log(newPassword)
