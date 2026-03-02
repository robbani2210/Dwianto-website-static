import requests
import sys
import json
from datetime import datetime

class DwiantoCapitalAPITester:
    def __init__(self, base_url="https://global-advisory-9.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2, default=str)[:200]}...")
                    return True, response_data
                except:
                    return True, response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append(f"{name}: Expected {expected_status}, got {response.status_code}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append(f"{name}: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_get_blogs(self):
        """Test getting all blogs"""
        return self.run_test("Get All Blogs", "GET", "blogs", 200)

    def test_get_blog_by_slug(self, slug="complete-guide-fdi-indonesia-2025"):
        """Test getting a specific blog by slug"""
        return self.run_test(f"Get Blog by Slug ({slug})", "GET", f"blogs/{slug}", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+1234567890",
            "company": "Test Company",
            "message": "Testing contact form submission",
            "service_interest": "M&A Advisory"
        }
        return self.run_test("Contact Form Submission", "POST", "contact", 200, contact_data)

    def test_get_contacts(self):
        """Test getting all contacts"""
        return self.run_test("Get All Contacts", "GET", "contact", 200)

    def test_blog_categories(self):
        """Test getting blogs by category"""
        return self.run_test("Get Blogs by Category", "GET", "blogs?category=Investment", 200)

    def test_published_blogs_only(self):
        """Test getting only published blogs"""
        return self.run_test("Get Published Blogs Only", "GET", "blogs?published_only=true", 200)

def main():
    print("🚀 Starting Dwianto Capital Advisory API Tests")
    print("=" * 60)
    
    tester = DwiantoCapitalAPITester()
    
    # Test API root
    success, response = tester.test_api_root()
    if not success:
        print("❌ API root failed, backend may not be running")
        return 1

    # Test blog endpoints
    print("\n📚 Testing Blog Endpoints...")
    tester.test_get_blogs()
    tester.test_get_blog_by_slug()
    tester.test_blog_categories()
    tester.test_published_blogs_only()

    # Test contact endpoints
    print("\n📞 Testing Contact Endpoints...")
    tester.test_contact_submission()
    tester.test_get_contacts()

    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed_test in tester.failed_tests:
            print(f"   - {failed_test}")
    else:
        print("\n✅ All tests passed!")

    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())