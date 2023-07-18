from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://bigprimes.org/")

driver.implicitly_wait(3)


elem = driver.find_element(By.NAME, "numPrimes")
elem.send_keys("5")
elem.send_keys(Keys.RETURN)

elem = driver.find_element(By.NAME, "digits")
elem.send_keys("20")
elem.send_keys(Keys.RETURN)

elem = driver.find_element(By.XPATH,'//*[@id="wrapper3"]/div/div/div[3]/form/button')
elem.click()

el = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH,'//*[@id="primeList"]/table/tbody/tr[5]/td/div'))).text
el = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH,'//*[@id="primeList"]/table/tbody/tr[1]/td/div'))).text
print(el)

#driver.close()