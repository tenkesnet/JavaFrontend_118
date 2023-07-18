import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("http://www.python.org")
        self.assertIn("Python", driver.title)
        elem = driver.find_element(By.NAME, "q")
        elem.send_keys("pycon")
        elem.send_keys(Keys.RETURN)
        self.assertNotIn("No results found.", driver.page_source)

    def test_search_in_selenium(self):
        driver = self.driver
        driver.get("https://www.seleniumeasy.com/")
        self.assertIn("Python", driver.title)
        elem = driver.find_element(By.NAME, "q")
        elem.send_keys("pycon")
        elem.send_keys(Keys.RETURN)
        self.assertNotIn("No results found.", driver.page_source)

    def test_search_in_selenium2(self):
        driver = self.driver
        driver.get("https://index.hu/")
        
        elem = driver.find_element(By.XPATH,'//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]')
        elem.click()
        elem = driver.find_element(By.XPATH,'/html/body/div[10]/div/div[2]/ul[2]/li/button')
        elem.click()
        elem = driver.find_element(By.NAME, "s")
        elem.send_keys("bárdó")
        elem.send_keys(Keys.RETURN)
        assert "1 találat az Indexről" in driver.page_source

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()