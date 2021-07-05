const puppeteer = require("puppeteer");

const user = "rajina1463@herrain.com";
const password="Jaspreet";
const reposit_name="hello";
const search="nature";
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();
  await page.goto("https://www.adobe.com/express/create/poster");
// for login 
  await page.setDefaultNavigationTimeout(0);

   await page.waitForSelector("span.template-link")
   await Promise.all([
       page.waitForNavigation(),
       page.click("span.template-link")
   ]) 
   await page.waitForSelector("p button.signInWithGoogleBtn");
   await Promise.all([
       page.waitForNavigation(),
       page.click("p button.signInWithGoogleBtn"),
   ])

 //for username 
   await page.waitForSelector("input[type='email']");
   await page.type("input[type='email']",user);
   //for password
   
    await page.waitForSelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b");
   await Promise.all([
     page.waitForNavigation(),
     page.click(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b"),
 ])
 await page.waitForSelector("input[type='password']");
     await page.type("input[type='password']",password);
 
     await Promise.all([
       page.waitForNavigation(),
       page.click(".VfPpkd-dgl2Hf-ppHlrf-sM5MNb button"),
 ])  

await page.waitForSelector(".post-component.post-button.post-tab-button",{waitUntil:"load",timeout:0})
await Promise.all([
    page.waitForNavigation(),
    page.click(".post-component.post-button.post-tab-button"),
])  
await page.waitForSelector("#component-46 div.frame",{waitUntil:"load",timeout:0})
await Promise.all([
    page.waitForNavigation(),
    page.click("#component-46 div.frame"),
])  

await page.waitForSelector("theo-download-options#downloadButton");
await page.click("theo-download-options#downloadButton");


})()
