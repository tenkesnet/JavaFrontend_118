from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://index.hu")

assert "Index" in driver.title
driver.implicitly_wait(3)

elem = driver.find_element(By.XPATH,'//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]')
elem.click()
elem = driver.find_element(By.XPATH,'/html/body/div[10]/div/div[2]/ul[2]/li/button')
elem.click()
elem = driver.find_element(By.NAME, "s")
#elem = driver.find_element(By.ID, "expr")
#elem.clear()
elem.send_keys("bárdó")
elem.send_keys(Keys.RETURN)
assert "1 találat az Indexről" not in driver.page_source
#driver.close()