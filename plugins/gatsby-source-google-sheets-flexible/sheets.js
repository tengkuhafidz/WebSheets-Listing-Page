const axios = require('axios')

const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets'

// except for alphanumeric and space
const removeSpecialCharacters = (str) => {
  return str.replace(/[^a-zA-Z0-9 ]/g, '')
}

const toCamelCase = (str) => {
  return str
    .split(' ')
    .map(function (word, index) {
      if (index == 0) {
        return word.toLowerCase()
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

const transformArrayDataToObject = (rawNestedArrayData) => {
  const [rawObjectKeys, ...allObjectValues] = rawNestedArrayData
  const objectKeys = rawObjectKeys.map((key) => toCamelCase(removeSpecialCharacters(key)))
  const arrayOfObjects = allObjectValues.map((singleObjectValues, index) => {
    const singleObject = {
      id: index + 1,
    }
    objectKeys.forEach((objKey, index) => {
      singleObject[objKey] = singleObjectValues[index] ? singleObjectValues[index] : null
    })
    return singleObject
  })

  return arrayOfObjects
}

const extractSheetIdFromUrl = (sheetsUrl) => {
  if (!!sheetsUrl) {
    const pathsAsArray = sheetsUrl.replace(/^https?:\/\//, '').split('/')
    const sheetId = pathsAsArray[3]
    return sheetId
  }
  return null
}

const fetchRawSheetsData = async (options) => {
  const {
    apiKey,
    spreadsheetId,
    spreadsheetUrl,
    tabName,
    cellRange = '',
    majorDimension = 'ROWS',
    valueRenderOption = 'FORMATTED_VALUE',
    dateTimeRenderOption = 'FORMATTED_STRING',
  } = options

  const sheetsId = spreadsheetId ? spreadsheetId : extractSheetIdFromUrl(spreadsheetUrl)
  const sheetsApiUrl = `${BASE_URL}/${sheetsId}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&valueRenderOption=${valueRenderOption}&dateTimeRenderOption=${dateTimeRenderOption}&key=${apiKey}`

  const response = await axios.get(sheetsApiUrl)
  return response.data.values
}

const getSheetsData = async (options) => {
  const rawSheetsData = await fetchRawSheetsData(options)
  return transformArrayDataToObject(rawSheetsData)
}

exports.getSheetsData = getSheetsData
