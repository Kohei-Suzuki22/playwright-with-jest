const { afterAll, beforeAll, beforeEach, afterEach, it, expect } = require('@jest/globals')
const { chromium } = require('playwright')

let browser
let page

beforeAll(async () => {
  browser = await chromium.launch()
})

afterAll(async () => {
  await browser.close()
})

beforeEach(async () => {
  page = await browser.newPage()
})

afterEach(async () => {
  await page.close()
})

it('Jest with playwright demo', async () => {
  await page.goto('https:/www.example.com')
  expect(await page.title()).toBe('Example Domain')
})