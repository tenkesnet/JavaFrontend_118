from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

browser = webdriver.Chrome(options=chrome_options)
action = webdriver.ActionChains(browser)


browser.get('https://www.seleniumeasy.com/')


elem = browser.find_element(By.XPATH, '//*[@id="node-20"]/div/div/div/div[1]/div/div[2]/p[3]/a[1]')  # Find the search box
elem.click()
action.pause(10)
elem = browser.find_element(By.XPATH, '//*[@id="navbar-collapse"]/nav/ul/li[6]/a')
elem.click()
